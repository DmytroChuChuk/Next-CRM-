import React, { FC } from "react";

type durationPaneProps = {
  name: string;
  duration: number;
};

const DurationPane: FC<durationPaneProps> = ({ name, duration }) => {
  return (
    <div className="flex flex-col min-w-[120px]">
      <div className="text-xs font-arial font-normal text-distlineColor">
        {name}
      </div>
      <div className="py-2 w-full">
        <div className="flex justify-center items-center rounded-md border border-gray-300 bg-gray-900 w-full h-14">
          <p
            className="border-gray-400 font-normal leading-relaxed text-[30px] text-gray-400 px-4"
            style={{
              fontFamily: "Digital Numbers",
            }}
          >
            00:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default DurationPane;
