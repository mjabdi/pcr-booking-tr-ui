import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GlobalState from './GlobalState';
import PersonsBox from './PersonsBox';

const useStyles = makeStyles((theme) => ({
    formControl: {
      textAlign: "justify",
    },

    FormTitle:
    {
      marginTop : "20px",
      marginBottom : "20px",
    }

  }));

export default function AddressForm() {
    const classes = useStyles();
    const [state, setState] = React.useContext(GlobalState);
    
    const [sameAddress, setSameAddress] = React.useState(false);
    
    const sameAddressChanged = (event) =>
    {
      setSameAddress(event.target.checked);
    }

   
    const [postCode, setPostCode] = React.useState(state.postCode ?? '');
    const [address, setAddress] = React.useState(state.address ?? '');

    const [postCodeSI, setPostCodeSI] = React.useState(state.postCodeSI ?? '');
    const [addressSI, setAddressSI] = React.useState(state.addressSI ?? '');

    const [selfIsolate, setSelfIsolate] = React.useState(state.selfIsolate ?? false);

    const [arrivalDate, setArrivalDate] = React.useState(state.arrivalDate ?? '');
    const [flightNumber, setFlightNumber] = React.useState(state.flightNumber ?? '');
    const [lastDepartedDate, setLastDepartedDate] = React.useState(state.lastDepartedDate ?? '');
    const [travellingFrom, setTravellingFrom] = React.useState(state.travellingFrom ?? '');

  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);


    useEffect( () => {

      if (state.persons && state.persons.length > 0)
      {
        setSameAddress(true);
      }

    } , [state.persons])



    const selfIsolateChanged = (event) =>
    {
      setSelfIsolate(event.target.checked);
      setState(state => ({...state, selfIsolate : event.target.checked}));
    }

    const postCodeChanged = (event) =>
    {
        setPostCode(event.target.value);
        setState(state => ({...state, postCode : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 5)
        {
          setState(state => ({...state, postCodeError : false}));
        }
    }

    const addressChanged = (event) =>
    {
        setAddress(event.target.value);
        setState(state => ({...state, address : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 10)
        {
          setState(state => ({...state, addressError : false}));
        }
    }

    const postCodeSIChanged = (event) =>
    {
        setPostCodeSI(event.target.value);
        setState(state => ({...state, postCodeSI : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 5)
        {
          setState(state => ({...state, postCodeSIError : false}));
        }
    }

    const addressSIChanged = (event) =>
    {
        setAddressSI(event.target.value);
        setState(state => ({...state, addressSI : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 10)
        {
          setState(state => ({...state, addressSIError : false}));
        }
    }

    const arrivalDateChanged = (event) =>
    {
        setArrivalDate(event.target.value);
        setState(state => ({...state, arrivalDate : event.target.value }));
        if (event.target.value && event.target.value.trim().length === 10)
        {
          setState(state => ({...state, arrivalDateError : false}));
        }
    }
    const flightNumberChanged = (event) =>
    {
        setFlightNumber(event.target.value);
        setState(state => ({...state, flightNumber : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 1)
        {
          setState(state => ({...state, flightNumberError : false}));
        }
    }
    const lastDepartedDateChanged = (event) =>
    {
        setLastDepartedDate(event.target.value);
        setState(state => ({...state, lastDepartedDate : event.target.value }));
        if (event.target.value && event.target.value.trim().length === 10)
        {
          setState(state => ({...state, lastDepartedDateError : false}));
        }
    }
    const travellingFromChanged = (event) =>
    {
        setTravellingFrom(event.target.value);
        setState(state => ({...state, travellingFrom : event.target.value }));
        if (event.target.value && event.target.value.trim().length >= 1)
        {
          setState(state => ({...state, travellingFromError : false}));
        }
    }




  return (
    <React.Fragment>

      {/* <AntiBodyComponent/> */}
      
      <PersonsBox/>

      {state.persons.length === 0 &&
          <Typography className={classes.FormTitle} variant="h6" gutterBottom>
              {`Enter your Address & Flight info`} 
          </Typography>
       }

      {state.persons.length > 0 &&
            <Typography className={classes.FormTitle} variant="h6" gutterBottom>
                 {`Enter your Address & Flight info`} 
            </Typography>
      }



  

      <Grid container spacing={3} alignItems="baseline">

      <Grid hidden={ !(state.persons && state.persons.length > 0)} item xs={12} className={classes.formControl} >
          <FormControlLabel className={classes.formControl} 
            control={<Checkbox className={classes.formControl}  color="secondary" name="sameAddress" checked={sameAddress} onChange={sameAddressChanged} />}
             label={<span style={{ fontSize: '0.8rem' }}>{`Use the Same Address & Flight Info`} 
             </span>}
          />
        </Grid>



        <Grid item xs={12}>
             <TextField 
                        error={state.postCodeError ? true : false}
                        disabled = {sameAddress}
                        required id="postCode" label="Post Code" 
                        fullWidth autoComplete="postal-code"
                        value = {postCode}
                        onChange = {postCodeChanged} 
             />  
        </Grid>
        <Grid item xs={12}>
             <TextField 
                        error={state.addressError ? true : false}
                        required id="address" label="Address" 
                        helperText = "This is the address you intend to self-isolate, if not please check the below "
                        disabled = {sameAddress}
                        multiline rowsMax={2} 
                        fullWidth autoComplete="street-address" 
                        value = {address}
                        onChange = {addressChanged} 
             />  
        </Grid>

        <Grid item xs={12} className={classes.formControl} >
          <FormControlLabel className={classes.formControl} disabled={sameAddress}
            control={<Checkbox className={classes.formControl} color="secondary" name="emailConfirmCheckBox" checked={selfIsolate} onChange={selfIsolateChanged} />}
             label={<span style={{ fontSize: '1rem' }}>{`I intend to self-isolate at a different address`} </span>}
          />
        </Grid>
        
        { selfIsolate && (
            <React.Fragment>
                      <Grid item xs={12}>
                      <TextField 
                                  error={state.postCodeSIError ? true : false}
                                  disabled = {sameAddress}
                                  required id="postCodeSI" label="Self-Isolate Post Code" 
                                  fullWidth autoComplete="postal-code"
                                  value = {postCodeSI}
                                  onChange = {postCodeSIChanged} 
                      />  
                      </Grid>
                      <Grid item xs={12}>
                      <TextField 
                                  error={state.addressSIError ? true : false}
                                  required id="addressSI" label="Self-Isolate Address" 
                                  disabled = {sameAddress}
                                  multiline rowsMax={2} 
                                  fullWidth autoComplete="street-address" 
                                  value = {addressSI}
                                  onChange = {addressSIChanged} 
                      />  
                      </Grid>

                </React.Fragment>

        )}

          <Grid item xs={12}>
                <TextField 
                            error={state.arrivalDateError ? true : false}
                            disabled = {sameAddress}
                            required id="arrivalDate" label="Arrival Date" 
                            helperText = "Date of your arrival in the UK (dd/MM/YYYY)"
                            fullWidth autoComplete="none"
                            value = {arrivalDate}
                            placeholder= "dd/mm/yyyy"
                            onChange = {arrivalDateChanged} 
                />  
            </Grid>

            <Grid item xs={12}>
                <TextField 
                            error={state.flightNumberError ? true : false}
                            disabled = {sameAddress}
                            required id="flightNumber" label="Flight Number" 
                            helperText = "Your coach number, flight number or vessel name (as appropriate)"
                            fullWidth  autoComplete="none"
                            value = {flightNumber}
                            onChange = {flightNumberChanged} 
                />  
            </Grid>

            <Grid item xs={12}>
                <TextField 
                            error={state.lastDepartedDateError ? true : false}
                            disabled = {sameAddress}
                            placeholder= "dd/mm/yyyy"
                            
                            required id="lastDepartedDate" label="Last Departed Date" 
                            helperText = "The date on which you last departed from or transited through a non-exempt country or territory, or a non-exempt region of a country or territory ‒ a destination not on the travel corridors list"
                            fullWidth autoComplete="none"
                            value = {lastDepartedDate}
                            onChange = {lastDepartedDateChanged} 
                />  
            </Grid>

            
            <Grid item xs={12}>
                <TextField 
                            error={state.travellingFromError ? true : false}
                            disabled = {sameAddress}
                            required id="travellingFrom" label="Travelling from" 
                            helperText = "The country or territory you were travelling from when you arrived in the UK, and any country or territory you transited through as part of that journey"
                            fullWidth  autoComplete="none"
                            value = {travellingFrom}
                            onChange = {travellingFromChanged} 
                />  
            </Grid>



       
   
      </Grid>
    
      
    </React.Fragment>
  );
}

