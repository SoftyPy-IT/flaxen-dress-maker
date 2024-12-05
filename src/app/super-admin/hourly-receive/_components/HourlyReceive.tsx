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
import HourlySendModal from "./HourlySendModal";
import SendIcon from "@mui/icons-material/Send";

const HourlyReceive = () => {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  <button className="text-blue-600">
                      <SendIcon fontSize="small" onClick={handleOpen}/>
                    </button>
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

{Open && <HourlySendModal open={Open} setOpen={handleClose} />}
    </>
  );
};

export default HourlyReceive;
