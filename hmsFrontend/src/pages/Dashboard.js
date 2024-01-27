import React from "react";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../Dash.css";
//import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ApprovalIcon from "@mui/icons-material/Approval";
import PieChart from "../Charts/PieChart";
//import PieChart2 from "../Charts/PieChart2";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BarChart from "../Charts/BarChart";

export default function Dashboard() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex", marginLeft: "-8px", marginRight: "-8px" }}>
          <SideNav />

          <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={3} direction="row">
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "45%",
                      height: 100,
                      backgroundColor: "#2b98d5",
                    }}
                    className="gradient"
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div
                          className="IconStyle1"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                          }}
                        >
                          <PeopleAltIcon style={{ marginRight: "1px" }} />
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{ color: "white", wordWrap: "break-word" }}
                          >
                            Total Students
                          </Typography>
                        </div>

                        <div
                          style={{
                            color: "white",
                            fontSize: "2.0rem",
                            marginLeft: "auto",
                            marginTop: "13px",
                          }}
                        >
                          500
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "45%",
                      height: 100,
                      backgroundColor: "#e51421",
                    }}
                    className="gradient1"
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div
                          className="IconStyle1"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                          }}
                        >
                          <SingleBedIcon style={{ marginRight: "1px" }} />
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{ color: "white", wordWrap: "break-word" }}
                          >
                            Vacant Rooms
                          </Typography>
                        </div>

                        <div
                          style={{
                            color: "white",
                            fontSize: "2.0rem",
                            marginLeft: "auto",
                            marginTop: "13px",
                          }}
                        >
                          50
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Stack>

                <Box height={30} />
                <Stack spacing={3} direction="row">
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "45%",
                      height: 100,
                      backgroundColor: "#e51421",
                    }}
                    className="gradient2"
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          //width: "100%",
                        }}
                      >
                        <div
                          className="IconStyle1"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                          }}
                        >
                          <RequestPageIcon style={{ marginRight: "1px" }} />
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{ color: "white", wordWrap: "break-word" }}
                          >
                            Total Requests
                          </Typography>
                        </div>

                        <div
                          style={{
                            color: "white",
                            fontSize: "2.0rem",
                            marginLeft: "auto",
                            marginTop: "13px",
                          }}
                        >
                          32
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "45%",
                      height: 100,
                      backgroundColor: "#2b98d5",
                    }}
                    className="gradient3"
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          //width: "100%",
                        }}
                      >
                        <div
                          className="IconStyle1"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                          }}
                        >
                          <ApprovalIcon style={{ marginRight: "1px" }} />
                          <Typography
                            variant="h6"
                            component="span"
                            sx={{ color: "white", wordWrap: "break-word" }}
                          >
                            Pending Approvals
                          </Typography>
                        </div>

                        <div
                          style={{
                            color: "white",
                            fontSize: "2.0rem",
                            marginLeft: "auto",
                            marginTop: "13px",
                          }}
                        >
                          18
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              {/*<Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Stack spacing={1} direction="row">
                      <div className="IconStyle">
                        <InventoryIcon />
                      </div>
                      <div className="paddingall">
                        <span className="Inventory">Inventory Overview</span>
                      </div>
                    </Stack>
                    <PieChart2 />
                  </CardContent>
                </Card>
                        </Grid>*/}
            </Grid>

            <Box height={20} />
            <Grid container spacing={3}>
              <Grid item xs={7.5} style={{ marginTop: '20px' }}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4.2} style={{ marginTop: '20px' }}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Stack spacing={1} direction="row" alignItems="center">
                      <div className="IconStyle">
                        <LocalMallIcon />
                      </div>

                      <div className="paddingall">
                        <span className="revenue">Inventory Overview</span>
                      </div>
                    </Stack>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
