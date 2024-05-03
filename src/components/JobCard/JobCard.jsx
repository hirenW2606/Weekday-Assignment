import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">{job.companyName}</Typography>
        <Typography color="textPrimary" gutterBottom>
          {job.jobRole}
        </Typography>
        <Typography color="textSecondary">{job.location}</Typography>
        <Typography color="textSecondary">
          Estimated Salary: {job.minJdSalary} - {job.maxJdSalary}{" "}
          {job.salaryCurrencyCode}
        </Typography>
        <Typography>About Company:</Typography>
        <Typography variant="body2" component="p">
          {job.jobDetailsFromCompany}
        </Typography>
        <Grid container >
          <Button variant="contained">Easy Apply</Button>
          <Button variant="contained">Unlock refrals asks</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
