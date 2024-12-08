import React from "react";
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

const Production = () => {
  const rows = [
    {
      id: "1",
      sl: "1",
      buyer: "John Doe",
      OrderNo: "123",
      color: "Red",
      item: "Item",
      gsm: "250",
      kg: "250",
      rcv: "250",
      blance: "10",
      kg2: "250",
      rcv2: "250",
      blance2: "10",
      pl: "250",
      total: "234",
      remark: "25",
    },
    {
      id: "2",
      sl: "2",
      buyer: "John Doe",
      OrderNo: "123",
      color: "Red",
      item: "Item",
      gsm: "250",
      kg: "250",
      rcv: "250",
      blance: "10",
      kg2: "250",
      rcv2: "250",
      blance2: "10",
      pl: "250",
      total: "234",
      remark: "25",
    },
    {
      id: "3",
      sl: "3",
      buyer: "John Doe",
      OrderNo: "123",
      color: "Red",
      item: "Item",
      gsm: "250",
      kg: "250",
      rcv: "250",
      blance: "10",
      kg2: "250",
      rcv2: "250",
      blance2: "10",
      pl: "250",
      total: "234",
      remark: "25",
    },
    {
      id: "4",
      sl: "4",
      buyer: "John Doe",
      OrderNo: "123",
      color: "Red",
      item: "Item",
      gsm: "250",
      kg: "250",
      rcv: "250",
      blance: "10",
      kg2: "250",
      rcv2: "250",
      blance2: "10",
      pl: "250",
      total: "234",
      remark: "25",
    },
    {
      id: "5",
      sl: "5",
      buyer: "John Doe",
      OrderNo: "123",
      color: "Red",
      item: "Item",
      gsm: "250",
      kg: "250",
      rcv: "250",
      blance: "10",
      kg2: "250",
      rcv2: "250",
      blance2: "10",
      pl: "250",
      total: "234",
      remark: "25",
    },
  ];

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          overflowX: "auto",
          maxWidth: {   xs: "1600px", 

            sm: "200px",  
            md: "1050px", 
            lg: "1050px",
            xl: "1600px" 
            },
          margin: "auto",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold",
                  padding: "8px",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  colSpan={7}
                >
                  Order Details
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Cutting
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Print
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Embroidery
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Sewing
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Finishing
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={6}
                  className="whitespace-nowrap"
                >
                  Poly
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  className="whitespace-nowrap"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold",
                  padding: "8px",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  SL.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order No.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer
                </TableCell>
                {/* <TableCell align="center" className="whitespace-nowrap">
                Type
                </TableCell> */}
                <TableCell align="center" className="whitespace-nowrap">
                  Styles
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Items
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Colors
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order Qty
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Receive
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cutting
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Pre. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Tdy. Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Marge Re.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sent
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  REMARKS
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  ACTION
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
                      padding: "8px",
                    },
                  }}
                >
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.sl}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.OrderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyer}
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
                  {/* <TableCell align="center" className="whitespace-nowrap">
                    {row.kg2}
                  </TableCell> */}
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
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.pl}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
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
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.pl}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
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
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.pl}
                  </TableCell>

                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remark}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Link href={`/super-admin/production/preview/${row.id}`}>
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href={`/super-admin/production/${row.id}`}>
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

export default Production;
