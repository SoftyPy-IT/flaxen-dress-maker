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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Page = () => {
  const rows = [
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
  ];
  return (
    <>
    <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Accessories Delivery</h3>
        <div className=" flex w-[500px] items-center gap-3">
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

          <Link href="/super-admin/accessories-delivery/add-accessories">
            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Link>
        </div>
      </div>
     
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color:"white"
                },
              }}>
              <TableRow className="bg-[#5D87FF]">
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Line
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Item
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Color
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Sign
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
                >
                  Remark
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  sx={{ color: "white" }}
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
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& td": {
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.line}</TableCell>
                  <TableCell align="center">{row.item}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.sign}</TableCell>
                  <TableCell align="center">{row.remark}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <button className="text-blue-600">
                      <VisibilityIcon fontSize="small" />
                    </button>
                    <Link href="/super-admin/accessories-delivery/id">
                      <button className="text-green-600">
                        <EditIcon fontSize="small" />
                      </button>
                    </Link>
                    <button className="text-red-600">
                      <DeleteIcon fontSize="small" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Page;
