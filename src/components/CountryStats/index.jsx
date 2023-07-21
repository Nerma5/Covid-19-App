/* eslint-disable no-unused-vars */
import React from "react";
import StateCard from "./CountryStatsCard";
import MaterialUIPickers from "./DatePicker";
import CountrySelect from "./CountryList";

const CountryStats = () => {
  const optionsHistory = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: {
      country: "usa",
      day: "2020-06-02",
    },
    headers: {
      "X-RapidAPI-Key": "2c38faa98fmsh019b58309f5e926p1f7f64jsn9484a7416d26",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  return (
    <>
      <div className="top-inputs">
        <CountrySelect />
        <MaterialUIPickers />
      </div>
      <div className="CountryStates">
        <div className="mainCountryStats">
          <div className="stateCard">
            <StateCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryStats;
