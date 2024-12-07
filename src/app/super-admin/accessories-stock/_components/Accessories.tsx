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
import SendIcon from "@mui/icons-material/Send";
import AccStockSendModal from "./AccStockSendModal";

const Accessories = () => {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const rows = [
        {
          id: "1",
          no: "1",
          date: "27-10-2024",
          challan: "AB-0124",
          product: "Butam",
          qty: "10",
          unit: "pcs",
          price: "100tk",
          supplier: "AB Treaders",
          status: "Not Send Yet",
          
        },
        {
          id: "2",
          no: "2",
          date: "27-10-2024",
          challan: "AB-0124",
          product: "Niddle",
          qty: "10",
          unit: "pcs",
          price: "100tk",
          supplier: "AB Treaders",
          status: "Send to Cutting",
        },
        {
          id: "3",
          no: "3",
          date: "27-10-2024",
          challan: "AB-0124",
          product: "Pink Color",
          qty: "10",
          unit: "KG",
          price: "100tk",
          supplier: "AB Treaders",
          status: "Decline From Swing",
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
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  S. No
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Challan No.
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Unit
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Price
                </TableCell>
                
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Supplier
                </TableCell>               
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Status
                </TableCell>               
                
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
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
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& td": {
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.no}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.challan}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.product}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.qty}
                  </TableCell>
                  
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.unit}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.price}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.supplier}
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
                    


                    <Link
                      href={`/super-admin/accessories-stock/preview/${row.id}`}
                    >
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link
                      href={`/super-admin/accessories-stock/${row.id}`}
                    >
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

      {Open && <AccStockSendModal open={Open} setOpen={handleClose} />}
    </>
  );
};

export default Accessories;
