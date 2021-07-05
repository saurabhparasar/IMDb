import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {

    
    return (
      <nav className="header">
          <img className="header__logo" src="" alt="logo " src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"></img>
          <div className="header__Menu"> Menu </div>
          <div className="header__search">
              <input type="text" className="header__searchinput"  />
              <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__nav">
        
             <div className="header__option">
                <span className="header__optionLineOne"> IMDbPro | </span>
                
                </div>
                <Link to ="/">
             <div className="header__option">
                <span className="header__optionLineOne"> Home </span>
                
                </div>
                </Link>
