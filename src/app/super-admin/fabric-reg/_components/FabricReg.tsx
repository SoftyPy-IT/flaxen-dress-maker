"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Tooltip } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FabricSendModal from "./FabricSendModal";
import SendIcon from "@mui/icons-material/Send";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    buyer: "Fahim",
    order: "12345",
    qty: "1000",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    name: "Abed",
    delivery: "626",
    send: "Send to Cutting",
  },
  {
    id: "2",
    date: "27-10-2024",
    buyer: "Fahim",
    order: "12345",
    qty: "1000",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    name: "Abed",
    delivery: "626",
    send: "Not Send Yet",
  },
  {
    id: "3",
    date: "27-10-2024",
    buyer: "Fahim",
    order: "12345",
    qty: "1000",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    name: "Abed",
    delivery: "626",
    send: "Decline From Cutting",
  },
];

const FabricReg = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper sx={{ overflow: "hidden", padding: "0px" }}>
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
                  Buyer Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order QTY.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Color
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Lot/B No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Factory
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  CH/No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  DIA
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Delivery (PCS)
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Status
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
                    "& th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                      color: "white",
                     
                    },
                  }}
                >
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.buyer}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.lot}</TableCell>
                  <TableCell align="center">{row.factory}</TableCell>
                  <TableCell align="center">{row.cn}</TableCell>
                  <TableCell align="center">{row.dia}</TableCell>

                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.delivery}</TableCell>
                  <TableCell align="center">{row.send}</TableCell>
                  <TableCell align="center" className="">
                    <Tooltip title="Send">
                      <button className="text-blue-600" onClick={handleOpen}>
                        <SendIcon fontSize="small" />
                      </button>
                    </Tooltip>

                    <IconButton
                      href={`/super-admin/fabric-reg/preview/${row.id}`}
                    >
                      <VisibilityIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton href={`/super-admin/fabric-reg/${row.id}`}>
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

      {open && <FabricSendModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default FabricReg;
