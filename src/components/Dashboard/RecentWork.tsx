"use client"

import React from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material";
import FlaxenForm from "../Forms/Form";

import SearchIcon from "@mui/icons-material/Search";

const RecentWork = () => {
  const handleSubmit = () => {
    console.log();
  };
  const tables = [
    "Cutting",
    "Swing",
    "Print",
    "Embroidery",
    "Production",
    "Packing",
  ];

  const renderTable = (title: any) => (
    <Grid item xs={12} md={4}>
      <Paper elevation={3}>
        <FlaxenForm onSubmit={handleSubmit}>
          <Box p={2}>
            <div className="flex justify-between ">
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                

                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Search by Order"
                  InputProps={{
                    endAdornment: <SearchIcon />,
                  }}
                  fullWidth
                />
              </Box>
            </div>
            <TableContainer>
              <Table size="small">
                <TableHead
                  sx={{
                    "& th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                      color: "white",
                    },
                  }}
                >
                  <TableRow
                    className="bg-[#5D87FF]"
                    sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                        padding: "5px",
                      },
                    }}
                  >
                    <TableCell>
                      <strong>Order ID</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Progress</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3].map((order) => (
                    <TableRow key={order}>
                      <TableCell>Order-{order}</TableCell>
                      <TableCell>90%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </FlaxenForm>
      </Paper>
    </Grid>
  );

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {tables.map((table) => renderTable(table))}
      </Grid>
    </Box>
  );
};

export default RecentWork;
