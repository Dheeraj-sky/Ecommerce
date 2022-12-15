// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./rightheader.css"
const Rightheader = ({Logclose,userlog}) => {
    const { account, setAccount } = useContext(LoginContext);
  return (
    <>
    <div className="rightheader">
        <div className="right_nav">
        {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )
          
          }
          { account ? <h3>Hello, {account.fname.toUpperCase()}</h3>:""
          }
        </div>
        <div className="nav_btn" onClick={()=>Logclose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop By category</NavLink>
            <Divider style={{ width: "100%", marginLeft: -20}} />
            <NavLink to="/">Today's Deal</NavLink>
            {
                account ? <NavLink to="/buynow">Your Order's</NavLink> :
                <NavLink to="/login">Your Order's</NavLink>
            }
            <Divider style={{ width: "100%", marginLeft: -20 }} />
            {/* <Divider/> */}
            <div className="flag">
                    <NavLink to="" style={{ marginTop: 14 }}>Settings</NavLink>
                    <img src="./india.png" alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                </div>
            {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={() => userlog()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : <NavLink to="/login">Sign in</NavLink>
                }
        </div>
    </div>
    </>
  )
}

export default Rightheader