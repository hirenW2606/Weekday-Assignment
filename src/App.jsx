import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import JobCard from './components/JobCard/JobCard';
import { Grid } from '@mui/material';
import { fetchJobData } from './utils/JobApi';
import { createTheme, ThemeProvider } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const theme = createTheme({ typography: { fontFamily: ['Lexend'].join(',') } });
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobData(10, 0);
        setJobData(data.jdList);
        setHasMore(data.jdList.length > 0);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const data = await fetchJobData(10, offset + 10);
      setJobData((prevData) => [...prevData, ...data.jdList]);
      setOffset(offset + 10);
      setHasMore(data.jdList.length > 0);
    } catch (error) {
      setError(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ margin: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <SearchBar job={jobData} />
            </Grid>
          </Grid>
        </div>
        <InfiniteScroll
          dataLength={jobData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<div>Loading...</div>}
          endMessage={<div>No more jobs to display.</div>}
        >
          <Grid container spacing={3}>
            {jobData.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </div>
    </ThemeProvider>
  );
}

export default App;