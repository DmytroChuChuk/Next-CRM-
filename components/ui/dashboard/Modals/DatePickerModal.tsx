import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CalendarCollapse from "../CalendarCollapse";
import TimePickerCom from "../../auth/client/TimePickerCom";

export default function DatePickerModal({
  title,
  open,
  setOpen,
  setValue,
}: {
  title: string;
  open: boolean;
  setOpen: any;
  setValue: any;
}) {
  const handleDateSelect = (newDate: any) => {
    const dateStr = `${newDate.$D} / ${newDate.$M} / ${newDate.$y}`;
    setValue(dateStr);
  };

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="p-4 bg-white rounded-t-xl z-[1005]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex">
          <div className="text-[#CB5A6F] font-bold">{title}</div>
          <div className="ml-auto">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <CalendarCollapse handleDateClick={handleDateSelect} />
        </div>
        <div>
          <div
            className="w-full py-4 rounded-md cursor-pointer text-white bg-[#CB5A6F] text-center"
            onClick={() => setOpen(false)}
          >
            Choose day
          </div>
        </div>
      </div>
    </div>
  );
}
