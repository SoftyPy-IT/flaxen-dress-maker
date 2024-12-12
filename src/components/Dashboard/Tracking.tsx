"use client";

import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LuggageIcon from "@mui/icons-material/Luggage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PaletteIcon from "@mui/icons-material/Palette";

const colors = [
  "#FF5722",
  "#4CAF50",
  "#2196F3",
  "#FFC107",
  "#9C27B0",
  "#00BCD4",
  "#E91E63",
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
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
  zIndex: 1,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: colors[ownerState.step % colors.length],
  ...(ownerState.completed && {
    opacity: 0.7,
  }),
  ...(ownerState.active && {
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <ContentCutIcon />,
    2: <ShoppingBagIcon />,
    3: <PrecisionManufacturingIcon />,
    4: <PaletteIcon />,
    5: <LocalPrintshopIcon />,
    6: <LocalMallIcon />,
    7: <LuggageIcon />,
    8: <RocketLaunchIcon />,
    9: <DoneAllIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active, step: Number(icon) }}
      className={className}
    >
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

const Tracking = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const steps = [
    "Total Cutting: 100\nReject: 10",
    "Total Production: 130\nReject: 30",
    "Total Swing: 100\nReject: 10",
    "Total Embroidery: 100\nReject: 10",
    "Total Print: 100\nReject: 10",
    "Production: 100",
    "Packaging: 100",
    "Shipment: 100",
    "Done: All",
  ];

  return (
    <div className="mt-10 w-full rounded-md border bg-white p-4 ">
      <div className="mb-4 flex content-center items-center justify-center bg-blue-300">
        <div className="flex w-[800px] content-center items-center justify-center  p-5">
          <input
            type="text"
            placeholder="Track Order by Enter order ID......"
            className="w-full border border-gray-300 p-4 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="w-[150px] bg-yellow-300 p-4 font-bold">
            Track Order
          </button>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={1}
            connector={<ColorlibConnector />}
          >
            {steps.map((label, index) => (
              <Step key={index}>
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
    </div>
  );
};

export default Tracking;
