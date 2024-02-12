import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import { CalendarIcon } from "@/components/ui/common/Icons";
import { TimeIcon } from "@mui/x-date-pickers";
import DatePicker from "../../../DatePicker";
import DatePickerModal from "../../../Modals/DatePickerModal";
import TimePickerModal from "../../../TimePickerModal";
import AcceptedRequest from "../Caregivermeetingrequest/AcceptedRequest";
import { useRouter } from "next/navigation";
export default function Caregiverjobmeetingrequest() {
  const router = useRouter();
  const [showday, setshowday] = useState(false);
  const [showtime, setshowtime] = useState(false);
  const [showacceptedmodal, setshowacceptedmodal] = useState(false);
  const setgotohome = () => {
    router.push("/dashboard/admin/");
  };
  return (
    <div className="mx-10 mt-4">
      <div className="text-[#000] text-[24px] font-bold text-center">
        CaregiverJob Meeting Request
      </div>
      <div className="text-[#282828] text-center text-[14px]">
        Showing all 3 requests
      </div>
      <div className="mt-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: "#B271C2" }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowday(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowtime(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  className="px-4 py-3"
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                  }}
                  onClick={() => setshowacceptedmodal(true)}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: "#95C271" }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowday(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowtime(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  className="px-4 py-3"
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                    paddingInline: "16px",
                  }}
                  onClick={() => setshowacceptedmodal(true)}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: "#C27171" }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowday(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                    onClick={() => setshowtime(true)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  className="cursor-pointer px-4 py-3 "
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                    paddingInline: "16px",
                  }}
                  onClick={() => setshowacceptedmodal(true)}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <DatePickerModal
        title={"Select Date"}
        open={showday}
        setOpen={setshowday}
        setValue="Select Day"
      />
      <TimePickerModal
        title={"Select Time"}
        open={showtime}
        setOpen={setshowtime}
        setValue={"____ ____"}
      />
      <AcceptedRequest
        open={showacceptedmodal}
        setgotodashboard={setgotohome}
        setaddtocalendar={setshowacceptedmodal}
      />
    </div>
  );
}
