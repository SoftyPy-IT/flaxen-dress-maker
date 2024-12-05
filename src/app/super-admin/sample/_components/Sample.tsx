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
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";
import SampleSendModal from "./SampleSendModal";

const Sample = () => {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows = [
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      buyerName: "John Doe",
      style: 234234,
      orderNo: "L.DRESS",
      sampleType: "Pick",
      sampleQuantity: 50,
      sewingStartTime: "08:00 AM",
      remark: "2134rf",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      buyerName: "John Doe",
      style: 234234,
      orderNo: "L.DRESS",
      sampleType: "Pick",
      sampleQuantity: 50,
      sewingStartTime: "08:00 AM",
      remark: "2134rf",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      buyerName: "John Doe",
      style: 234234,
      orderNo: "L.DRESS",
      sampleType: "Pick",
      sampleQuantity: 50,
      sewingStartTime: "08:00 AM",
      remark: "2134rf",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      buyerName: "John Doe",
      style: 234234,
      orderNo: "L.DRESS",
      sampleType: "Pick",
      sampleQuantity: 50,
      sewingStartTime: "08:00 AM",
      remark: "2134rf",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      buyerName: "John Doe",
      style: 234234,
      orderNo: "L.DRESS",
      sampleType: "Pick",
      sampleQuantity: 50,
      sewingStartTime: "08:00 AM",
      remark: "2134rf",
    },
  ];

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer Name
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  colSpan={2}
                >
                  Style & Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample Type
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample QTY
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sewing Start Time
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remarks
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
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.buyerName}</TableCell>
                  <TableCell align="center">{row.style}</TableCell>
                  <TableCell align="center">{row.orderNo}</TableCell>
                  <TableCell align="center">{row.sampleType}</TableCell>
                  <TableCell align="center">{row.sampleQuantity}</TableCell>
                  <TableCell align="center">{row.sewingStartTime}</TableCell>
                  <TableCell align="center">{row.remark}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <button className="text-blue-600">
                      <SendIcon fontSize="small" onClick={handleOpen} />
                    </button>
                    <Link href="/super-admin/sample/sample-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/sample/id">
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
      {Open && <SampleSendModal open={Open} setOpen={handleClose} />}
    </>
  );
};

export default Sample;
