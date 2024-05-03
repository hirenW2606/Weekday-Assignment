import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import { Grid } from "@mui/material";
import { fetchJobData } from "./utils/JobApi";
import { useState, useEffect } from "react";

function App() {
  const [jobData, setJobData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobData();
        setJobData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <SearchBar />
      <Grid container spacing={3}>
        {jobData.jdList.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
