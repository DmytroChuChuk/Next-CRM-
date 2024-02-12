"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import CustomSelection from "@/components/ui/auth/client/CustomSelection";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import { InputLabel } from "@mui/material";

const Login = () => {
  const router = useRouter();
  const [role, setrole] = useState<string>("");

  const genderItems = ["Prefer not to say", "Male", "Female"];

  return (
    <>
      <WithRightBG imgpathname="/images/caregiver_registration4.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] fixed">
          <BackBtn onClicked={() => router.push("/auth/app/caregiver/3")} />
        </div>
        <ProgressStatusBar completeness={4} hasBack={true} />
        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Caregiver Qualification
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              Please provide detailed information about your qualifications,
              education, certifications, and specialized skills relevant to
              caregiving. you can also upload supporting documents, sucah as
              your resume and certificates, to showcase your expertise and
              experience
            </div>
          </div>
        </div>

        <div className="mt-5 ml-4 px-7 pb-7 ">
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            Caregiving Experience
          </div>
          <div className="grid grid-cols-3 mt-8 gap-7 items-center ">
            <div className="col start-1 col-span-1">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Years of Caregiving Experience
              </InputLabel>
              <CustomSelection name="" label="Select" items={genderItems} />
            </div>
            <div className="col start-2 col-span-2">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Description of Previous Caregiving Roles
              </InputLabel>
              <InputField
                type="text"
                title=" "
                placholder="Describe your last role"
                value={role}
                handleChange={setrole}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ml-4 px-7 pb-7 ">
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            Educational Qualifications*
          </div>
          <div className="grid grid-cols-3 mt-8 gap-7 items-center">
            <div className="col start-1 col-span-1">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Highest Level of Education Completed
              </InputLabel>
              <CustomSelection
                name=""
                label="Select Level"
                items={genderItems}
              />
            </div>
            <div className="col start-2 col-span-1">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Name of School/Institution
              </InputLabel>
              <InputField
                type="text"
                title=""
                placholder="Middlesex University"
                value={role}
                handleChange={setrole}
              />
            </div>
            <div className="col start-3 col-span-1">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Diploma, Degree & Certificate
              </InputLabel>
              <InputField
                type="text"
                title=""
                placholder="Bachelor's"
                value={role}
                handleChange={setrole}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ml-4 px-7 pb-7 ">
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            Professional Certifications*
          </div>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            List any relevant caregiving or healthcare certifications
          </InputLabel>
          <InputField
            type="text"
            title=""
            placholder="Senior care cert, CCLLC 012..."
            value={role}
            handleChange={setrole}
          />
        </div>
        <div className="mt-5 ml-4 px-7 pb-7 ">
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            Note
          </div>
          <InputField
            type="text"
            title=""
            placholder="Leave a note"
            value={role}
            handleChange={setrole}
          />
        </div>
        <div className="mt-5 ml-4 px-7 pb-7 ">
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            Upload Document*
          </div>
          <InputField
            type="text"
            title=""
            placholder="Leave a note"
            value={role}
            handleChange={setrole}
          />
        </div>

        <div className="flex justify-between mx-8 mt-2 ">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/auth/app/caregiver/5")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;
