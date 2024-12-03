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
import AcceReqSendModal from "./AcceReqSendModal";
import { Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AccessoriesRequisition = () => {
  const rows = [
    {
      id: "1",
      no: "1",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      date: "27-10-2024",
      time: "05.50",
      remark: "25",
      send: "Not Send Yet",
    },
    {
      id: "2",
      no: "2",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      date: "27-10-2024",
      time: "05.50",
      remark: "25",
      send: "Send to Cutting",
    },
    {
      id: "3",
      no: "3",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      date: "27-10-2024",
      time: "05.50",
      remark: "25",
      send: "Decline From Fabric",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  "& th": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                    color: "white",
                  },
                }}
              >
                <TableRow className="bg-[#5D87FF]">
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    S. No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Buyer
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Order No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Item
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Color
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Style No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Line
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Floor
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Time
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Remark
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Send
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
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
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.no}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.name}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.order}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.item}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.style}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.line}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.floor}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.date}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.time}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.remark}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.send}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="space-x-2 whitespace-nowrap"
                    >
                      <Tooltip title="Send">
                      <button className="text-blue-600" onClick={handleOpen}>
                        <SendIcon fontSize="small" />
                      </button>
                    </Tooltip>
                      <Link
                        href={`/super-admin/accessories-requisition/preview/${row.id}`}
                      >
                        <button className="text-blue-600">
                          <VisibilityIcon fontSize="small" />
                        </button>
                      </Link>
                      <Link
                        href={`/super-admin/accessories-requisition/${row.id}`}
                      >
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
      {open && <AcceReqSendModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default AccessoriesRequisition;
