import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import { dressPage1 } from "../../../Data/dress/page1";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../../Redux/Customers/Product/Action";

const ProductsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });

  // query 
  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");


  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value-1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    // setFilterValue({ availability, category, sort });
    const data = {
      category:category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber:page || 0,
      pageSize: 10,
      stock: availability,
    };
    dispatch(findProducts(data));
  }, [availability, category, sort,page,customersProduct.deleteProduct]);

  const handleFilterChange = (e, sectionId) => {
    console.log(e.target.value, sectionId);
    setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleDeleteProduct=(productId)=>{
    console.log("delete product ",productId)
    dispatch(deleteProduct(productId))
  }

  return (
    <Box width={"100%"}>
      <Card className="p-3">
        <CardHeader
          title="Sort"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.category}
                label="Category"
                onChange={(e) => handleFilterChange(e, "category")}
              >
                <MenuItem value={"women_tops"}>women_tops</MenuItem>
                <MenuItem value={"Dress"}>Dress</MenuItem>
                <MenuItem value={"women_jeans"}>women_jeans</MenuItem>
                <MenuItem value={"women_lenghaCholi"}>women_lenghaCholi</MenuItem>
                <MenuItem value={"women_gouns"}>women_gouns</MenuItem>
                <MenuItem value={"women_saree"}>women_saree</MenuItem>
                <MenuItem value={"women_handbags"}>women_handbags</MenuItem>
                <MenuItem value={"women_watches"}>women_watches</MenuItem>
                <MenuItem value={"women_wallets"}>women_wallets</MenuItem>
                <MenuItem value={"women_sunglasses"}>women_sunglasses</MenuItem>
                <MenuItem value={"mens_kurta"}>mens_kurta</MenuItem>
                <MenuItem value={"shirt"}>shirt</MenuItem>
                <MenuItem value={"men_jeans"}>men_jeans</MenuItem>
                <MenuItem value={"T-Shirts"}>T-Shirts</MenuItem>
                <MenuItem value={"men_jackets"}>men_jackets</MenuItem>
                <MenuItem value={"men_backpacks"}>men_backpacks</MenuItem>
                <MenuItem value={"men_watches"}>men_watches</MenuItem>
                <MenuItem value={"men_wallets"}>men_wallets</MenuItem>
                <MenuItem value={"men_sunglasses"}>men_sunglasses</MenuItem>
                <MenuItem value={"men_belts"}>men_belts</MenuItem>
            
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Availability
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.availability}
                label="Availability"
                onChange={(e) => handleFilterChange(e, "availability")}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"in_stock"}>Instock</MenuItem>
                <MenuItem value={"out_of_stock"}>Out Of Stock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sort By Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.sort}
                label="Sort By Price"
                onChange={(e) => handleFilterChange(e, "sort")}
              >
                <MenuItem value={"price_high"}>Heigh - Low</MenuItem>
                <MenuItem value={"price_low"}>Low - Heigh</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      
      <Card className="mt-2">
        <CardHeader
          title="All Products"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersProduct?.products?.content?.map((item) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  <TableCell>
                    {" "}
                    <Avatar alt={item.titel} src={item.imageUrl} />{" "}
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.category.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.quantity}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button onClick={()=>navigate(`/admin/product/update/${item.id}`)} variant="text">Update</Button>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button variant="text" onClick={()=>handleDeleteProduct(item.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 border">

        <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={customersProduct.products?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
            // value={page}
          />
        </div>
      </Card>
    </Box>
  );
};

export default ProductsTable;
