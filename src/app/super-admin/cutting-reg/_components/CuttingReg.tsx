"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CuttingRegModal from "./CuttingRegModal";
import SendIcon from "@mui/icons-material/Send";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
    status: "not send yet",
  },
  {
    id: "2",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
    status: "Sent to Embroidery",
  },
  {
    id: "3",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
    status: "Decline From Embroidery",
  },
];

const CuttingReg = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <>
        <Paper sx={{ overflow: "hidden", padding: "0px" }}>
          <TableContainer>
            <Table sx={{ padding: "0px" }}>
              <TableHead>
                <TableRow className="bg-[#5D87FF]">
                  <TableCell align="center" className="text-white">
                    Date
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Buyer Name
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Order No
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Order Qty.
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Color
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Size
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Total
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Fabric Req.
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Fabric Rcv.
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Fabric/Item GSM
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Consumption
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Send
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.order}</TableCell>
                    <TableCell align="center">{row.orderqty}</TableCell>
                    <TableCell align="center">{row.color}</TableCell>
                    <TableCell align="center">{row.size}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                    <TableCell align="center">{row.fabreq}</TableCell>
                    <TableCell align="center">{row.fabrcv}</TableCell>
                    <TableCell align="center">{row.gsm}</TableCell>
                    <TableCell align="center">{row.consumption}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={handleOpen}>
                        <SendIcon fontSize="small" color="primary" />
                      </IconButton>
                      <IconButton
                        href={`/super-admin/cutting-reg/preview/${row.id}`}
                      >
                        <VisibilityIcon fontSize="small" color="primary" />
                      </IconButton>
                      <IconButton href={`/super-admin/cutting-reg/${row.id}`}>
                        <EditIcon fontSize="small" color="secondary" />
                      </IconButton>
                      <IconButton aria-label="delete" color="error">
                        <DeleteIcon fontSize="small" color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
      {open && <CuttingRegModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default CuttingReg;
