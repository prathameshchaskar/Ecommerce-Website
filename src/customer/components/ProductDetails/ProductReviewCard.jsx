import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = React.useState();
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
              alt={item.user.firstName}
              src=""
            >
              {item.user.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item sx={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Prathamesh</p>
              <p className="opacity-70">August 11, 2024</p>
            </div>
          </div>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
          <p>{item.review}</p>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
