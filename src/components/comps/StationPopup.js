import React from "react";
import { Table } from "semantic-ui-react";
// import Moment from "react-moment";
import moment from "moment";
import { Link } from "react-router-dom";
import TempColor, { SWEPercentColor } from "./ObColor";
import ReactMapGL, { Popup } from "react-map-gl";
import "./style.css";

const StationPopup = (props) => {
  const renderColumns = () => {
    let dropdown = props.selectedLabel.split("|");
    let mapOb = dropdown[0];
    const colNames = Object.keys(props.observations);
    let targetIndex = colNames.indexOf(mapOb);

    return colNames.map((col, index) => {
      if (index === 0 || index === targetIndex) {
        return (
          <Table.HeaderCell key={col}>
            {col.split("set")[0].replace(/_/g, " ")}
          </Table.HeaderCell>
        );
      } else {
        return null;
      }
    });
  };

  const renderObservation = () => {
    let dropdown = props.selectedLabel.split("|");
    let mapOb = dropdown[0];
    const obNames = Object.keys(props.observations);
    let targetIndex = obNames.indexOf(mapOb);
    const dtIndex = obNames.indexOf("date_time");
    const obs = Object.values(props.observations);
    const dateTime = obs[dtIndex];
    const iterator = dateTime.length;
    return dateTime.map((d, index) => {
      let i = index;
      let hour = d.split(":")[1];
      console.log(hour);
      return (
        <Table.Row key={i}>
          {obNames.map((ob, index) => {
            if (index === dtIndex || index === targetIndex) {
              let val = obs[index];
              let cell = val[iterator - i - 1];
              let hour = dateTime[iterator - i - 1].split(":")[1];
              if (hour === "00") {
                if (ob === "date_time") {
                  let parsed = moment.utc(cell).local().format("dd hh:mm a");
                  // console.log(parsed);
                  return <Table.Cell key={index}>{parsed}</Table.Cell>;
                } else {
                  return (
                    <Table.Cell key={index} id={TempColor(Math.round(cell))}>
                      {Math.round(cell)}
                    </Table.Cell>
                  );
                }
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}
        </Table.Row>
      );
    });
  };

  return (
    <Popup
      offsetLeft={-100}
      offsetTop={-100}
      maxWidth={50}
      closeOnClick={false}
      latitude={parseFloat(props.latitude)}
      longitude={parseFloat(props.longitude)}
      // latitude={0}
      // longitude={0}
      onClose={() => {
        props.selectStation();
      }}
    >
      <Table celled className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="stnName">
              <Link to={`/stations/${props.STID}`} className="header">
                {props.stationName}
              </Link>
            </Table.HeaderCell>
            <Table.HeaderCell id="stnEl">{props.elevation} Ft</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
          <Table.Row>{renderColumns()}</Table.Row>
        </Table.Header>
        <Table.Body>{renderObservation()}</Table.Body>
      </Table>
    </Popup>
  );
};

export default StationPopup;
