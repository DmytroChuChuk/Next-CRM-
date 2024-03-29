import React, { useState } from "react";
import { Profile2UsersIcon } from "@/components/ui/common/Icons";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface contactItem {
  type: string;
  createdAt: string;
  name: string;
  status: string;
  setModalOpen: any;
}

export default function ContractListItem(props: contactItem) {
  const getStatusColor = () => {
    switch (props.status) {
      case "Active":
        return "#30A64A";
      case "Pending":
        return "#EDBB2A";
      case "Cancelled":
        return "#828282";
    }
  };

  const router = useRouter();

  return (
    <>
      <div className="p-4 my-4 w-full flex justify-between bg-white">
        <div className="flex items-center">
          <div className="flex justify-center items-center rounded-full bg-[#F6F6F6] w-[64px] h-[64px]">
            <Profile2UsersIcon className="text-[#CB5A6F]" />
          </div>
          <div className="ml-4 text-[22px] font-bold text-center">
            {props.type}
          </div>
        </div>
        <div className="flex gap-20 mx-4">
          <div className="flex flex-col">
            <div className="text-distlineColor text-center">Created at:</div>
            <div className="mt-2 font-bold text-center">{props.createdAt}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-distlineColor text-center">Name</div>
            <div className="mt-2 font-bold text-center">{props.name}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-distlineColor text-center">Status</div>
            <div className="mt-2 font-bold flex items-center">
              <span
                className={`p-1 rounded-full mr-2`}
                style={{
                  backgroundColor: getStatusColor(),
                }}
              ></span>
              <span
                style={{
                  color: getStatusColor(),
                }}
              >
                {props.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 py-2 w-[350px]">
          {props.status === "Active" && (
            <span
              className="bg-brightRedColor hover:bg-brightRedColor font-bold text-white flex items-center rounded-lg px-4 py-2 cursor-pointer"
              onClick={() => props.setModalOpen(true)}
            >
              Terminate Contract
            </span>
          )}

          <Button variant="outlined" sx={{ textTransform: "none" }}>
            <Link href="/dashboard/admin/caregiver_profile">View Contract</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
