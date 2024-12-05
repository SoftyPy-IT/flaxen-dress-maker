"use client";

import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField, Paper, Grid } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import FlaxenSelect from "@/components/Forms/Select";
import FlaxenForm from "@/components/Forms/Form";
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

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };

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
      name: "abed",
      // delivery: "",
      send: "Accept",
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
      name: "abed",
      // delivery: "626",
      send: "Not Accept Yet",
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
      name: "abed",
      // delivery: "626",
      send: "Decline From Cutting",
    },
  ];
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Fabric Request</h3>
        <div className=" flex w-[800px] items-center gap-3">
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />
          <h5>to</h5>
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />

          <TextField
            size="small"
            variant="outlined"
            placeholder="Search by Order"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            fullWidth
          />

          {/* <Link href="/super-admin/fabric-reg/add-fabric-reg">
            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Link> */}
        </div>
      </div>
      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <FlaxenForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <FlaxenSelect
                items={["Cutting", "Embroidery", "Stock"]}
                fullWidth
                name="dept"
                label="Select Department"
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Poduct Name"
                name="name"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="GSM" name="gsm" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Quantity"
                name="quantity"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenSelect
                items={["PCS", "KG", "Litre"]}
                fullWidth
                name="unit"
                label="Unit"
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Size" name="size" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Factory"
                name="factory"
                // type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField label="Details" name="details" fullWidth size="medium" multiline
          maxRows={4}/> */}
              <TextField
                //   id="outlined-multiline-static"
                label="Details"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  disableElevation
                >
                  Send Request
                </Button>
              </div>
            </Grid>
          </Grid>
        </FlaxenForm>
      </Paper>

      <Paper sx={{ overflow: "hidden", padding: "0px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="text-white">
                  Date
                </TableCell>
                <TableCell align="center" className="text-white">
                  To
                </TableCell>
                <TableCell align="center" className="text-white">
                  Pro. Name
                </TableCell>

                <TableCell align="center" className="text-white">
                  Color
                </TableCell>
                <TableCell align="center" className="text-white">
                  GSM
                </TableCell>
                <TableCell align="center" className="text-white">
                  Quantity
                </TableCell>
                <TableCell align="center" className="text-white">
                  Unit
                </TableCell>
                <TableCell align="center" className="text-white">
                  Size
                </TableCell>
                <TableCell align="center" className="text-white">
                  Factory
                </TableCell>
                <TableCell align="center" className="text-white">
                  Details
                </TableCell>
                <TableCell align="center" className="text-white">
                  Sent Status
                </TableCell>
                <TableCell align="center" className="text-white">
                  Accept Status
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
                  {/* <TableCell align="center">{row.name}</TableCell> */}
                  <TableCell align="center">
                    <FlaxenForm onSubmit={handleSubmit}>
                      <FlaxenSelect
                        items={["Send", "Not Send"]}
                        fullWidth
                        name="send"                        
                        size="small"
                      />
                    </FlaxenForm>
                  </TableCell>
                  <TableCell align="center">{row.send}</TableCell>
                  <TableCell align="center" className="">
                    {/* <Tooltip title="Send">
                      <button className="text-blue-600">
                        <SendIcon fontSize="small" />
                      </button>
                    </Tooltip> */}

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

export default Page;
