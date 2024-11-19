// "use client";

// import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import React from "react";
// import flaxen from "../../../../../public/images/logos/flaxen.png";
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
//       date: "27-10-2024",
//       buyer: "John Doe",
//       OrderNo: "123",
//       color: "Red",
//       item: "Item",
//       gsm: "250",
//       kg: "250",
//       rcv: "250",
//       blance: "1.2",
//       kg2: "250",
//       rcv2: "250",
//       blance2: "1.2",
//       pl: "250",
//       total: "234",
//       remark: "25",
//     },
//     {
//       id: "2",
//       date: "27-10-2024",
//       buyer: "John Doe",
//       OrderNo: "123",
//       color: "Red",
//       item: "Item",
//       gsm: "250",
//       kg: "250",
//       rcv: "250",
//       blance: "1.2",
//       kg2: "250",
//       rcv2: "250",
//       blance2: "1.2",
//       pl: "250",
//       total: "234",
//       remark: "25",
//     },
//     // Add more rows as needed
//   ];

//   return (
//     <>
//       <div className="a4-paper mx-auto bg-white p-5">
//       <div className="flex items-center justify-between border-b pb-3">
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
//                     Order No
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     Color
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     Item
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     GSM
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     KG
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     RCV
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     Balance
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     PL
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
//                     Total
//                   </TableCell>
//                   <TableCell align="center" className="text-sm font-bold">
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
//                       {row.OrderNo}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.color}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.item}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.gsm}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.kg}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.rcv}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.blance}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.pl}
//                     </TableCell>
//                     <TableCell align="center" className="text-sm">
//                       {row.total}
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
       
//       </div>
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
//     </>
//   );
// };

// export default Page;

"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../assets/images/logo/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
];

const Page = () => {
  return (
    <>
      <div className="text-center mb-5">
        <div className="flex gap-2 items-center justify-center mb-3">
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
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  colSpan={6}
                ></TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  className="whitespace-nowrap"
                >
                  BODY FABRIC
                </TableCell>

                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                ></TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  className="whitespace-nowrap"
                >
                  RIB & COLOR
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={5}
                  className="whitespace-nowrap"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow>
                <TableCell align="center" className="whitespace-nowrap">
                  DATE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BUYER
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  OR/NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  COLOR
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/ITEM
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  GSM
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REQ/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/RCV/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BLANCE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REQ/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/RCV/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BLANCE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  P/L
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  TOTAL/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REMARKS
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
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyer}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.OrderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.color}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.item}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.gsm}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.kg}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.rcv}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.kg2}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.rcv2}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.pl}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remark}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
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
    </>
  );
};

export default Page;
