"use client";
import React from "react";
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function VideoChats() {
  return (
    <main>
      <div className="mt-28 sm:mt-20 px-6">
        <h2 className="mb-6 font-semibold text-xl sm:text-3xl">
          Upcoming Video Chats
        </h2>
        <div className="w-full flex justify-center flex-col items-center">
          <p className="mt-6">There is no upcoming Video Chat link!</p>
        </div>
        {false && (
          <div className="flex flex-col gap-4">
            {people.map((person) => (
              <div className="px-8 py-4 bg-white rounded-xl shadow-lg dark:bg-gray-800">
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-15 h-15 mr-4 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                      alt="avatar"
                    />
                    <a
                      className="font-bold text-gray-700 text-lg cursor-pointer dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      Khatab wedaa
                    </a>
                  </div>
                </div>
                <div className="flex mt-5 items-center justify-between">
                  <span className="text-lg  font-normal text-gray-600 dark:text-gray-400">
                    Mar 10, 2024
                  </span>
                  <button
                    className="px-6 py-1 text-lg font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    tabindex="0"
                    role="button"
                  >
                    Expired
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
