import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import GlobalState from './GlobalState';
import * as EmailValidator from 'email-validator';

import {
    DatePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PersonsBox from './PersonsBox';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import AntiBodyComponent from './AntiBodyComponent';

import { format, addMinutes } from 'date-fns';
import dateformat from 'dateformat';

import { enGB, } from 'date-fns/locale'
import DateField from './DateField';


class UTCUtils extends DateFnsUtils {
 
  locale = enGB;
  // format(date, formatString) {
  //   return format(new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000 ), formatString,enGB);
  // }

  // getCalendarHeaderText(date){
  //   return dateformat(date, 'mmmm yyyy');
  // }

  // getDayText(date)
  // {
  //   return dateformat(date, 'd');
  // }

}


const useStyles = makeStyles((theme) => ({
    formControl: {
      textAlign: "left"
    },

    FormTitle:
    {
      marginTop : "20px",
      marginBottom : "20px",
    },
    Box:{
      backgroundColor : "#f1f1f1",
      padding: "10px",
      //maxWidth: "300px",
      borderRadius  : "10px",
      boxShadow: "2px 4px #ddd",
      marginTop: "5px",
      marginBottom : "15px",
      textAlign: "left"
      
    
    },

  }));

export default function InformationForm() {
    const classes = useStyles();
    const [state, setState] = React.useContext(GlobalState);
    const [birthDate, setBirthDate] = React.useState(state.birthDate ?? null);
    const [firstname, setFirstname] = React.useState(state.firstname ?? '');
    const [lastname, setLastname] = React.useState(state.lastname ?? '');
    const [email, setEmail] = React.useState(state.email ?? '');
    const [retypeEmail, setRetypeEmail] = React.useState(state.retypeEmail ?? '');
    
    const [gender, setGender] = React.useState(state.gender ?? '');
    const [title, setTitle] = React.useState(state.title ?? '');

    const [emailConfirmed, setEmailConfirmed] = React.useState(state.emailConfirmed ?? false);
    const [passportConfirmed, setPassportConfirmed] = React.useState(state.passportConfirmed ?? false);




    const [passportNumber, setPassportNumber] = React.useState(state.passportNumber ?? '');
    
    const [NHSNumber, setNHSNumber] = React.useState(state.NHSNumber ?? '');
    const [ethnicity, setEthnicity] = React.useState(state.ethnicity ?? '');

    const [phone, setPhone] = React.useState(state.phone ?? '');

    const [covidVaccine, setCovidVaccine] = React.useState(state.covidVaccine ?? '');
    const covidVaccineChanged = (event) => {
      setCovidVaccine(event.target.value);
      setState(state => ({...state, covidVaccine: event.target.value}));
      setState(state => ({...state, covidVaccineError : false}));
    };

    
   

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

    const NHSNumberChanged = (event) =>
    {
        setNHSNumber(event.target.value);
        setState(state => ({...state, NHSNumber : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 0)
        {
          setState(state => ({...state, NHSNumberError : false}));
        }
    }

    const ethnicityChanged = (event) =>
    {
        setEthnicity(event.target.value);
        setState(state => ({...state, ethnicity : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 0)
        {
          setState(state => ({...state, ethnicityError : false}));
        }
    }

    const phoneChanged = (event) =>
    {
        setPhone(event.target.value);
        setState(state => ({...state, phone : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 6)
        {
          setState(state => ({...state, phoneError : false}));
        } 
    }

  const passportNumberChanged = (event) =>
  {
      setPassportNumber(event.target.value);
      setState(state => ({...state, passportNumber : event.target.value }));
      if (event.target.value && event.target.value.trim().length >= 6)
      {
        setState(state => ({...state, passportNumberError : false}));
      }
  }

  const passportConfirmedChanged = (event) => {
    setPassportConfirmed(event.target.checked);
    setState(state => ({...state, passportConfirmed: event.target.checked}));
    setState(state => ({...state, passportConfirmedError: false}));
};

  


    const emailConfirmedChanged = (event) => {
      setEmailConfirmed(event.target.checked);
      setState(state => ({...state, emailConfirmed: event.target.checked}));
      setState(state => ({...state, emailConfirmedError: false}));
  };

    const titleChanged = (event) => {
            setTitle(event.target.value);
            setState(state => ({...state, title: event.target.value}));
            setState(state => ({...state, titleError : false}));
        };

    const genderChanged = (event) => {
            setGender(event.target.value);
            setState(state => ({...state, gender: event.target.value}));
            setState(state => ({...state, genderError : false}));
        };

    const birthDateChanged = (dateStr) =>
    {
      // if (date)
      // {
      //   date = new Date(date.getFullYear(), date.getMonth(), date.getDate(),0,0,0,0);
      

      //   date = new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000));
      //   console.log(date);
      // }
       console.log(dateStr);   

        setBirthDate(dateStr);
        setState(state => ({...state, birthDate: dateStr}));
        setState(state => ({...state, birthDateError : false}));
    }  

    const firstnameChanged = (event) =>
    {
        setFirstname(event.target.value);
        setState(state => ({...state, firstname : event.target.value }));
        if (event.target.value && event.target.value.trim().length > 0)
        {
          setState(state => ({...state, firstnameError : false}));
        }
    }

    const lastnameChanged = (event) =>
    {
        setLastname(event.target.value);
        setState(state => ({...state, lastname : event.target.value }));
        if (event.target.value && event.target.value.trim().length > 0)
        {
          setState(state => ({...state, lastnameError : false}));
        }
    }

    const emailChanged = (event) =>
    {
        setEmail(event.target.value);
        setState(state => ({...state, email : event.target.value }));
        if (event.target.value && EmailValidator.validate(event.target.value))
        {
          setState(state => ({...state, emailError : false}));
        }
    }

    
    const retypeEmailChanged = (event) =>
    {
        setRetypeEmail(event.target.value);
        setState(state => ({...state, retypeEmail : event.target.value }));
        if (event.target.value && EmailValidator.validate(event.target.value))
        {
          setState(state => ({...state, retypeEmailError : false}));
        }
    }

  return (


    <React.Fragment>

      {/* <AntiBodyComponent/> */}

      <PersonsBox/>

    {state.persons.length === 0 &&
          <Typography className={classes.FormTitle} variant="h6" gutterBottom>
              Enter your Info
          </Typography>
    }

    {state.persons.length > 0 &&
          <Typography className={classes.FormTitle} variant="h6" gutterBottom>
              Enter your Info
          </Typography>
    }

      
   

      <Grid container spacing={3} alignItems="baseline">

      <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl} fullWidth required>
                <InputLabel id="gender-label-id">Gender</InputLabel>
                <Select
                    error={state.genderError ? true : false}
                    fullWidth
                    labelId="gender-label-id"
                    id="gender-id"
                    value={gender}
                    onChange={genderChanged}
                >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl} fullWidth required>
                <InputLabel id="title-label-id">Title</InputLabel>
                <Select
                    error={state.titleError ? true : false}
                    fullWidth
                    labelId="title-label-id"
                    id="title-id"
                    value={title}
                    onChange={titleChanged}
                >
                    <MenuItem value={'Mr'}>Mr</MenuItem>
                    <MenuItem value={'Mrs'}>Mrs</MenuItem>
                    <MenuItem value={'Miss'}>Miss</MenuItem>
                    <MenuItem value={'Ms'}>Ms</MenuItem>
                    <MenuItem value={'Dr'}>Dr</MenuItem>
                </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
                    error={state.firstnameError ? true : false}
                    required id="firstName" label="First Name" 
                    fullWidth autoComplete="given-name" 
                    value = {firstname}
                    onChange = {firstnameChanged} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
         <TextField 
                    error={state.lastnameError ? true : false}
                    required id="lastName" label="Last Name" 
                    fullWidth autoComplete="family-name" 
                    value = {lastname}
                    onChange = {lastnameChanged} 
        />  
        </Grid>
        <Grid item xs={12} md={12}>
        {/* <MuiPickersUtilsProvider utils={UTCUtils} locale={enGB}>
            <DatePicker 
                        disableOpenPicker = {true}
                        error={state.birthDateError ? true : false}
                        
                        fullWidth
                        required
                        variant="inline"
                        label="Date of Birth"
                        format="dd/MM/yyyy"
                        disableFuture
                      
                        helperText="dd/MM/yyyy"
                        value={birthDate}
                        onChange={birthDateChanged}
                        />
             </MuiPickersUtilsProvider> */}

             <DateField
                error={state.birthDateError}
                title="Date of Birth"
                value={birthDate}
                dateChanged={birthDateChanged}
             >

             </DateField>
              

        </Grid>
        <Grid item xs={12} md={6}>
             <TextField
                        error={state.emailError ? true : false}
                        required id="email" label="Email Address" 
                        fullWidth autoComplete="email"  type="email"
                        value = {email}
                        onChange = {emailChanged} 
                        helperText = 'This email address is where you will receive your results. Please tick the box below to confirm that this is a private email address to which you are happy for us to send your results.'
             />  
        </Grid>

        <Grid item xs={12} md={6}>
             <TextField
                        error={state.retypeEmailError ? true : false}
                        required id="retypeEmail" label="Retype Email Address" 
                        fullWidth autoComplete="none"  type="email"
                        value = {retypeEmail}
                        onChange = {retypeEmailChanged} 
                        // helperText = 'This email address is where you will receive your results. Please tick the box below to confirm that this is a private email address to which you are happy for us to send your results.'
             />  
        </Grid>

        <Grid item xs={12} className={classes.formControl} >
          <FormControlLabel className={classes.formControl}  style={ {color: state.emailConfirmedError ? "red" : ''}} 
            control={<Checkbox className={classes.formControl} style={ {color: state.emailConfirmedError ? "red" : ''}}  color="secondary" name="emailConfirmCheckBox" checked={emailConfirmed} onChange={emailConfirmedChanged} />}
             label={<span style={{ fontSize: '0.8rem' }}>{`I confirm that this is a private email address to which I am happy for you to send my results.`} </span>}
          />
        </Grid>

        <Grid item xs={12} md={6}>
             <TextField 
                        error={state.phoneError ? true : false}
                        required id="phone" label="Telephone Number" 
                        fullWidth autoComplete="tel" 
                        value = {phone}
                        onChange = {phoneChanged} 
             />  
        </Grid>

        <Grid item  xs={12} md={6}>
        
             <TextField 
                        error={state.passportNumberError ? true : false}
                        required id="passport" label="Passport Number" 
                        fullWidth autoComplete="none" 
                        value = {passportNumber}
                        onChange = {passportNumberChanged} 
             />  
            
        </Grid>

        <Grid item  xs={12} md={6}>
        
            <TextField 
                      error={state.NHSNumberError ? true : false}
                      id="NHSNumber" label="NHS Number (optional)" 
                      helperText="(if known and applicable)" 
                      fullWidth autoComplete="none"  
                      value = {NHSNumber}
                      onChange = {NHSNumberChanged} 
            />        
       </Grid>

       <Grid item  xs={12} md={6}>
        
            <TextField 
                      error={state.ethnicityError ? true : false}
                      required id="ethnicity" label="Ethnicity" 
                      fullWidth autoComplete="none"  
                      value = {ethnicity}
                      onChange = {ethnicityChanged} 
            />        
      </Grid>

      <Grid item xs={12}>
            <FormControl className={classes.formControl} fullWidth required>
                <InputLabel id="vaccine-label-id">Have you had your Covid Vaccine?</InputLabel>
                <Select
                    error={state.covidVaccineError ? true : false}
                    fullWidth
                    labelId="vaccine-label-id"
                    id="vaccine-id"
                    label="Have you had your Covid Vaccine?"
                    value={covidVaccine}
                    onChange={covidVaccineChanged}
                >
                    <MenuItem value={'NO'}>NO</MenuItem>
                    <MenuItem value={'YES 1 Dose'}>YES 1 Dose</MenuItem>
                    <MenuItem value={'YES 2 Dose'}>YES 2 Dose</MenuItem>
                </Select>
            </FormControl>
        </Grid>


        <Grid item xs={12} className={classes.formControl} >
          <FormControlLabel className={classes.formControl} style={{ color: state.emailConfirmedError ? "red" : '' }}
            control={<Checkbox className={classes.formControl} style={{ color: state.emailConfirmedError ? "red" : '' }} color="secondary" name="emailConfirmCheckBox" checked={emailConfirmed} onChange={emailConfirmedChanged} />}
            label={<span style={{ fontSize: '0.8rem' }}>{`I confirm that this is a private email address to which I am happy for you to send my results.`} </span>}
          />
        </Grid>

        <Grid item xs={12} className={classes.formControl}>
          <FormControlLabel className={classes.formControl} style={{ color: state.passportConfirmedError ? "red" : '' }}
            control={<Checkbox className={classes.formControl} style={{ color: state.passportConfirmedError ? "red" : '' }} color="secondary" name="emailConfirmCheckBox" checked={passportConfirmed} onChange={passportConfirmedChanged} />}
            label={<span style={{ fontSize: '0.8rem' }}>{`As part of testing requirements outlined by the Department of Health and Social Services, we will need to check your identity before conducting your test. Please tick to confirm that you will bring your passport or a copy to your test appointment.`} </span>}
          />
        </Grid>


        <Grid item xs={12} className={classes.formControl} >
           <p>{'* Please take care when entering your information, and double check that everything entered on this form is correct.'}</p>
        </Grid>

      
     
      </Grid>
    
      
    </React.Fragment>
  );
}

