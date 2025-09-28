import React from "react";
import GroupCard from "./GroupsCard"; 

const groups = [
  { id: 1, name: "📚 Book Club", description: "Connect with book lovers and share your favorite reads.", startDate: "2025-09-20" },
  { id: 2, name: "🎨 Art Group", description: "Showcase your creativity and learn from others.", startDate: "2025-10-05" },
  { id: 3, name: "⚽ Sports Enthusiasts", description: "Join local matches or discuss your favorite sports.", startDate: "2025-08-15" },
  { id: 4, name: "🎵 Music Lovers", description: "Share music, instruments, and jams together.", startDate: "2025-09-28" },
  { id: 5, name: "🍳 Cooking Club", description: "Explore recipes and cooking techniques.", startDate: "2025-09-25" },
  { id: 6, name: "🖥️ Coding Circle", description: "Collaborate on coding projects and challenges.", startDate: "2025-10-01" },
  { id: 7, name: "🌿 Gardening Group", description: "Share gardening tips and plant care.", startDate: "2025-10-10" },
];

const SocialCard = () => {
  return (
    <div className="min-h-screen  dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300">
      {/* Section: Explore Hobby Groups */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Explore Hobby Groups
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          Find groups that match your hobbies and interests.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SocialCard;
