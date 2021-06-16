import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search'
import HomeICon from "@material-ui/icons/Home"
import FlagIcon  from "@material-ui/icons/Flag";
import  SubscriptionsOutlinedIcon  from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon  from "@material-ui/icons/Storefront";
import  SupervisedUserCircleIcon  from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '.@material-ui/icons/Add';
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import EpandMoreICon from '@material-ui/icons/ExpandMore';

function header() {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
                />
                <div className="header_input">
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>

            <div className="header_middile">
                <div className='header_option'>
                    <HomeICon fontSize="large" />
                </div>
                <div className='header_option'>
                    <FlagIcon fontSize="large" />
                </div>
                
                <div className='header_option'>
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                
                <div className='header_option'>
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                
                
            </div>

            <div className="header_right">
                <div className="headre_info">
                    <Avatar />
                    <h4>Libin v Baby</h4>
                </div>
                <IconButton>
                    <AddICon />
                </IconButton>
                
            </div>
        </div>
    );
}

export default header;
