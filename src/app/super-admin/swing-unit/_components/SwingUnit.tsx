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
import SwingUnitSendModal from "./SwingUnitSendModal";
import SendIcon from "@mui/icons-material/Send";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "Fahim",
    order: "39695",
    color: "White",
    orderqty: "100",
    size: "L",
    qty: "5",
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
    name: "Fahim",
    order: "39695",
    orderqty: "100",
    color: "White",
    size: "M",
    qty: "5",
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
    name: "Fahim",
    order: "39695",
    orderqty: "100",
    color: "White",
    size: "S",
    qty: "5",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
    status: "Sent to Embroidery",
  },
];

const SwingUnit = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <>
        <Paper sx={{ overflow: "hidden", padding: "0px" }}>
          <TableContainer>
            <Table >
              <TableHead sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold", 
                },
              }}>
                <TableRow className="bg-[#5D87FF]">
                  <TableCell align="center" className="whitespace-nowrap">
                    Date
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Buyer Name
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Order No
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Order Qty.
                  </TableCell>
                  {/* <TableCell align="center" className="whitespace-nowrap">
                    Color
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Size
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Quantity
                  </TableCell> */}
                  <TableCell align="center" className="whitespace-nowrap">
                    Total
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Fabric Req.
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Fabric Rcv.
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Fabric/Item GSM
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Consumption
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    Send
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
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
                    {/* <TableCell align="center">{row.color}</TableCell>
                    <TableCell align="center">
                    <TableCell align="center">{row.size}</TableCell>
                    <TableCell align="center">{row.size}</TableCell>
                    <TableCell align="center">{row.size}</TableCell>
                    </TableCell>
                    <TableCell align="center">
                    <TableCell align="center">{row.qty}</TableCell>
                    <TableCell align="center">{row.qty}</TableCell>
                    <TableCell align="center">{row.qty}</TableCell>
                    </TableCell> */}
                    <TableCell align="center">{row.total}</TableCell>
                    <TableCell align="center">{row.fabreq}</TableCell>
                    <TableCell align="center">{row.fabrcv}</TableCell>
                    <TableCell align="center">{row.gsm}</TableCell>
                    <TableCell align="center">{row.consumption}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    {/* Order Qty.	Color	Size	Quantity	Total	Fabric Req.	Fabric Rcv.	Fabric/Item GSM	Consumption */}
                    <TableCell align="center">
                      <IconButton onClick={handleOpen}>
                        <SendIcon fontSize="small" color="primary" />
                      </IconButton>
                      <IconButton
                        href={`/super-admin/swing-unit/preview/${row.id}`}
                      >
                        <VisibilityIcon fontSize="small" color="primary" />
                      </IconButton>
                      <IconButton href={`/super-admin/swing-unit/${row.id}`}>
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
      {open && <SwingUnitSendModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default SwingUnit;


