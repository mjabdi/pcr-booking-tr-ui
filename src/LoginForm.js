import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GlobalState from './GlobalState';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import HttpsIcon from '@material-ui/icons/Https';

import {BrowserView, MobileView, isMobile} from 'react-device-detect';

import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { Grid, TextField } from '@material-ui/core';

import logoImage from './images/logo.png';

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import faq from './FAQ';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="#">
           <strong> Medical Express Clinic </strong> 
      </Link>{isMobile ? ' ' : ' All rights reserved.' }
   
       
 
     
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#fff",
    color: "#00a1c5",
    alignItems: 'center',
  },

  logo: {
    maxWidth: 160,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

  bold: {
    fontWeight: "800",
    padding: "5px"
  },

  doneImage: {
    width: "240px",
    height: "150px",
    margin: "20px"
  },

  logoImage: {
    width: "40px",
    height: "40px",
    marginLeft: "0px",
    
  },

  privacyButton: {
    marginBottom : "20px",
    width: "115px"
  },

  faqButton: {
    marginBottom : "20px",
    marginLeft : "10px",
    backgroundColor : "#2f942e",
    "&:hover": {
      background: "green",
      color: "#fff"
    },
    textDecoration : "none !important",
    width: "115px"

  },

  textContent : {
      color : "#666f77",
      fontSize : "1.1rem",
      textAlign: "justify",
      paddingLeft: "30px",
      paddingRight: "30px",
      lineHeight: "2.2em",
      fontWeight : "400"
  },

  textContentMobile : {
    color : "#666f77",
    fontSize : "0.9rem",
    textAlign: "justify",
    paddingLeft: "30px",
    paddingRight: "30px",
    lineHeight: "2.2em",
    fontWeight : "400"
},

  getStartedButton: {
      marginTop : "10px",
      marginBottom : "10px",

  },

  AirIcon : {
      marginRight : "10px",
      fontSize: "32px"
  }

}));




export default function LoginForm() {
  const [state, setState] = React.useContext(GlobalState);
  const classes = useStyles();

  const [password, setPassword] = useState('');

  const passwordChanged = (event) =>
  {
      setPassword(event.target.value);
  }

  const login = () =>
  {
      if (password === 'AAAA') {
          setState(state => ({...state, login : true}));
      }
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <div style={{marginTop: "200px"}}>

      <TextField 
                   
                   id="password" label="Password" 
                   autoComplete="none" 
                   value = {password}
                   onChange = {passwordChanged} 
         />

         <div style={{marginTop: "20px"}}>

         <Button color='primary' onClick={login}>
             Enter
         </Button>

         </div>




      </div>

    
       


    </React.Fragment>
  );
}

