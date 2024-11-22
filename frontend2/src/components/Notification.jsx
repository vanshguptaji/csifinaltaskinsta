import React from "react";

const notifications = [
  { id: 1, user: "Alanna Myassa", action: "Followed you.", time: "30 minutes ago", isNew: false, type: "follow" },
  { id: 2, user: "Alanna Myassa", action: "Liked your post 'Nice logo'.", time: "30 minutes ago", isNew: true, type: "like" },
  { id: 3, user: "Alanna Myassa", action: "Liked your post 'Nice logo'.", time: "30 minutes ago", isNew: true, type: "like" },
  { id: 4, user: "Alanna Myassa", action: "Followed you.", time: "30 minutes ago", isNew: false, type: "follow" },
  { id: 5, user: "Alanna Myassa", action: "Commented on your post.", time: "30 minutes ago", isNew: true, type: "comment" },
  { id: 6, user: "Alanna Myassa", action: "Commented on your post.", time: "30 minutes ago", isNew: true, type: "comment" },
  { id: 7, user: "Alanna Myassa", action: "Followed you.", time: "30 minutes ago", isNew: false, type: "follow" },
];

const Notifications = () => {
  return (
    <div className="bg-gray-900 text-white w-full rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`flex items-center p-2 rounded-lg ${
              notif.isNew ? "bg-gray-800" : "bg-gray-700"
            }`}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
              {notif.user.charAt(0)}
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-sm">
                <span className="font-medium">{notif.user}</span> {notif.action}
              </p>
              <span className="text-xs text-gray-400">{notif.time}</span>
            </div>
            {notif.type === "follow" ? (
              <button
                className="ml-auto bg-blue-600 text-sm px-3 py-1 rounded-lg hover:bg-blue-700"
              >
                {notif.isNew ? "Follow back" : "Followed"}
              </button>
            ) : (
              <span
                className={`ml-auto w-3 h-3 rounded-full ${
                  notif.isNew ? "bg-red-500" : "bg-gray-500"
                }`}
              ></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
