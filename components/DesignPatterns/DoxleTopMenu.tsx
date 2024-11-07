"use client";
import DoxleIconPlain from "@/components/DoxleIcons";
import { DoxleRoutes } from "@/DoxleRoutes";
import { openDoxleHelpEmail } from "@/Utilities/FunctionUtility";
import { useRouter } from "next/navigation";
import React from "react";

const DoxleTopMenu = () => {
  const router = useRouter();
  return (
    <div className="max-w-[1280px] w-[calc(100%-40px)] flex fixed top-[20px] justify-between mx-[20px]">
      <DoxleIconPlain
        overwrittenColor="black"
        containerStyle={{ width: 33 }}
        onClick={() => router.replace(DoxleRoutes.UploadBanner)}
        className="cursor-pointer"
      />

      <span
        onClick={openDoxleHelpEmail}
        className="text-black text-[14px] font-lexend font-semibold cursor-pointer hover:text-doxleColor transition-all duration-200 ease-linear"
      >
        help@doxle.com
      </span>
    </div>
  );
};

export default DoxleTopMenu;