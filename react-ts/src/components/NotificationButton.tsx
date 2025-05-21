import React from "react";
import { IoMdNotifications }  from "../assets/index";
const NotificationButton: React.FC = () => {
  return (
    <section>
      <div className="">
        <button className="group flex flex-col items-center p-2 absolute top-[3.8rem] transform -translate-y-1/2 ml-5">
          <IoMdNotifications className="w-8 h-8 text-gray-600" />
          <span className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Notification
          </span>
        </button>
      </div>
    </section>
  );
};

export default NotificationButton;
