"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddBuyerModal from "./_components/AddBuyerModal";

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows = [
    {
      id: "1",
      date: "05-05-2024",
      buyer: "ALDI France",
      country: "France",
      totalorder: "30",
      color: "Almond",
      style: "Style-1",
    },
    {
      id: "2",
      date: "05-05-2024",
      buyer: "PrenaTal",
      country: "France",
      totalorder: "30",
      color: "Pink",
      style: "Style-2",
    },
    {
      id: "3",
      date: "05-05-2024",
      buyer: "PRANATAL",
      country: "France",
      totalorder: "30",
      color: "White",
      style: "Style-1",
    },
    {
      id: "4",
      date: "05-05-2024",
      buyer: "ALDI France",
      country: "France",
      totalorder: "30",
      color: "Black",
      style: "Style-2",
    },
    {
      id: "5",
      date: "05-05-2024",
      buyer: "ALDI France",
      country: "France",
      totalorder: "30",
      color: "Pink",
      style: "Style-1",
    },
  ];
  return (
    <>
      <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
          <h3 className="text-2xl font-bold">Daily Receive from S/Others</h3>
          <div className=" flex w-[800px] items-center gap-3">
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />
          <h5>to</h5>
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />

            <TextField
              size="small"
              variant="outlined"
              placeholder="Search by Order"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
              fullWidth
            />

            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add
            </Button>
          </div>
        </div>
        <div className="mb-5 gap-5 rounded bg-white p-2 shadow-md">
          <h3 className="text-2xl font-bold text-center">Buyer Information</h3>
          
        </div>
       
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  "& th": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                    color:"white"
                  },
                }}
              >
                <TableRow className="bg-[#5D87FF]">
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
    
                  >
                    Buyer Name
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
             
                  >
                    Country
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                 
                  >
                    Colour
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                
                  >
                    Style No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                
                  >
                    Total Order
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
        
                  >
                    Last Order Date
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
          
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.buyer}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.country}
                    </TableCell>

                    <TableCell align="center" className="whitespace-nowrap">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.style}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.totalorder}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.date}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="space-x-2 whitespace-nowrap"
                    >
                      <Link
                        href={`/super-admin/daily-receive/order-details/${row.id}`}
                      >
                        <button className="text-blue-600">
                          <VisibilityIcon fontSize="small" />
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>

      {open && <AddBuyerModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default Page;
