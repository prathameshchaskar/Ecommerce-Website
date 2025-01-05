// ** MUI Imports
import Grid from "@mui/material/Grid";
import AdminPannel from "../../Styles/AdminPannelWrapper";
import Achivement from "../tables/Achivement";
import WeeklyOverview from "../tables/WeeklyOverview";
import TotalEarning from "../tables/TotalEarning";
import CustomersTable from "../tables/CustomersTable";
import { ThemeProvider, createTheme } from "@mui/material";
import { customTheme, darkTheme } from "../theme/customTheme";
import "./Admin.css";
import RecentlyAddeddProducts from "../tables/RecentlyAddeddProducts";
import SalesOverTime from "../tables/SalesOverTime";
import RecentOrders from "../tables/RecentOrders";
import MonthlyOverview from "../tables/MonthlyOverView";




const Admin = () => {
  return (
    <div className="adminContainer ">
      <ThemeProvider theme={customTheme}>
        <AdminPannel>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Achivement />
            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <WeeklyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CustomersTable />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <RecentOrders />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <RecentlyAddeddProducts />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SalesOverTime />
          </Grid>

          <Grid item xs={12}>
            <CustomersTable />
          </Grid>
        </AdminPannel>
      </ThemeProvider>
    </div>
  );
};

export default Admin;
