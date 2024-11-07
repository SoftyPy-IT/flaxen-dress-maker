"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
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
    <DefaultLayout>
      <div className="mb-5 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
          flaxen@flaxengroup.com, Web : www.flaxengroup.com
        </p>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow>
                <TableCell align="center" className="whitespace-nowrap">
                  STYLE NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  ORDER NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  DESCRIPTION OF GOODS
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  QTY
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  CTN QTY
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  NET WEIGHT
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  GROSS WEIGHT
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  CARTON MEASUREMENT
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  CBM
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="mt-5 flex justify-end gap-5">
        <Button variant="contained" disableElevation startIcon={<PrintIcon />}>
          Print
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default page;
