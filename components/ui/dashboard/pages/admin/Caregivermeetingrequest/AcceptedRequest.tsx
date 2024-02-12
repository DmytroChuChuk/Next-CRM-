import React from "react";
import Image from "next/image";
export default function AcceptedRequest({
  open,
  setgotodashboard,
  setaddtocalendar,
}: {
  open: boolean;
  setgotodashboard: Function;
  setaddtocalendar: Function;
}) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div className="px-10 py-6 bg-[white]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              alt="logo"
              src="/images/logo.png"
              width={107}
              height={42}
              priority={true}
            />
          </div>
          <div className="mt-10 text-[20px] text-[#333]">
            Meeting Request Accepted
          </div>
          <div
            className="mt-10 text-center py-2 px-10 border-solid border-2 border-[#CB5A6F] text-[#C75167] rounded-xl"
            onClick={() => setgotodashboard}
          >
            Go to dashboard
          </div>
          <div
            className="mt-4 text-center py-2 px-10 border-2 bg-[#CB5A6F] text-[white] rounded-xl"
            onClick={() => setaddtocalendar(false)}
          >
            Add to calendar
          </div>
        </div>
      </div>
    </div>
  );
}
