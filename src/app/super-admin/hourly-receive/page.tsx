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
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  const rows = [
    {
      id: "1",
      time: "10-11",
      sw_rec: "---",
      s_sing: "---",
      f_send: "150",
      f_sign: "sign",
    },
    {
      id: "1",
      time: "10-11",
      sw_rec: "---",
      s_sing: "---",
      f_send: "150",
      f_sign: "sign",
    },
    {
      id: "1",
      time: "10-11",
      sw_rec: "---",
      s_sing: "---",
      f_send: "150",
      f_sign: "sign",
    },
    {
      id: "1",
      time: "10-11",
      sw_rec: "---",
      s_sing: "---",
      f_send: "150",
      f_sign: "sign",
    },
    {
      id: "1",
      time: "10-11",
      sw_rec: "---",
      s_sing: "---",
      f_send: "150",
      f_sign: "sign",
    },
  ];
  return (
    <>
      <div className="flex justify-between bg-white shadow-md rounded p-5 mb-5">
        <h3 className="text-2xl font-bold">Hourly Receive from S/Others</h3>
        <Link href="/super-admin/hourly-receive/add-hourly-receive">
          <Button variant="contained" disableElevation>
            <AddIcon /> Add
          </Button>
        </Link>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  Time
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  SW/REC
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  S/Sign
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/Send
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/Sign
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
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
                  <TableCell align="center">{row.time}</TableCell>
                  <TableCell align="center">{row.sw_rec}</TableCell>
                  <TableCell align="center">{row.s_sing}</TableCell>
                  <TableCell align="center">{row.f_send}</TableCell>
                  <TableCell align="center">{row.f_sign}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <Link href="/super-admin/hourly-receive/hourly-receive-preview">
                    <button className="text-blue-600">
                      <VisibilityIcon fontSize="small" />
                    </button>
                    </Link>
                    <Link href="/super-admin/hourly-receive/id">
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
