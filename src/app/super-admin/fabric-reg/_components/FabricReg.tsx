"use client";
import Link from "next/link";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { TextField } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    roll: "58",
    fabreq: "4797",
    gross: "1242",
    finish: "1162",
    delivery: "626",
    name: "abed",
  },
  {
    id: "2",
    date: "27-10-2024",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    roll: "58",
    fabreq: "4797",
    gross: "1242",
    finish: "1162",
    delivery: "626",
    name: "abed",
  },
  {
    id: "3",
    date: "27-10-2024",
    color: "White",
    lot: "39695",
    factory: "Fahim",
    cn: "11253",
    dia: "74",
    roll: "58",
    fabreq: "4797",
    gross: "1242",
    finish: "1162",
    delivery: "626",
    name: "abed",
  },
];

const FabricReg = () => {
  return (
    <>
     
      <Paper sx={{ overflow: "hidden", padding: "0px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="text-white">
                  Date
                </TableCell>
                <TableCell align="center" className="text-white">
                  Color
                </TableCell>
                <TableCell align="center" className="text-white">
                  Lot/B No
                </TableCell>
                <TableCell align="center" className="text-white">
                  Factory
                </TableCell>
                <TableCell align="center" className="text-white">
                  CH/No
                </TableCell>
                <TableCell align="center" className="text-white">
                  DIA
                </TableCell>
                <TableCell align="center" className="text-white">
                  Roll
                </TableCell>
                <TableCell align="center" className="text-white">
                  FAB REQ
                </TableCell>
                <TableCell align="center" className="text-white">
                  Fabric Gross Weight
                </TableCell>
                <TableCell align="center" className="text-white">
                  Fabric Finish Weight
                </TableCell>
                <TableCell align="center" className="text-white">
                  Delivery
                </TableCell>
                <TableCell align="center" className="text-white">
                  Name
                </TableCell>
                <TableCell align="center" className="text-white">
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
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.lot}</TableCell>
                  <TableCell align="center">{row.factory}</TableCell>
                  <TableCell align="center">{row.cn}</TableCell>
                  <TableCell align="center">{row.dia}</TableCell>
                  <TableCell align="center">{row.roll}</TableCell>
                  <TableCell align="center">{row.fabreq}</TableCell>
                  <TableCell align="center">{row.gross}</TableCell>
                  <TableCell align="center">{row.finish}</TableCell>
                  <TableCell align="center">{row.delivery}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center" className="">
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

    </>
  );
};

export default FabricReg;
