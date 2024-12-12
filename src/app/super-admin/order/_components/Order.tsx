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
import SendIcon from "@mui/icons-material/Send";
import OrderSendModal from "./OrderSendModal";

const Order = () => {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows = [
    {
      id: "1",
      date: "01-02-2024",
      orderNo: "123",
      buyer: "John Doe",
      description: "need to be clear and good swing",
      size: "S",
      color: "Blue",
      orderQuantity: "500",
      price: "20",
      total: "10000",
      swatch: "Swatch",
      status: "Send to Cutting",
    },
    {
      id: "2",
      date: "01-02-2024",
      orderNo: "123",
      buyer: "John Doe",
      description: "need to be clear and good swing",
      size: "M",
      color: "Blue",
      orderQuantity: "500",
      price: "20",
      total: "10000",
      swatch: "Swatch",
      status: "Sending Processing",
    },
    {
      id: "3",
      date: "01-02-2024",
      orderNo: "123",
      buyer: "John Doe",
      description: "need to be clear and good swing",
      size: "L",
      color: "Blue",
      orderQuantity: "500",
      price: "20",
      total: "10000",
      swatch: "Swatch",
      status: "Not Send Yet",
    },
    {
      id: "4",
      date: "01-02-2024",
      orderNo: "123",
      buyer: "John Doe",
      description: "need to be clear and good swing",
      size: "XL",
      color: "Blue",
      orderQuantity: "500",
      price: "20",
      total: "10000",
      swatch: "Swatch",
      status: "Decline From Cutting",
    },
    {
      id: "5",
      date: "01-02-2024",
      orderNo: "123",
      buyer: "John Doe",
      description: "need to be clear and good swing",
      size: "XXL",
      color: "Blue",
      orderQuantity: "500",
      price: "20",
      total: "10000",
      swatch: "Swatch",
      status: "Decline From Cutting",
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
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  O. Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
                  Size
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Color
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Unit Price
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Total
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Swatch
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Item Description
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Status
                </TableCell>

                <TableCell align="center" className="whitespace-nowrap">
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
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.orderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyer}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.size}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.color}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.orderQuantity}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.price}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.swatch}
                  </TableCell>

                  <TableCell align="center" className="whitespace-nowrap">
                    {row.description}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.status}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <button className="text-blue-600" onClick={handleOpen}>
                      <SendIcon fontSize="small" />
                    </button>
                    <Link href={`/super-admin/order/preview/${row.id}`}>
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>

                    <Link href={`/super-admin/order/${row.id}`}>
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
      {Open && <OrderSendModal open={Open} setOpen={handleClose} />}
    </>
  );
};

export default Order;
