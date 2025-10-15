import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/banner/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../AuthLayout/auth/useAxios"; // ✅ direct import

const EditGroup = () => {
  const { id } = useParams(); 
 const navigate = useNavigate()
  const { api } = useAxios();
  const [groupData, setGroupData] = useState({
    groupName: "",
    hobbyCategory: "",
    location: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch existing group data
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await api.get(`/groups/${id}`);
        setGroupData({
          groupName: res.data.groupName || "",
          hobbyCategory: res.data.hobbyCategory || "",
          location: res.data.location || "",
          imageUrl: res.data.imageUrl || "",
        });
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch group:", err);
        toast.error("Failed to fetch group data");
        setLoading(false);
      }
    };
    fetchGroup();
    console.log("Editing group ID:", id);
  }, [id, api]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      console.log("Editing group ID:", id);
      console.log("Group data:", groupData);

      // ✅ Remove _id if present to avoid conflict
      const { _id, ...updatePayload } = groupData;

      const res = await api.put(`/groups/${id}`, updatePayload);
      console.log("Updated:", res.data);
      toast.success("Group updated successfully!");
       navigate(`/group/${id}`);
    } catch (err) {
      console.error("Failed to update group:", err);
      toast.error("Failed to update group!");
    } finally {
      setSaving(false);
    }
   
  };

  if (loading) return <Loading />;

  return (
  <div>
    <div className="pt-24">
      <button onClick={()=>(navigate(-1))} 
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600" >
        Back
      </button>
    </div>
      <div className="max-w-xl mx-auto p-6 shadow-md rounded">
      <ToastContainer />
      <h2 className="text-2xl font-bold mt-6 mb-6 text-lime-400">Edit Group</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Group Name</label>
          <input
            type="text"
            name="groupName"
            value={groupData.groupName}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hobby Category</label>
          <input
            type="text"
            name="hobbyCategory"
            value={groupData.hobbyCategory}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={groupData.location}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={groupData.imageUrl}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-400 text-white py-2 px-4 rounded hover:bg-lime-500"
          disabled={saving}
        >
          {saving ? "Saving..." : "Update Group"}
        </button>
      </form>
    </div>
  </div>
  );
};

export default EditGroup;
