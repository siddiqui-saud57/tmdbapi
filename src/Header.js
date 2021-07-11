import React from 'react';
import './Header.css';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        
        <div className="Header">
            
            <div className="header_icons">
                
                <div className="header_icon header_icon--active">
                <HomeIcon />
                <p>Home</p>
                </div>

                <div className="header_icon">
                <FlashOnIcon />
                <p>Trending</p>
                </div>
                <div className="header_icon">
                <LiveTvIcon />
                <p>Verified</p>
                </div>
                <div className="header_icon">
                <VideoLibraryIcon />
                <p>Collections</p>
                </div>
                <div className="header_icon">
                <SearchIcon />
                <p>Search</p>
                </div>
                <div className="header_icon">
                <PersonOutlineIcon />
                <p>account</p>
                </div>
            </div>
            <img src="https://cdn-images-1.medium.com/max/208/1*I-RzA2sopZvV3P3pxnGxxQ@2x.png" alt=""/>
        </div>
    )
}

export default Header