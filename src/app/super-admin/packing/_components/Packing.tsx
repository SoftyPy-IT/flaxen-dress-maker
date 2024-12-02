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

const Packing = () => {
  const rows = [
    {
      id: "1",
      styleNo: "123",
      orderNo: "123",
      description: "Description",
      qty: "Quantity",
      ctnQty: "Ctn Qty",
      netWeight: "Net Weight",
      grossWeight: "Gross Weight",
      cartonMeasurement: "Carton Measurement",
      cbm: "Cbm",
    },
    {
      id: "2",
      styleNo: "123",
      orderNo: "123",
      description: "Description",
      qty: "Quantity",
      ctnQty: "Ctn Qty",
      netWeight: "Net Weight",
      grossWeight: "Gross Weight",
      cartonMeasurement: "Carton Measurement",
      cbm: "Cbm",
    },
    {
      id: "3",
      styleNo: "123",
      orderNo: "123",
      description: "Description",
      qty: "Quantity",
      ctnQty: "Ctn Qty",
      netWeight: "Net Weight",
      grossWeight: "Gross Weight",
      cartonMeasurement: "Carton Measurement",
      cbm: "Cbm",
    },
    {
      id: "4",
      styleNo: "123",
      orderNo: "123",
      description: "Description",
      qty: "Quantity",
      ctnQty: "Ctn Qty",
      netWeight: "Net Weight",
      grossWeight: "Gross Weight",
      cartonMeasurement: "Carton Measurement",
      cbm: "Cbm",
    },
    {
      id: "5",
      styleNo: "123",
      orderNo: "123",
      description: "Description",
      qty: "Quantity",
      ctnQty: "Ctn Qty",
      netWeight: "Net Weight",
      grossWeight: "Gross Weight",
      cartonMeasurement: "Carton Measurement",
      cbm: "Cbm",
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
                  color:"white"
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  STYLE NO
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  ORDER NO
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  DESCRIPTION OF GOODS
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  QTY
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  CTN QTY
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  NET WEIGHT
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  GROSS WEIGHT
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  CARTON MEASUREMENT
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  CBM
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
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
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.styleNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.orderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.description}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.qty}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.ctnQty}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.netWeight}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.grossWeight}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.cartonMeasurement}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.cbm}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Link href="/super-admin/packing/packing-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/packing/id">
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

export default Packing;
