import React from 'react';
import '../pages/App.scss';
import searchIcon from '../assets/images/searchIcon.png';
import notificationIcon from '../assets/images/notificationIcon.png';
import dropdownIcon from '../assets/images/dropDownIcon.png';
import userPics from '../assets/images/userPics.png';

export default function Header() {
  return (
    <div className="navbar">
      <div className="leftDetails">
        <span className="searchContainer">
          <input
            type="text"
            className="searchInput"
            placeholder="search for anything"
          />
        </span>
        <button className='searchBtn'>
          <img src={searchIcon} alt="magnifying glass" />
        </button>
      </div>
      <div className="userMenu">
        <ul>
          <li>Docs</li>
          <li>
            <img className='notificationIcon' src={notificationIcon} alt="notification icon" />
          </li>
        </ul>
        <span className="userDetails">
          <img className='userPic' src={userPics} alt="picture" />
          <p>username</p>
          <img className='arrowDown' src={dropdownIcon} alt="arrow down" />
        </span>
      </div>
    </div>
  );
}
