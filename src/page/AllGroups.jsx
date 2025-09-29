import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import useAxios from "../AuthLayout/auth/useAxios";
import Loading from "../Components/banner/Loading";

const AllGroups = () => {
  const { api } = useAxios();
  const [groups, setGroups] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await api.get("/groups");
        // Safely handle response
        const data = Array.isArray(res.data) ? res.data : res.data.groups || [];
        setGroups(data);
      } catch (err) {
        console.error("Failed to fetch groups:", err);
        setError("Failed to fetch groups");
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, [api]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this group?")) return;
    try {
      await api.delete(`/groups/${id}`);
      setGroups((prev) => prev.filter((g) => g._id !== id));
    } catch (err) {
      console.error("Failed to delete group:", err);
      alert("Failed to delete group");
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center pt-25">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto pt-18">
      <h1 className="text-2xl font-bold text-center mt-6 mb-4 text-lime-400">
        All Hobby Groups
      </h1>

      {groups.length === 0 ? (
        <p>No groups found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group._id}
              className=" shadow-md rounded overflow-hidden relative"
            >
              <img
                src={group.imageUrl || "https://via.placeholder.com/300x150"}
                alt={group.groupName}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{group.groupName}</h3>
                <p className="text-sm text-gray-600">{group.hobbyCategory}</p>
                <p className="text-sm">{group.location}</p>

                <div className="flex items-center mt-2 gap-3">
                  <Link
                    to={`/group/${group._id}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    <FaEye className="text-xl" />
                  </Link>
                  <Link
                    to={`/group/edit/${group._id}`}
                    className="text-yellow-500 hover:text-yellow-700 text-lg"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
