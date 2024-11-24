"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TopSection from "@/components/shared/TopSection/TopSection";
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
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Accessories Requisition
        </h4>
      </div>

      <Paper sx={{ padding: 2, margin: "auto" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="S. No" name="no" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Order No"
                name="order"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Items" name="item" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Style No"
                name="style"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Line" name="line" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Floor" name="floor" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Time" name="time" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AddIcon />}
                  disableElevation
                >
                  Add Accessories Requisition
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
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
  );
};

export default Page;
