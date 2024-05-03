import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
const SearchBar = ({ job }) => {
  return (
    <Grid container direction="row" xs={12}>
      <Grid item xs={3}>
        <Autocomplete
          sx={{ paddingRight: "10px", maxWidth: "150px" }}
          multiple
          options={job}
          getOptionLabel={(option) => option.jobRole}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              defaultValue="Small"
              size="small"
              label=""
              placeholder="Roles"
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
          sx={{ paddingRight: "10px", maxWidth: "150px" }}
          multiple
          id="tags-outlined"
          options={job}
          getOptionLabel={(option) => option.minExp}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              hiddenLabel
              defaultValue="Small"
              size="small"
              label=""
              placeholder="Exprience"
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
          sx={{ paddingRight: "10px", maxWidth: "150px" }}
          multiple
          id="tags-outlined"
          options={job}
          getOptionLabel={(option) => option.location}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              hiddenLabel
              defaultValue="Small"
              size="small"
              label=""
              placeholder="Location"
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
