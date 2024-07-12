import React from "react";

function Notification() {
  // Static notifications data (array of objects)
  const notifications = [
    { id: 1, message: "New message received" },
    { id: 2, message: "Reminder: Tomorrow's meeting at 10 AM" },
    { id: 3, message: "Congratulations! You have a new follower" },
    { id: 4, message: "Your payment has been processed successfully" },
  ];

  return (
    <main className="text-white flex justify-center mt-5 pl-16 pr-16">
      <div className="w-full max-w-5xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-4">Notifications</div>

        <div className="divide-y divide-gray-600">
          {notifications.map((notification) => (
            <a key={notification.id} href="#" className="block py-2">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-sm">{notification.message}</div>
                </div>
                <div className="text-xs text-gray-400">Now</div>
              </div>
            </a>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center mt-4 text-sm text-gray-400">
            No new notifications.
          </div>
        )}
      </div>
    </main>
  );
}

export default Notification;
