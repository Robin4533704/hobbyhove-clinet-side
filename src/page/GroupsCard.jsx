import React from "react";
import { NavLink } from "react-router";

const GroupCard = ({ group }) => {
  const now = new Date();
  const groupStartDate = new Date(group.startDate);
  const isActive = groupStartDate >= now;

  return (
    <div className="p-6 rounded-lg shadow bg-gray-100 dark:bg-gray-800 flex flex-col justify-between transition-colors duration-300">
      <div>
        <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
        <p className="text-gray-700 dark:text-gray-300">{group.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Start Date: {groupStartDate.toLocaleDateString()}
        </p>
      </div>

      <div className="mt-4">
        {isActive ? (
          <NavLink to="/creategrupe" className="w-full px-4 py-2 bg-lime-400 hover:bg-lime-600 text-white rounded-lg transition">
            Join Group
          </NavLink>
        ) : (
          <p className="text-red-500 font-semibold text-center">
            This group is no longer active.
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupCard;
