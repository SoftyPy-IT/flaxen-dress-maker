"use client";
import Link from "next/link";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import AddIcon from "@mui/icons-material/Add";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton, Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddUnitModal from "./_components/AddUnitModal";

const rows = [
  {
    id: "1",
    sl: "1",
    name: "pcs",
    
  },
  {
    id: "2",
    sl: "2",
    
    name: "KG",
   
  },
  {
    id: "3",
    sl: "3",
    name: "Ton",

  },
];

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
          <h3 className="text-2xl font-bold">Unit</h3>
          <div className=" flex w-[270px] items-center gap-3">
            {/* <TextField
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              size="small"
            /> */}

            <TextField
              size="small"
              variant="outlined"
              placeholder="Search by Name"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
              fullWidth
            />

            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add
            </Button>
          </div>
        </div>

        <Paper sx={{ overflow: "hidden", padding: "0px" }}>
          <TableContainer>
            <Table sx={{ padding: "0px" }}>
              <TableHead>
                <TableRow className="bg-[#5D87FF]">
                  <TableCell align="center" className="text-white">
                    Sl. No.
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Unit Name
                  </TableCell>                 

                  <TableCell align="center" className="text-white">
                   Status
                  </TableCell>
                  <TableCell align="center" className="text-white">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.sl}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>

                    <TableCell align="center">
                      <Switch {...label} defaultChecked />
                    </TableCell>
                    <TableCell align="center">
                      {/* <IconButton
                        href={`/super-admin/cutting-reg/preview/${row.id}`}
                      >
                        <VisibilityIcon fontSize="small" color="primary" />
                      </IconButton> */}
                      <IconButton href={`/super-admin/cutting-reg/${row.id}`}>
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
      {open && <AddUnitModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default Page;
