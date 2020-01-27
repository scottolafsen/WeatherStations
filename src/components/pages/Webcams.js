import React from "react";
import webcams from "./web-cams.json";
import { Link } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import "./webcams.css";

const WebcamDetail = () => {
  console.log(webcams);
  return (
    <div>
      <Container fluid>
        <Grid>
          <Grid.Row>
            {webcams.map(webcam => (
              <Link to={`/webcams/${webcam.id}`}>
                <img
                  className="ui large bordered rounded image"
                  key={webcam.id}
                  alt={webcam.name}
                  src={webcam.url}
                ></img>
              </Link>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default WebcamDetail;
