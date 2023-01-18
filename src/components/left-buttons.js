import React from "react";
import "./left-buttons.css";

function LeftButtons() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Toronto",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Beijing",
    },
  ];
  return (
    <div className="left-btns flex flex-col">
      {cities.map((city, idx) => {
        return (
          <button key={idx} className="left-btn text-white font-medium">
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default LeftButtons;
