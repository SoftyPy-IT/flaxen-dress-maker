// "use client";

// import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import React from "react";
// import flaxen from "../../../../../../public/images/logos/flaxen.png";
// import Image from "next/image";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { Button } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";
// import PrintIcon from "@mui/icons-material/Print";
// import PhoneIcon from "@mui/icons-material/Phone";
// import FaxIcon from "@mui/icons-material/Fax";
// import EmailIcon from "@mui/icons-material/Email";
// import LanguageIcon from "@mui/icons-material/Language";
// import EditIcon from "@mui/icons-material/Edit";

// const Page = () => {
//   const rows = [
//     {
//       id: "1",
//       receiverName: "John Doe",
//       item: "Item",
//       color: "Black",
//       top: "Top",
//       chNo: 123,
//       vendorName: "Flaxen",
//       bin: "Cutting",
//       receiveQuantity: "25",
//       remark: "Remark",
//     },
//     {
//       id: "2",
//       receiverName: "John Doe",
//       item: "Item",
//       color: "Black",
//       top: "Top",
//       chNo: 123,
//       vendorName: "Flaxen",
//       bin: "Cutting",
//       receiveQuantity: "25",
//       remark: "Remark",
//     },
//     {
//       id: "3",
//       receiverName: "John Doe",
//       item: "Item",
//       color: "Black",
//       top: "Top",
//       chNo: 123,
//       vendorName: "Flaxen",
//       bin: "Cutting",
//       receiveQuantity: "25",
//       remark: "Remark",
//     },
//     {
//       id: "4",
//       receiverName: "John Doe",
//       item: "Item",
//       color: "Black",
//       top: "Top",
//       chNo: 123,
//       vendorName: "Flaxen",
//       bin: "Cutting",
//       receiveQuantity: "25",
//       remark: "Remark",
//     },
//   ];

//   const signatureRoles = [
//     "Receiver's Signature",
//     "Receiver's Name",
//     "Date",
//     "",
//     "Authorised Signature",
//   ];

//   return (
//     <DefaultLayout>
//       <div className="a4-paper mx-auto bg-white p-5">
//         <div className="flex items-center justify-between border-b pb-3">
//           <div className="flex items-center gap-4">
//             <Image src={flaxen} alt="Company Logo" width={40} height={40} />
//             <div >
//               <h1 className="text-lg font-bold">Flaxen Dress Maker Ltd</h1>
//               <p className="text-sm">
//                 Factory: Meghdubi, Gazipur-1700, Bangladesh
//               </p>
//               <p className="text-sm">
//                 Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka
//               </p>
//             </div>
//           </div>
//           <div className="text-right">
//             <p className="text-left text-sm">
//               <PhoneIcon fontSize="small" /> +880-2-8913263, 8916198
//             </p>
//             <p className="text-left text-sm">
//               <FaxIcon fontSize="small" /> +88-02-8913263
//             </p>
//             <p className="text-left text-sm">
//               <EmailIcon fontSize="small" /> flaxen@flaxengroup.com
//             </p>
//             <p className="text-left text-sm">
//               <LanguageIcon fontSize="small" /> www.flaxengroup.com
//             </p>
//           </div>
//         </div>
//         <div className="text-center bg-gray-400 p-2  w-[150px] mx-auto mt-2 text-sm text-white">
//         <h5 className="">DELIVERY CHALLAN</h5>
//         </div>
//         <div className="flex justify-between">
//           <div className="p-2 space-y-2">
//             <p> Buyer&apos;s Name & Address:</p>
//             <p className="text-sm">
//               <span className="font-bold">John Doe</span>
//             </p>
//             <p className="text-sm">Dhaka, Bangladesh</p>
//           </div>
//           <div className="p-2 space-y-3">
//             <p> No:</p>
//             <p className="text-sm">
//               <span className="font-bold">Date:......................</span>
//             </p>
//             <p className="text-sm">Buyer:......................</p>
//             <p className="text-sm">Ref.:......................</p>
//           </div>
//         </div>
//         {/* <hr /> */}
//         {/* <div className="m-2 flex justify-between text-sm">
//           <p className="text-sm">Shi. Date: 01/01/2023</p>
//           <p className="text-sm">Order No: 12345</p>
//           <p className="text-sm">QTY: 123</p>
//           <p className="text-sm">Style No: 12</p>
//         </div> */}
//         <Paper elevation={0}>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow
//                   className="bg-[#f3f3f3]"
//                   sx={{
//                     "& th": {
//                       border: "1px solid rgba(224, 224, 224, 1)",
//                     },
//                   }}
//                 >
//                   <TableCell align="center" className="text-sm font-bold">
//                     Receiver
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Item
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Color
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Top
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Ch.No
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Vendor
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Bin
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Quantity
//                   </TableCell>
//                   <TableCell align="center" className="text-sm">
//                     Remark
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     sx={{
//                       td: {
//                         border: "1px solid rgba(224, 224, 224, 1)",
//                       },
//                     }}
//                   >
//                     <TableCell align="center" className="text-sm">
//                       {row.receiverName}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.item}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.color}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.top}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.chNo}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.vendorName}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.bin}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.receiveQuantity}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.remark}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>

//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           {signatureRoles.map((role, index) => (
//             <div key={index}>
//               <div className="mb-[5px] mt-10 border-b border-black text-center" />
//               <span>
//                 {role} <br />
//               </span>
//               {/* <span>Signature</span> */}
//               <div />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Additional A4-specific styles */}
//       <style jsx>{`
//         .a4-paper {
//           width: 210mm;
//           height: 297mm;
//           box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
//         }
//         @media print {
//           .a4-paper {
//             width: auto;
//             height: auto;
//             box-shadow: none;
//             margin: 0;
//             padding: 20mm;
//             page-break-before: always;
//             font-size: 12px;
//           }
//           .print-hidden {
//             display: none;
//           }
//         }
//       `}</style>
//       <div className=" mt-6 flex justify-center gap-3">
//         <Button variant="contained" disableElevation startIcon={<EditIcon />}>
//           Edit
//         </Button>
//         <Button variant="contained" disableElevation startIcon={<PrintIcon />}>
//           Print
//         </Button>
//         <Button
//           variant="contained"
//           disableElevation
//           startIcon={<DownloadIcon />}
//         >
//           Download
//         </Button>
//       </div>
//     </DefaultLayout>
//   );
// };
// export default Page;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import flaxen from "../../../../../assets/images/logo/flaxen.png";
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
  remark: string,
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
      
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center gap-2">
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
        <div className="mb-2 flex items-center justify-between">
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
              <div className="mb-[10px] mt-10 border-b border-black text-center" />
              <span>{role}</span>
              <span>Signature</span>
              <div />
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-5">
          <Button
            variant="contained"
            disableElevation
            startIcon={<PrintIcon />}
          >
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

export default Preview;
