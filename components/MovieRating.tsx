import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Select } from "@radix-ui/themes";
import { PropTypes } from "@mui/material";
import { yellow } from "@mui/material/colors";

const MovieRating = ({ count, rating, color, onrating }) => {
  return (<div>{rating}</div>);
}
Rate.propType = {
  const: PropType.number,
  rating: PropType.number,
  const: PropType.func,
    color: {
        filled: PropType.String,
        unfilled:propTType.string
    }
    Rate.defaultprops = {
        count: 5,
        rate: 0,
        color: {
            filled: "Yellow",
            unfilled: "grey"

        }
    }
};
export default MovieRating;
