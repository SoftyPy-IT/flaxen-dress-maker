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

const WorkChallan = () => {
  const rows = [
    {
      id: "1",      
      color:"white",
      line:"5",
      style:"S",
      quantity: "100",
      noOfPack: "123",
      description: "Description of goods",
      remarks: "Remarks",
    },
    {
      id: "2",
      color:"white",
      line:"5",
      style:"S",
      quantity: "100",
      noOfPack: "123",
      description: "Description of goods",
      remarks: "Remarks",
    },
    {
      id: "3",
      color:"white",
      line:"5",
      style:"S",
      quantity: "100",
      noOfPack: "123",
      description: "Description of goods",
      remarks: "Remarks",
    },
    {
      id: "4",
      color:"white",
      line:"5",
      style:"S",
      quantity: "100",
      noOfPack: "123",
      description: "Description of goods",
      remarks: "Remarks",
    },
    {
      id: "5",
      color:"white",
      line:"5",
      style:"S",
      quantity: "100",
      noOfPack: "123",
      description: "Description of goods",
      remarks: "Remarks",
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
                  SL NO
                </TableCell>

               
                <TableCell align="center" className="whitespace-nowrap">
                  Color
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Line
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Style
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Description
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
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                 
                      
                    },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.line}</TableCell>
                  <TableCell align="center">{row.style}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>                  
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.remarks}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <Link href="/super-admin/work-challan/challan-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/work-challan/id">
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

export default WorkChallan;
