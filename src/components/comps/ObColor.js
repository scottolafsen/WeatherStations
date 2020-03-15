import React from "react";

const TempColor = value => {
  if (value < 0) {
    return "subzero";
  }
  if (value < 5) {
    return "subfive";
  }
  if (value < 10) {
    return "subten";
  }
  if (value < 15) {
    return "subfifteen";
  }
  if (value < 20) {
    return "subtwenty";
  }
  if (value < 25) {
    return "subtwentyfive";
  }
  if (value < 30) {
    return "subthirty";
  }
  if (value < 35) {
    return "subthirtyFive";
  }
  if (value < 40) {
    return "subforty";
  }
  if (value < 45) {
    return "subfortyfive";
  }
  if (value < 50) {
    return "subfifty";
  }
  if (value < 55) {
    return "subfiftyfive";
  }
  if (value < 60) {
    return "subsixty";
  }
  if (value > 59) {
    return "plussixty";
  }
};

export default TempColor;
