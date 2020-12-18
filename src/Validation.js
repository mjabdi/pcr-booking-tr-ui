import * as EmailValidator from 'email-validator';

export default function ValidateStep (state,setState, step) 
  {
    var error = false;

    if (step === 0)
    {
      if (!state.bookingDate || !state.bookingDate.getTime())
      {
        setState(state => ({...state, bookingDateError : true}));
        error = true;
      }
    }
    else if (step === 1)
    {
      /// Validate time
      
      if (!state.bookingTime)
      {
        setState(state => ({...state, bookingTimeError : true}));
        error = true;
      }
    } else if (step === 2){
      ///validate Basic Info
      if (!state.gender)
      {
        setState(state => ({...state, genderError : true}));
        error = true;
      }
      if (!state.title)
      {
        setState(state => ({...state, titleError : true}));
        error = true;
      }
      if (!state.firstname || state.firstname.trim().length < 1)
      {
        setState(state => ({...state, firstnameError : true}));
        error = true;
      }
      if (!state.lastname || state.lastname.trim().length < 1)
      {
        setState(state => ({...state, lastnameError : true}));
        error = true;
      }
      if (!state.birthDate || state.birthDate.length !== 10)
      {
        setState(state => ({...state, birthDateError : true}));
        error = true;
      }
      if (!state.email || !EmailValidator.validate(state.email))
      {
        setState(state => ({...state, emailError : true}));
        error = true;
      }

      if (!state.retypeEmail || !EmailValidator.validate(state.retypeEmail) || state.email !== state.retypeEmail)
      {
        setState(state => ({...state, retypeEmailError : true}));
        error = true;
      }

      if (!state.emailConfirmed)
      {
        setState(state => ({...state, emailConfirmedError : true}));
        error = true;
      }

      if (!state.passportNumber || state.passportNumber.trim().length < 6)
      {
        setState(state => ({...state, passportNumberError : true}));
        error = true;
      }

      // if (!state.NHSNumber || state.NHSNumber.trim().length < 1)
      // {
      //   setState(state => ({...state, NHSNumberError : true}));
      //   error = true;
      // }

      if (!state.ethnicity || state.ethnicity.trim().length < 1)
      {
        setState(state => ({...state, ethnicityError : true}));
        error = true;
      }

      if (!state.phone || state.phone.trim().length < 6)
      {
        setState(state => ({...state, phoneError : true}));
        error = true;
      }

    }
    else if (step === 3){
      ///validate Address Info
   
      if (!state.postCode || state.postCode.trim().length < 5)
      {
        setState(state => ({...state, postCodeError : true}));
        error = true;
      }
      if (!state.address || state.address.trim().length < 10)
      {
        setState(state => ({...state, addressError : true}));
        error = true;
      }    

      if (state.selfIsolate)
      {
        if (!state.postCodeSI || state.postCodeSI.trim().length < 5)
        {
          setState(state => ({...state, postCodeSIError : true}));
          error = true;
        }
        if (!state.addressSI || state.addressSI.trim().length < 10)
        {
          setState(state => ({...state, addressSIError : true}));
          error = true;
        }    
      }

      if (!state.arrivalDate || !validateDate(state.arrivalDate.trim()))
      {
        setState(state => ({...state, arrivalDateError : true}));
        error = true;
      }
      if (!state.flightNumber || state.flightNumber.trim().length < 1)
      {
        setState(state => ({...state, flightNumberError : true}));
        error = true;
      }
      if (!state.lastDepartedDate || !validateDate(state.lastDepartedDate.trim()))
      {
        setState(state => ({...state, lastDepartedDateError : true}));
        error = true;
      }
      if (!state.travellingFrom || state.travellingFrom.trim().length < 1)
      {
        setState(state => ({...state, travellingFromError : true}));
        error = true;
      }




      if (!error){
        setState(state => ({...state, proceedToSubmit: false}));
      }
    }

      return !error;   
  }


  const validateDate = (str) =>
  {
    var error = false;
    if (!str || str.length !== 10)
    {
      error = true;
    }

    str = str.replace('/','-');
    str = str.replace('/','-');


    try
    {
      
      const result = /^\d{2}-\d{2}-\d{4}$/.test(str);
      if (!result)
      {
         error = true;
      }

      const year = parseInt(str.substr(6,4));
      const month = parseInt(str.substr(3,2));
      const day = parseInt(str.substr(0,2));

      if (year < 1900)
      {
         error = true;
      }

      if (month < 1 || month > 12)
      {
        error = true;
      }        

      if (day > 31)
      {
        error = true;
      }

    }catch(err)
    {
      error = true;
    }
    return !error;
  }
