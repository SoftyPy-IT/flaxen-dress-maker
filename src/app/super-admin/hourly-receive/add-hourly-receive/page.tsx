"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
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

const page = () => {

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
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Hourly Receive
        </h4>
      </div>
      <Paper sx={{ padding: 2 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Time"
                name="time"
                type="time"
                fullWidth
                size="medium"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="SWE/REC"
                name="sweRec"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="S/Sign"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="F/Send"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="F/Sign"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  disableElevation
                >
                  Add Hour
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
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
    </>
  );
};

export default page;
