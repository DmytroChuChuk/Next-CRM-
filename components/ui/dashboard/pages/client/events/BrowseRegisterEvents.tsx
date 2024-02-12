import React, { useState } from "react";

import SvgFilter from "@/public/icons/Filter";
import ConditionSelect from "@/components/ui/dashboard/ConditionSelect";
import RegisterEventCard from "../../RegisterEventCard";
import UpcomingEventModal from "./UpcomingEventModal";

const eventsData = [
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
];

const BrowseRegisterEvents = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const onRegisterClicked = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col px-20">
      <div className="flex justify-end">
        <ConditionSelect
          icon={<SvgFilter />}
          method="filter"
          by="All"
          choices={["All", "Free", "Paid", "Ongoing", "Past Events"]}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 content-center">
        {eventsData.map((item, index) => (
          <RegisterEventCard
            key={index}
            creator={item.creator}
            name={item.name}
            fee={item.fee}
            date={item.date}
            time={item.time}
            onRegisterClick={onRegisterClicked}
          />
        ))}
      </div>
      <UpcomingEventModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default BrowseRegisterEvents;
