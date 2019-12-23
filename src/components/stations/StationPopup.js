import React from "react";
import { Table } from "semantic-ui-react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./style.css";

const StationPopup = props => {
  const renderObservation = () => {
    const obNames = Object.keys(props.observations);
    const obs = Object.values(props.observations);
    console.log(obs);
    return obs.map((ob, index) => {
      return (
        <Table.Row key={obNames[index]}>
          <Table.Cell>{obNames[index]}</Table.Cell>
          <Table.Cell>{Math.round(ob.value)}</Table.Cell>
          <Table.Cell>{ob.date_time}</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    // <Popup
    //   offsetLeft={6}
    //   offsetTop={6}
    //   latitude={parseFloat(props.latitude)}
    //   longitude={parseFloat(props.longitude)}
    //   onClose={() => {
    //     props.selectStation();
    //   }}
    // >
    <Table celled id="table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Observation</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
          <Table.HeaderCell>date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderObservation()}</Table.Body>
    </Table>
    // </Popup>
  );
};

export default StationPopup;
