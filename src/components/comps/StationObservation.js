import React from "react";
import { Table } from "semantic-ui-react";

const Station = props => {
  return (
    <Table.Row>
      <Table.Cell>{props.ob}</Table.Cell>
      <Table.Cell>{props.value}</Table.Cell>
      <Table.Cell>{props.date}</Table.Cell>
    </Table.Row>
  );
};

export default Station;
