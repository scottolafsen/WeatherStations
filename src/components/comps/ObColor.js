// import React from "react";

const TempColor = (value) => {
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
  if (value < 65) {
    return "subsixtyfive";
  }
  if (value < 70) {
    return "subseventy";
  }
  if (value < 75) {
    return "subseventyfive";
  }
  if (value < 80) {
    return "subeighty";
  }
  if (value > 79) {
    return "pluseighty";
  }
};

export default TempColor;

export const SnowDiffColor = (value) => {
  if (value < 0) {
    return "negative";
  }
  if (value === 0) {
    return "even";
  }
  if (value > 0) {
    return "positive";
  }
};

export const SnowColor = (value) => {
  if (value < 50) {
    return "lowsnow";
  }
  if (value > 50 && value < 100) {
    return "mediumsnow";
  }
  if (value > 100) {
    return "highsnow";
  }
};
export const SWEPercentColor = (value) => {
  if (value < 50) {
    return "lowestSWE";
  }
  if (value > 49 && value < 75) {
    return "lowSWE";
  }
  if (value > 74 && value < 100) {
    return "mediumSWE";
  }
  if (value > 99 && value < 125) {
    return "highSWE";
  }
  if (value > 124) {
    return "highestSWE";
  }
};
