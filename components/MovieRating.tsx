import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Select } from "@radix-ui/themes";

const MovieRating = ({ rating }) => {
  return (
    <div>
      {rating}
      <StarRateIcon />
      <Select.Root defaultValue={rating}>
        <Select.Trigger color="indigo" variant="soft" />
        <Select.Content color="indigo">
          <Select.Item value="1">1</Select.Item>
          <Select.Item value="2">2</Select.Item>
          <Select.Item value="3">3</Select.Item>
          <Select.Item value="4">4</Select.Item>
          <Select.Item value="5">5</Select.Item>
          <Select.Item value="6">6</Select.Item>
          <Select.Item value="7">7</Select.Item>
          <Select.Item value="8">8</Select.Item>
          <Select.Item value="9">9</Select.Item>
          <Select.Item value="10">10</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default MovieRating;
