import './App.css';
import Checkout from './checkout';
import WelcomeForm from './WelcomeForm';
import AgreementForm from './AgreementForm';
import GlobalState from './GlobalState'; 
import React from 'react';
import LoginForm from './LoginForm';
import BookService from './services/BookService';

const getPathId = () =>
{
  let urlElements = window.location.pathname.split('/');
  if (urlElements.length === 2)
  {
    return urlElements[1];
  }
  return null;  
}

function App() {
  const [state, setState] = React.useState({activeStep : 0, bookingDate: null, persons: []});

  React.useEffect(() => {
    
    const bookingId = getPathId()
   
    if (bookingId)
    {
      BookService.getBookingById(bookingId).then(res => {
        if (res.data)
        {
          const booking = res.data
          setState(state => ({...state, firstname : booking.forename }))
          setState(state => ({...state, lastname : booking.surname }))
          setState(state => ({...state, email : booking.email }))
          setState(state => ({...state, retypeEmail : booking.email }))
          setState(state => ({...state, gender : booking.gender }))
          setState(state => ({...state, title : booking.title }))
          setState(state => ({...state, birthDate : booking.birthDate }))
          setState(state => ({...state, passportNumber : booking.passportNumber || '' }))
          setState(state => ({...state, phone : booking.phone }))
          setState(state => ({...state, postCode : booking.postCode }))
          setState(state => ({...state, address : booking.address }))
          setState(state => ({...state, NHSNumber : booking.NHSNumber || '' }))
          setState(state => ({...state, ethnicity : booking.ethnicity || '' }))
      
        }
      }).catch(err => {
        console.error(err)
      })
      
    }

  }, [])


  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">

      
         {/* {!state.getStarted && !state.login && ( <LoginForm/> )} */}
        {/* {!state.getStarted && state.login && ( <WelcomeForm/> )} */}
        {!state.getStarted && ( <WelcomeForm/> )}
        {state.getStarted && !state.agreed && ( <AgreementForm/>  )}
        {state.getStarted && state.agreed  && ( <Checkout/>  )}

       
      </div>
    </GlobalState.Provider>
  );
}

export default App;
