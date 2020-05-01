import React from "react";
import moment from "moment";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const Chart = props => {
  const renderChart = () => {
    let data = props.stations;
    let data2 = data.OBSERVATIONS;
    const obNames = Object.keys(data2);
    console.log(obNames);
    const obs = Object.values(data2);
    const dateTime = obs[0];
    const ob = obs[3];
    // const iterator = dateTime.length;
    let snowDepth = dateTime.map((d, index) => ({
      x: moment
        .utc(dateTime[index])
        .local()
        .format("hh a"),
      y: ob[index]
    }));
    console.log(snowDepth);
    return (
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" }
          }}
          data={snowDepth}
        />
      </VictoryChart>
    );
  };
  return <div>{renderChart()}</div>;
};

export default Chart;
