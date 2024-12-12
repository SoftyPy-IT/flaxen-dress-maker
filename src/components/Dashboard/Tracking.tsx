"use client";

import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <Check />,
    2: <PrecisionManufacturingIcon />,
    3: <LocalPrintshopIcon />,
    4: <ShoppingBagIcon />,
    5: <DoneAllIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const Tracking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  const steps = [
    "Total Cutting: 100\nReject: 10",
    "Total Swing: 100\nReject: 10",
    "Total Print: 100\nReject: 10",
    "Total Production: 130\nReject: 30",
    "Production: 100",
  ];

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setShowProgress(true);
    }
  };

  return (
    <div className="mt-10 w-full rounded-md border bg-white p-4 ">
      <div className="flex content-center items-center justify-center bg-blue-300 mb-4">
        <div className="flex w-[800px] content-center items-center justify-center  p-5">
          <input
            type="text"
            placeholder="Track Order by Enter order ID......"
            className="w-full  border border-gray-300 p-4 focus:outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-yellow-300 w-[150px] p-4 font-bold" >
            Track Order
          </button>
        </div>
      </div>

      {/* {showProgress && ( */}
        <Box sx={{ width: "100%" }}>
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={1}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label.split("\n").map((line, index) => (
                      <span key={index}>
                        {line.includes(":") ? (
                          <>
                            <strong>{line.split(":")[0]}:</strong>{" "}
                            {line.split(":")[1]}
                            <br />
                          </>
                        ) : (
                          <>
                            {line}
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Box>
      {/* )} */}
    </div>
  );
};

export default Tracking;
