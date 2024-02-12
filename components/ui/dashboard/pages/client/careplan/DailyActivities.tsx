import { colors } from "@mui/material";
import React from "react";

const DailyActivities = () => {
  return (
    <div className="flex flex-col mx-32 my-12">
      <div className="text font-frutiger text-lg font-bold flex justify-center ">
        <p style={{ color: "#282828", fontSize: "28px" }}>
          Showing your daily activity schedules
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6 my-12 px-40">
        <div className="flex flex-col">
          <div
            className="flex flex-row justify-between"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Waking Time</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Sleeping Time</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>10:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div style={{ fontSize: "24px", color: "#CB5A6F" }}>Meal Times</div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Breakfast</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Lunch</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>12:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Snack</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>07:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Dinner</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>10:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div style={{ fontSize: "24px", color: "#CB5A6F" }}>
            Activities and Routines
          </div>
          <div
            className="flex flex-row justify-between"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Waking Time</p>
            </div>
            <div className="flex flex-row gap-3">
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div style={{ color: "#282828", fontSize: "16px" }}>
            2 Times a week
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyActivities;
