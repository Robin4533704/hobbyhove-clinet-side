import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../AuthLayout/auth/AuthProvider";
import useAxios from "../AuthLayout/auth/useAxios";
import Loading from "../Components/banner/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyGroups = () => {
  const { user } = useAuth();
  const { api } = useAxios();

  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editGroup, setEditGroup] = useState(null);

  // Fetch groups created by logged-in user
  useEffect(() => {
    if (!user?.email) return;

    const fetchGroups = async () => {
      try {
        setLoading(true);
        const res = await api.get("/groups");
        const userGroups = res.data.filter((group) => group.userEmail === user.email);
        setMyGroups(userGroups);
      } catch (err) {
        console.error("Failed to fetch groups:", err);
        toast.error("Failed to load groups");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [user?.email, api]);

  // Delete group
  const handleDelete = async (groupId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        await api.delete(`/groups/${groupId}`);
        Swal.fire("Deleted!", "Group has been deleted.", "success");
        setMyGroups((prev) => prev.filter((g) => g._id !== groupId));
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete group", "error");
      }
    }
  };

  // Open modal for editing
  const handleEdit = (group) => {
    setEditGroup(group);
    setIsModalOpen(true);
  };

  // Handle input changes inside modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditGroup((prev) => ({ ...prev, [name]: value }));
  };

 const handleUpdate = async () => {
  try {
    const { _id, ...updateData } = editGroup; // Remove _id
    console.log("Sending update:", updateData);

    const res = await api.put(`/groups/${editGroup._id}`, updateData);
        console.log("updated:", res.data)
    Swal.fire("Updated!", "Group has been updated.", "success");

    // Update state locally
    setMyGroups((prev) =>
      prev.map((g) => (g._id === editGroup._id ? { ...g, ...updateData } : g))
    );
    setIsModalOpen(false);
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Failed to update group", "error");
  }
};

  if (!user || loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto pt-16">
      <ToastContainer />
      <h2 className="text-2xl mt-8 text-lime-400 font-bold mb-6 text-center">My Groups</h2>

      {myGroups.length === 0 ? (
        <p>No groups created yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full  shadow-md rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Group Name</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Start Date</th>
                <th className="py-2 px-4 border">Max Members</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myGroups.map((group) => (
                <tr key={group._id}>
                  <td className="py-2 px-4 border">{group.groupName}</td>
                  <td className="py-2 px-4 border">{group.hobbyCategory}</td>
                  <td className="py-2 px-4 border">{group.location}</td>
                  <td className="py-2 px-4 border">{group.startDate}</td>
                  <td className="py-2 px-4 border">{group.maxMembers}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEdit(group)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for editing */}
      {isModalOpen && editGroup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="text-lg font-bold mb-4">Edit Group</h3>

            <input
              type="text"
              name="groupName"
              value={editGroup.groupName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mb-2"
              placeholder="Group Name"
            />
            <input
              type="text"
              name="hobbyCategory"
              value={editGroup.hobbyCategory}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mb-2"
              placeholder="Hobby Category"
            />
            <input
              type="text"
              name="location"
              value={editGroup.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mb-2"
              placeholder="Location"
            />
            <input
              type="date"
              name="startDate"
              value={editGroup.startDate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <input
              type="number"
              name="maxMembers"
              value={editGroup.maxMembers}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mb-2"
              placeholder="Max Members"
            />

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
