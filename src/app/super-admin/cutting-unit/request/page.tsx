"use client";

import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FlaxenSelect from "@/components/Forms/Select";
import FlaxenForm from "@/components/Forms/Form";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenDatePicker from "@/components/Forms/DatePicker";

const Page = () => {
  const [subCategories, setSubCategories] = React.useState<string[]>([""]);

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index] = value;
    setSubCategories(updatedSubCategories);
  };

  const handleDeleteSubCategory = (index: number) => {
    if (subCategories.length > 1) {
      const updatedSubCategories = subCategories.filter((_, i) => i !== index);
      setSubCategories(updatedSubCategories);
    }
  };
  const handleSubmit = () => {
    console.log();
  };

  const rows = [
    {
      id: "1",
      date: "27-10-2024",
      to:"Swing",
      buyer: "Fahim",
      order: "39695",
      orderqty: "39695",
      product:"Fabric",
      color: "White",
      gsm: "3",
      style:"S",
      qty:"100",
      unit:"pcs",
      factory: "Gazipur",
      accept: "Accept",
    },
    {
      id: "2",
      date: "27-10-2024",
      to:"Swing",
      buyer: "Fahim",
      order: "39695",
      orderqty: "39695",
      product:"Fabric",
      color: "White",
      gsm: "3",
      style:"S",
      qty:"100",
      unit:"pcs",
      factory: "Gazipur",
      accept: "Accept",
    },
    {
      id: "3",
      date: "27-10-2024",
      to:"Swing",
      buyer: "Fahim",
      order: "39695",
      orderqty: "39695",
      product:"Fabric",
      color: "White",
      gsm: "3",
      style:"S",
      qty:"100",
      unit:"pcs",
      factory: "Gazipur",
      accept: "Decline From Cutting",
    },
  ];
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Accessories Request</h3>
        
      </div>

      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <div className="">
     
          <div className="flex content-center items-center justify-center gap-2">
            <FlaxenForm onSubmit={handleSubmit}>
              <div className="my-4 flex justify-between gap-4">
                <div className="space-y-4">
                  <FlaxenInput
                    name="name"
                    label="Buyer Name"
                    fullWidth
                    size="medium"
                  />
                  <FlaxenInput
                    name="order"
                    label="Order No"
                    fullWidth
                    size="medium"
                  />
                  <FlaxenInput
                    name="orderqty"
                    label="Order Quantity"
                    fullWidth
                    size="medium"
                  />
                </div>
                <div className="space-y-4">
                  <FlaxenDatePicker
                    label="Date"
                    name="date"
                    fullWidth
                    size="medium"
                  />
                  <FlaxenInput
                    name="chln"
                    label="Chln. No"
                    fullWidth
                    size="medium"
                  />
                  <FlaxenSelect
                    items={["Cutting", "Embroidery", "Stock"]}
                    fullWidth
                    name="dept"
                    label="Select Department"
                    size="medium"
                  />
                </div>
              </div>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="my-3 flex  gap-4">
                    <FlaxenInput
                      label="Poduct Name"
                      name="name"
                      fullWidth
                      size="medium"
                    />
                    <FlaxenInput
                      fullWidth
                      name="color"
                      label="Color"
                      size="medium"
                    />
                    <FlaxenInput
                      label="GSM"
                      name="gsm"
                      fullWidth
                      size="medium"
                    />
                    {/* <FlaxenCombinedField
                      label="Quantity"
                      units={["PCS", "KG", "Litre"]}
                    /> */}
                    <FlaxenInput
                      label="Style/Size"
                      name="size"
                      fullWidth
                      size="medium"
                    />
                    <FlaxenInput
                      label="Quantity"
                      name="qty"
                      fullWidth
                      size="medium"
                    />
                    <FlaxenSelect
                      items={["PCS", "KG", "Litre"]}
                      fullWidth
                      name="unit"
                      label="Unit"
                      size="medium"
                    />
                     <FlaxenInput
                      label="Factory"
                      name="factory"
                      fullWidth
                      size="medium"
                    />
                  </div>

                  <div className="-mt-2 flex w-[100px] gap-1">
                    <IconButton
                      onClick={handleAddSubCategory}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": {
                          backgroundColor: "#d0d3f0",
                        },
                      }}
                    >
                      <AddIcon className="" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteSubCategory(index)}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": {
                          backgroundColor: "#d0d3f0",
                        },
                      }}
                    >
                      <RemoveCircleOutlineIcon className="text-red-600" />
                    </IconButton>
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  disableElevation
                >
                  Send Request
                </Button>
              </div>
            </FlaxenForm>
          </div>
        </div>
      </Paper>

      <Paper sx={{ overflow: "hidden", padding: "0px" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                th: {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                Send Dept.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order Qty.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Product Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Color
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  GSM
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Style/Size
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Unit
                </TableCell>               
                <TableCell align="center" className="whitespace-nowrap">
                  Factory
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
                  
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.to}</TableCell>
                  <TableCell align="center">{row.buyer}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell align="center">{row.orderqty}</TableCell>
                  <TableCell align="center">{row.product}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.gsm}</TableCell>
                  <TableCell align="center">{row.style}</TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">{row.unit}</TableCell>
                  <TableCell align="center">{row.factory}</TableCell>
                  
                  <TableCell align="center">{row.accept}</TableCell>
                  <TableCell align="center" className="">
                   

                    <IconButton
                      href={`/super-admin/fabric-reg/preview/${row.id}`}
                    >
                      <VisibilityIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton href={`/super-admin/fabric-reg/${row.id}`}>
                      <EditIcon fontSize="small" color="secondary" />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
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

export default Page;
