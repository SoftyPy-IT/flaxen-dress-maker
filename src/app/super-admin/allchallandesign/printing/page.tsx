"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";

const Page = () => {
  const rows = [
    {
      id: "1",
      receiverName: "John Doe",
      item: "Item",
      color: "Black",
      top: "Top",
      chNo: 123,
      vendorName: "Flaxen",
      bin: "Cutting",
      receiveQuantity: "25",
      remark: "Remark",
    },
    {
      id: "2",
      receiverName: "John Doe",
      item: "Item",
      color: "Black",
      top: "Top",
      chNo: 123,
      vendorName: "Flaxen",
      bin: "Cutting",
      receiveQuantity: "25",
      remark: "Remark",
    },
    {
      id: "3",
      receiverName: "John Doe",
      item: "Item",
      color: "Black",
      top: "Top",
      chNo: 123,
      vendorName: "Flaxen",
      bin: "Cutting",
      receiveQuantity: "25",
      remark: "Remark",
    },
    {
      id: "4",
      receiverName: "John Doe",
      item: "Item",
      color: "Black",
      top: "Top",
      chNo: 123,
      vendorName: "Flaxen",
      bin: "Cutting",
      receiveQuantity: "25",
      remark: "Remark",
    },
  ];

  const signatureRoles = [
    "Receiver's Signature",
    "Receiver's Name",
    "Date",
    "",
    "Authorised Signature",
  ];

  return (
    <>
      <div className="a4-paper mx-auto bg-white p-5">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <Image src={flaxen} alt="Company Logo" width={40} height={40} />
            <div>
              <h1 className="text-lg font-bold">Flaxen Dress Maker Ltd</h1>
              <p className="text-sm">
                Factory: Meghdubi, Gazipur-1700, Bangladesh
              </p>
              <p className="text-sm">
                Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-left text-sm">
              <PhoneIcon fontSize="small" /> +880-2-8913263, 8916198
            </p>
            <p className="text-left text-sm">
              <FaxIcon fontSize="small" /> +88-02-8913263
            </p>
            <p className="text-left text-sm">
              <EmailIcon fontSize="small" /> flaxen@flaxengroup.com
            </p>
            <p className="text-left text-sm">
              <LanguageIcon fontSize="small" /> www.flaxengroup.com
            </p>
          </div>
        </div>
        <div className="p-2 ">
     
          <h5 className="mx-auto mt-2 w-[250px]  bg-gray-400 p-2 text-center text-sm uppercase text-white">
            printing unit delivery CHALLAN
          </h5>
          
        </div>

        <div className="space-y-4 mb-2">
          <h5>Challan No:.......................</h5>
          <div className="flex gap-4">
            <h5>
              Name of
              Payee:....................................................................................................................
            </h5>
            <h5>Date:.............................................</h5>
          </div>
          <h5>
            Address:..............................................................................................................................................................................................
          </h5>
          <h5>Gate Pass No:......................................</h5>
        </div>

        

      
        <Paper elevation={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  className="bg-[#f3f3f3]"
                  sx={{
                    "& th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center" className="text-sm font-bold">
                    Sl No.
                  </TableCell>
                  <TableCell align="center" className="text-sm font-bold">
                    Buyer Name
                  </TableCell>
                  <TableCell align="center" className="text-sm">
                    Order No
                  </TableCell>
                  <TableCell align="center" className="text-sm">
                    Style
                  </TableCell>
                  <TableCell align="center" className="text-sm">
                    Color
                  </TableCell>
                  <TableCell align="center" className="text-sm">
                    Quantity
                  </TableCell>
                  <TableCell align="center" className="text-sm">
                    Remarks
                  </TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      td: {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell align="center" className="text-sm">
                      {row.receiverName}
                    </TableCell>
                    <TableCell align="center" className="text-sm">
                      {row.item}
                    </TableCell>
                    <TableCell align="center" className="text-sm">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="text-sm">
                      {row.top}
                    </TableCell>
                    <TableCell align="center" className="text-sm">
                      {row.chNo}
                    </TableCell>
                    <TableCell align="center" className="text-sm">
                      {row.vendorName}
                    </TableCell>
                    
                    <TableCell align="center" className="text-sm">
                      {row.remark}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {signatureRoles.map((role, index) => (
            <div key={index}>
              <div className="mb-[5px] mt-10 border-b border-black text-center" />
              <span>
                {role} <br />
              </span>
              {/* <span>Signature</span> */}
              <div />
            </div>
          ))}
        </div>
      </div>

      {/* Additional A4-specific styles */}
      <style jsx>{`
        .a4-paper {
          width: 210mm;
          height: 297mm;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }
        @media print {
          .a4-paper {
            width: auto;
            height: auto;
            box-shadow: none;
            margin: 0;
            padding: 20mm;
            page-break-before: always;
            font-size: 12px;
          }
          .print-hidden {
            display: none;
          }
        }
      `}</style>
      <div className=" mt-6 flex justify-center gap-3">
        <Button variant="contained" disableElevation startIcon={<EditIcon />}>
          Edit
        </Button>
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
    </>
  );
};
export default Page;
