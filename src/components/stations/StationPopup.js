import React from "react";
import { Table } from "semantic-ui-react";
import Moment from "react-moment";
import moment from "moment";

// import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./style.css";

const StationPopup = props => {
  const renderObservation = () => {
    const obNames = Object.keys(props.observations);
    const obs = Object.values(props.observations);
    console.log(obs);
    return obs.map((ob, index) => {
      let min = moment().diff(ob.date_time, "minutes");
      console.log(min);
      return (
        <Table.Row key={obNames[index]}>
          <Table.Cell>
            {obNames[index]
              .split("_")
              .slice(0, -2)
              .join(" ")}
          </Table.Cell>
          <Table.Cell>
            {isNaN(ob.value) ? ob.value : Math.round(ob.value)}
          </Table.Cell>
          <Table.Cell>
            <Moment fromNow>{ob.date_time}</Moment>
          </Table.Cell>
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
    <Table celled className="table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell id="stnName">{props.stationName}</Table.HeaderCell>
          <Table.HeaderCell id="stnEl">{props.elevation} Ft</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
        <Table.Row id="stnOb">
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
