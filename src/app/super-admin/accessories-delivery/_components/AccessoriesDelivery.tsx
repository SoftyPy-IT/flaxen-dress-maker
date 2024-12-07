"use client";
import Link from "next/link";
import * as React from "react";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import AccessoriesSendModal from "./AccessoriesSendModal";

const AccessoriesDelivery = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      status: "Decline From Cutting",
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
      status: "Not Send Yet",
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
      status: "Sending Processing",
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
      status: "Send to Cutting",
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
      status: "Send to Cutting",
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
                Status
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
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <button className="text-blue-600" onClick={handleOpen}>
                      <SendIcon fontSize="small" />
                    </button>
                    <Link
                      href={`/super-admin/accessories-delivery/preview/${row.id}`}
                    >
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
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
      {open && <AccessoriesSendModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default AccessoriesDelivery;
