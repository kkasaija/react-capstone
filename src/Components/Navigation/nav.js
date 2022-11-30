import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import Covid from '../../images/Covid.jpg';

export default function Nav() {
  const arrowBack = <TiArrowBackOutline className="arrowBack" />;
  const location = useLocation();
  const header = 'Corona Virus Checker';
  const returnToHome = location.pathname.includes('country') ? arrowBack : '';

  return (
    <nav>
      <div className="nav1">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {returnToHome}
        </NavLink>
        <h1 className="navheader">AFRICAN-COVID19-DATA-STATISTICS</h1>
        <div className="navIcons">
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>

      <div className="nav2">
        <img src={Covid} alt="logo" className="covidlogo" />
        <h1 className="header2">
          {header}
        </h1>
      </div>
    </nav>
  );
}
