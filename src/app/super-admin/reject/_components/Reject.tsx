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

const Reject = () => {
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
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
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
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
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
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
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
                  className="whitespace-nowrap text-white"
                >
                  S. No
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
                  Lot No
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
                  Line NO
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
                  Who Reject
                </TableCell>

                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Total Reject
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
                  Details
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
                  {/* <TableCell align="center" className="whitespace-nowrap">
                      {row.name}
                    </TableCell> */}
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
                    {row.reject}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remark}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.details}
                  </TableCell>

                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Link href={`/super-admin/reject/preview/${row.id}`}>
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href={`/super-admin/reject/${row.id}`}>
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

export default Reject;
