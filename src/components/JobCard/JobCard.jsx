import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Grid, styled } from "@mui/material";
import { useState } from "react";

const JobCard = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const EasyButton = styled(Button)({
    marginTop: "10px",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "#55efc4",
    color: "black",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#55efc4",
      borderColor: "#55efc4",
      boxShadow: "none",
    },
  });

  return (
    <Card
      sx={{
        boxShadow: 2,
        borderRadius: "20px",
        display: "flex",
        flexFlow: "wrap",
        alignContent: "space-around",
        width: "400px",
        marginLeft: "50px",
      }}
    >
      <CardContent>
        <Grid container direction={"column"}>
          <Grid>
            <img
              style={{ height: "50px", width: "50px" }}
              src={job.logoUrl}
            ></img>
          </Grid>
          <Typography color="textSecondary">{job.companyName}</Typography>
          <Typography color="textPrimary" gutterBottom>
            {job.jobRole}
          </Typography>
        </Grid>

        <Typography color="textSecondary">{job.location}</Typography>

        <Typography color="textSecondary" sx={{ marginY: "10px" }}>
          Estimated Salary: {job.minJdSalary} - {job.maxJdSalary}{" "}
          {job.salaryCurrencyCode}✅
        </Typography>

        <Typography variant="h6" color="textPrimary">
          About Company:
        </Typography>

        <Typography variant="caption" color="textPrimary">
          About us
        </Typography>

        {showFullDescription || job.jobDetailsFromCompany.length <= 200 ? (
          <Typography variant="body2" component="p">
            {job.jobDetailsFromCompany}
          </Typography>
        ) : (
          <>
            <Typography variant="body2" component="p">
              {job.jobDetailsFromCompany.substring(0, 400)}
            </Typography>
            <Grid container direction={"column"}>
              <Button size='small 'onClick={() => setShowFullDescription(true)}>
                Read More
              </Button>
            </Grid>
          </>
        )}

        <Typography sx={{ marginTop: "10px" }} color="textSecondary">
          Minimum Experience:
        </Typography>

        {job.minExp ? (
          <Typography color="textSecondary">{job.minExp} years</Typography>
        ) : (
          <Typography color="textSecondary">Fresher</Typography>
        )}

        <Grid container direction={"column"}>
          <EasyButton variant="contained">⚡ Easy Apply</EasyButton>
          <Button
            sx={{
              marginTop: "10px",
              borderRadius: "8px",
              padding: "12px",
              bgcolor: "#4943da",
              "&:hover": {
                backgroundColor: "#4943da",
                borderColor: "#4943da",
                boxShadow: "none",
              },
            }}
            variant="contained"
          >
            <Avatar
              sx={{ width: 24, height: 24, marginRight: "8px" }}
              src=".\src\assets\img1.png"
            ></Avatar>
            <Avatar
              sx={{ width: 24, height: 24, marginRight: "8px" }}
              src=".\src\assets\img2.png"
            ></Avatar>
            Unlock refrals asks
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
