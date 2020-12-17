import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
//import { useStateValue } from './StateProvider'

function Header() {
    return (
        // BEM convention
        <div className = "header">
            Hi from header section
            <div className = "header__left">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                 alt = "facebook_logo" />
                <div className = "header__input">
                    <input type = "text" placeholder = "search facebook"
                     className = "header__input__text" />
                </div>
            </div>

            <div className = "header__middle">
            <div className = "header__options header__options--active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <FlagIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SubscriptionsOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <StorefrontOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div> 
            </div>

            <div className = "header__right">
                
            </div>

        </div>

    )
}

export default Header