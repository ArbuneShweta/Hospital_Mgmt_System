import { NavLink } from "react-router-dom";
import { Route, Switch, Router } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";

const VerticleNav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>


      <nav className="nav flex-column text-center ">
        <a type="button" className="btn btn-primary btn-lg" href="/Patient"> Patient </a> 
        <hr className="border-dark"></hr>
        <a className="btn btn-primary btn-lg" href="/Doctor"> Doctor </a> 
        <hr className="border-dark"></hr>
        <a className="btn btn-primary btn-lg" href="/OPD"> OPD </a> 
        <hr className="border-dark"></hr>
        <a className="btn btn-primary btn-lg" href="/IPD"> IPD </a>
        <hr className="border-dark"></hr> 

        <a className="btn btn-primary btn-lg" href="/Room"> Room </a> 
        <hr className="border-dark"></hr>
        <a className="btn btn-primary btn-lg" href="/Ward"> Ward </a>
        <hr className="border-dark"></hr> 

        <a className="btn btn-primary btn-lg" href="/Nurse"> Nurse </a> 
        <hr className="border-dark"></hr>
        <a className="btn btn-primary btn-lg" href="/Wardboy"> Wardboy </a>
        <hr className="border-dark"></hr> 

      </nav> 

    </>
  );
};

export default VerticleNav;
