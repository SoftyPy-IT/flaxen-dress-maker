import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import flaxen from "../../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

function createData(
  id: number,
  buyer: string,
  orderNo: string,
  item: string,
  color: string,
  styleNo: string,
  line: string,
  floor: string,
  date: string,
  time: string,
  remark: string
) {
  return {
    id,
    buyer,
    orderNo,
    item,
    color,
    styleNo,
    line,
    floor,
    date,
    time,
    remark,
  };
}

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
    delivery: "626",
    name: "abed",
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
    delivery: "626",
    name: "abed",
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
    delivery: "626",
    name: "abed",
  },
  {
    id: "4",
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
    delivery: "626",
    name: "abed",
  },
  {
    id: "5",
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
    delivery: "626",
    name: "abed",
  },
];
const signatureRoles = [
  "Cutting Supervisor",
  "Sewing/Finishing Supervisor",
  "Floor Incharge",
  "Production Manager",
  "Store Officer",
];

const Preview = () => {
  return (
    <>
    <DefaultLayout>
      <div className="text-center mb-4">
        <div className="flex gap-2 items-center justify-center">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone: +880-2-8913263, 8916198, Fax: +88-02-8913263 E-mail:
          flaxen@flaxengroup.com, Web: www.flaxengroup.com
        </p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h5>Sl. No. </h5>
        <h2 className="text-center">Fabric Register</h2>
        <h2 className="text-center"></h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              {[
                "Date",
                "Color",
                "Lot/B No",
                "Factory",
                "CH/No",
                "DIA",
                "Roll",
                "FAB REQ",
                "Fabric Gross Weight",
                "Fabric Finish Weight",
                "Delivery",
                "Name",
              ].map((header) => (
                <TableCell
                  align="center"
                  key={header}
                  className="whitespace-nowrap"
                >
                  {header}
                </TableCell>
              ))}
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
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.date}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.color}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.lot}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.factory}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.cn}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.dia}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.roll}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.fabreq}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.gross}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.finish}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.delivery}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {signatureRoles.map((role, index) => (
          <div key={index}>
            <div className="text-center mb-[10px] border-b border-black mt-10" />
            <span>{role}</span>
            <span>Signature</span>
            <div />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-5 mt-5">
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
    </>
  );
};

export default Preview;
