import DurationPane from "@/components/ui/auth/client/DurationPane";
import InputField from "@/components/ui/auth/client/InputField";
import { MoneysIcon, WalletIcon } from "@/components/ui/common/Icons";
import { Avatar } from "@mui/material";
import { TimeIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";

const InfoComp = ({
  description,
  info,
  icon,
  color,
}: {
  description: string;
  info: string;
  icon: any;
  color: string;
}) => {
  return (
    <div className="flex items-center">
      <div className={`p-2 rounded-full`} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-[#828282]">{description}</span>
        <span className="text-[#282828] font-bold">{info}</span>
      </div>
    </div>
  );
};

const TimeSheetReviewItem = (props: any) => {
  return (
    <div
      className="m-4 p-4 bg-white flex flex-col gap-y-4"
      style={{
        border: "0.4px solid var(--Grey-border, #C4C4C4",
      }}
    >
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-4">
          <span className="font-bold text-[20px]">Date: Mon, 23/09/23</span>
          <span className="">Hours Worked: 8hours</span>
        </div>
        <div className="flex gap-x-4 ml-auto">
          <div className="flex-1">
            <DurationPane name="Duration" duration={0} />
          </div>
          <div className="flex-1">
            <InputField
              type="text"
              title="Duration"
              placholder="3hrs"
              value={""}
              handleChange={() => {}}
            />
          </div>
          <div className="flex-1">
            <InputField
              type="text"
              title="Duration"
              placholder="3hrs"
              value={""}
              handleChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div>
        <InputField
          type="text"
          title=""
          placholder="No comment"
          multiline={true}
          rows={4}
          value={props.comment}
          handleChange={() => {}}
        />
      </div>
      <div className="ml-4 text-success">Submitted</div>
    </div>
  );
};

export default function TimesheetArea({
  name,
  daterange,
}: {
  name: string;
  daterange: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmitAllclicked = () => {
    setModalOpen(true);
  };

  return (
    <div className="bg-blurColor h-full flex flex-col">
      <div className="px-4 py-2 flex justify-between border border-solid border-[#C4C4C4]">
        <div className="flex items-center font-bold">
          <span>{daterange}</span>
        </div>
        <div className="ml-2 flex items-center">
          <Avatar
            alt="Remy Sharp"
            src="/public/avatars/sample.png"
            sx={{ width: 48, height: 48 }}
          />
          <div className="ml-2 font-bold">{name}</div>
        </div>
        <div className="ml-2 flex items-center font-bold text-primary">
          <span>{"Rate/hr: $10/hr"}</span>
        </div>
        <div className="m-4 flex">
          <button
            className="px-8 py-2 rounded-md bg-primary"
            style={{ color: "white" }}
            onClick={handleSubmitAllclicked}
          >
            Submit all
          </button>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <InfoComp
            description="Hours worked this week:"
            info="40 hours 32 minutes"
            icon={<TimeIcon className={`text-white text-3xl`} />}
            color="#C75167"
          />
          <InfoComp
            description="Payment this week:"
            info="$430.00"
            icon={<WalletIcon className={`text-white text-3xl`} />}
            color="#4285F4"
          />
          <InfoComp
            description="Total payment so far:"
            info="$4290.00"
            icon={<MoneysIcon className={`text-white text-3xl`} />}
            color="#30A64A"
          />
        </div>
      </div>
      <div className="flex flex-col flex-auto overflow-auto">
        {["", "", "", "", "", "", ""].map((item, idx) => (
          <TimeSheetReviewItem key={`timesheetreviewitem-${idx}`} />
        ))}
      </div>
    </div>
  );
}
