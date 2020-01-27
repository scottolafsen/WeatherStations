import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "Temp", value: 1 },
  { key: 2, text: "Wind Speed", value: 2 },
  { key: 3, text: "Wind Gust", value: 3 },
  { key: 4, text: "Wind Direction", value: 4 },
  { key: 5, text: "Snow Depth", value: 5 }
];

const DropdownLabels = () => (
  <Menu compact>
    <Dropdown text="Observation" options={options} simple item />
  </Menu>
);

export default DropdownLabels;
