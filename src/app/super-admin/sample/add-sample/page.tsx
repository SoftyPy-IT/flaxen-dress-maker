"use client";
import Link from "next/link";
import * as React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TopSection from "@/components/shared/TopSection/TopSection";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remark: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remark: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remark: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remark: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remark: "2134rf",
  },
];
const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Sample
        </h4>
      </div>
      <Paper sx={{ padding: 3 }}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Style" name="style" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Order No" name="orderNo" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Sample Type" name="sampleType" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Sample QTY"
                name="sampleQty"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Sewing Start Time"
                name="sewingStart"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Remarks" name="remarks" />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <div className="flex justify-end">
                <Button variant="contained" color="primary" disableElevation>
                  Add Sample
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Paper sx={{ width: "100%", overflow: "hidden", marginTop:"20px" }}>
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
                  Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap" colSpan={2}>
                  Style & Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample Type
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample QTY
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sewing Start Time
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
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.buyerName}</TableCell>
                  <TableCell align="center">{row.style}</TableCell>
                  <TableCell align="center">{row.orderNo}</TableCell>
                  <TableCell align="center">{row.sampleType}</TableCell>
                  <TableCell align="center">{row.sampleQuantity}</TableCell>
                  <TableCell align="center">{row.sewingStartTime}</TableCell>
                  <TableCell align="center">{row.remark}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <Link href="/super-admin/sample/sample-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/sample/id">
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

export default page;
