import React from "react";
import ChooseDay from "../ChooseDay";
import ChooseTime from "../ChooseTime";
import { Dialog, Modal } from "@mui/material";
import ServiceSelect from "../ServiceSelect";
import { PrimaryButton } from "../../common/PrimaryButton";
import ClientSelect from "../ClientSelect";

export default function CreateNewTaskModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  return (
    <Modal
      open={open}
      className="flex justify-center items-center"
      onClose={() => setOpen(false)}
    >
      <div className="p-8 bg-white">
        <div className="flex">
          <div className="text-[24px] font-bold">Create New Task</div>
          <div className="ml-auto font-bold text-primary">
            <ClientSelect />
          </div>
        </div>
        <div className="mt-8">
          <ServiceSelect />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Select Days</div>
            <div className="w-[240px] mt-2">
              <ChooseDay />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Time-From</div>
            <div className="w-[240px] mt-2">
              <ChooseTime />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Time-To</div>
            <div className="w-[240px] mt-2">
              <ChooseTime />
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex-1">
            <div
              className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <span className="text-primary text-[20px]">Cancel</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center bg-primary cursor-pointer">
              <span className="text-white text-[20px]">Save</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
