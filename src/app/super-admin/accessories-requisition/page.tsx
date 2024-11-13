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
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
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
    },
  ];
  return (
    <>
      <DefaultLayout>
        <div className="mb-5 flex justify-between rounded bg-white p-5 shadow-md">
          <h3 className="text-2xl font-bold">Accessories Requisition</h3>
          <Link href="/super-admin/accessories-requisition/add-accessories-requisition">
            <Button variant="contained" disableElevation>
              <AddIcon /> Add
            </Button>
          </Link>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead>
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


                    <TableCell
                      align="center"
                      className="space-x-2 whitespace-nowrap"
                    >
                      <Link href={`/super-admin/accessories-requisition/preview/${row.id}`}>
                        <button className="text-blue-600">
                          <VisibilityIcon fontSize="small" />
                        </button>
                      </Link>
                      <Link  href={`/super-admin/accessories-requisition/${row.id}`}>
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
      </DefaultLayout>
    </>
  );
};

export default Page;
