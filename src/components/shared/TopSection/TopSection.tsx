import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import flaxen from "../../../assets/images/logo/flaxen.png";


const TopSection = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b pb-3 px-2">
        <div className="flex items-center gap-4">
          <Image src={flaxen} alt="Company Logo" width={60} height={60} />
          <div>
            <h1 className="">Flaxen Dress Maker Ltd</h1>
            <p className="text-sm">
             <span className="font-bold"> Factory:</span> Meghdubi, Gazipur-1700, Bangladesh
            </p>
            <p className="text-sm">
            <span className="font-bold">Corporate Office:</span> House# 35, Road# 9, Sector# 15, Uttara, Dhaka
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-left text-sm">
            <PhoneIcon fontSize="small" /> +880-2-8913263, 8916198
          </p>
          <p className="text-left text-sm">
            <FaxIcon fontSize="small" /> +88-02-8913263
          </p>
          <p className="text-left text-sm">
            <EmailIcon fontSize="small" /> flaxen@flaxengroup.com
          </p>
          <p className="text-left text-sm">
            <LanguageIcon fontSize="small" /> www.flaxengroup.com
          </p>
        </div>
      </div>
      
    </>
  );
};

export default TopSection;
