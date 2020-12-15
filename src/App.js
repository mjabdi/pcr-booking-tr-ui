import './App.css';
import Checkout from './checkout';
import WelcomeForm from './WelcomeForm';
import AgreementForm from './AgreementForm';
import GlobalState from './GlobalState'; 
import React from 'react';
import LoginForm from './LoginForm';

function App() {
  const [state, setState] = React.useState({activeStep : 0, bookingDate: null, persons: []});
  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">

      
         {!state.getStarted && !state.login && ( <LoginForm/> )}
        {!state.getStarted && state.login && ( <WelcomeForm/> )}
        {state.getStarted && !state.agreed && ( <AgreementForm/>  )}
        {state.getStarted && state.agreed  && ( <Checkout/>  )}

       
      </div>
    </GlobalState.Provider>
  );
}

export default App;
