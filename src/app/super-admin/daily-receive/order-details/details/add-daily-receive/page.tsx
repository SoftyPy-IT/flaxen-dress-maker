"use client";

import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Page = () => {
  // Initializing dailyReceive with objects that hold their own 'challanQTY' array.
  const [dailyReceive, setDailyReceive] = useState([{ challanQTY: [""] }]);

  const handleAddDailyReceive = () => {
    // Add a new mother component (with its own challanQTY).
    setDailyReceive([...dailyReceive, { challanQTY: [""] }]);
  };

  const handleDeleteDailyReceive = (index: number) => {
    if (dailyReceive.length > 1) {
      const updatedDailyReceive = dailyReceive.filter((_, i) => i !== index);
      setDailyReceive(updatedDailyReceive);
    }
  };

  const handleAddChallanQTY = (index: number) => {
    // Add a new child (challanQTY) to the specific mother component.
    const updatedDailyReceive = [...dailyReceive];
    updatedDailyReceive[index].challanQTY.push(""); // Add a new empty string (representing a new challan)
    setDailyReceive(updatedDailyReceive);
  };

  const handleDeleteChallanQTY = (motherIndex: number, childIndex: number) => {
    if (dailyReceive[motherIndex].challanQTY.length > 1) {
      const updatedDailyReceive = [...dailyReceive];
      const updatedChallanQTY = updatedDailyReceive[motherIndex].challanQTY.filter((_, i) => i !== childIndex);
      updatedDailyReceive[motherIndex].challanQTY = updatedChallanQTY;
      setDailyReceive(updatedDailyReceive);
    }
  };

  return (
    <DefaultLayout>
      <Paper sx={{ padding: 3 }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Add Daily Receive</h3>

        {dailyReceive.map((mother, motherIndex) => (
          <div key={motherIndex} className="mb-4">
            <div className="mb-4 flex gap-4">
              {/* 1st part: Mother component */}
              <div className="flex flex-1 gap-2 rounded border p-2">
                <div className="flex w-full gap-2">
                  <TextField label="Line No" name="styleNo" fullWidth size="medium" />
                  <TextField label="Total Product" name="orderNo" size="medium" fullWidth />
                </div>

                <div className="w-full gap-4">
                  {mother.challanQTY.map((_, qtyIndex) => (
                    <div key={qtyIndex} className="flex mb-2 w-[650px] space-x-2 border p-2">
                      <div className="mb-2 flex w-[550px] space-x-2">
                        <TextField label="Challan No" name="description" size="medium" fullWidth sx={{ width: "250px" }} />
                        <TextField label="QTY" name="description" size="medium" fullWidth sx={{ width: "250px" }} />
                      </div>
                      <div className="flex w-[100px] items-center space-x-2">
                        {/* Add/Remove buttons for Challan */}
                        <IconButton
                          onClick={() => handleAddChallanQTY(motherIndex)}
                          sx={{
                            backgroundColor: "#e1e4f9",
                            "&:hover": { backgroundColor: "#d0d3f0" },
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDeleteChallanQTY(motherIndex, qtyIndex)}
                          sx={{
                            backgroundColor: "#e1e4f9",
                            "&:hover": { backgroundColor: "#d0d3f0" },
                          }}
                        >
                          <RemoveCircleOutlineIcon className="text-red-600" />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2nd part: Add/Remove Mother Component */}
              <div className="mt-2 flex items-center justify-start gap-2">
                <IconButton
                  onClick={handleAddDailyReceive}
                  sx={{
                    backgroundColor: "#e1e4f9",
                    "&:hover": { backgroundColor: "#d0d3f0" },
                  }}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDeleteDailyReceive(motherIndex)}
                  sx={{
                    backgroundColor: "#e1e4f9",
                    "&:hover": { backgroundColor: "#d0d3f0" },
                  }}
                >
                  <RemoveCircleOutlineIcon className="text-red-600" />
                </IconButton>
              </div>
            </div>
          </div>
        ))}

        <Grid item xs={12}>
          <div className="mt-4 flex justify-end">
            <Button type="submit" variant="contained" size="medium" disableElevation>
              Add Daily Receive
            </Button>
          </div>
        </Grid>
      </Paper>
    </DefaultLayout>
  );
};

export default Page;
