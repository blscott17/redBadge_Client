// import * as React from 'react';
import React, { Component } from 'react';
import Auth from './components/Auth/index';
// import { SignUp } from './components/SignUpForm';

type sessionState = {
  sessionToken: string | null;
  isAdmin: string;
  firstname: string;
}

export default class App extends Component <{}, sessionState> {
  constructor (props:sessionState){
    super(props);

    this.state = {
      sessionToken: '',
      isAdmin: 'false',
      firstname: ''
    };
  }

  componentDidUpdate(){
    console.log('component updated')
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({sessionToken: newToken});
    console.log(newToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({sessionToken:''})
  }

  updateRole= (newRole: string)=> {
    localStorage.setItem('role', newRole);
    this.setState({isAdmin:newRole});
    console.log(newRole);
  }

  render() {
    return (
      <div className='App'>
      <Auth
      updateToken={this.updateToken}
      updateRole={this.updateRole}  
      //  <SignUp />
      />
      </div>
    );
  }
}

// export default App;



// import * as React from 'react';
// import Auth from './components/SignInUpContainer/index'; 
// // import { SignUp } from './components/SignUpForm';

// function App() {
//   return (
//     <Auth/> 
//   // <SignUp/>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Sitebar from './home/Navebar'; // Application - 4
// import Auth from './auth/Auth'; // Application - 9
// import WorkoutIndex from './workouts/WorkoutIndex';

// function App() {
//   const [sessionToken, setSessionToken] = useState(''); //1

//   useEffect(() => {
//     if (localStorage.getItem('token'));
//     setSessionToken(localStorage.getItem('token'));
//   }, []);

//   const updateToken = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setSessionToken(newToken);
//     console.log(sessionToken);
//   };

//   const clearToken = () => {
//     localStorage.clear();
//     setSessionToken();
//   };

//   const protectedViews = () => {
//     return sessionToken === localStorage.getItem('token') ? (
//       <WorkoutIndex token={sessionToken} />
//     ) : (
//       <Auth updateToken={updateToken} />
//     );
//   };
//   console.log(sessionToken);
//   // render method is here
//   return (
//     <div>
//       {/* Application - 5 */}
//       <Sitebar clickLogout={clearToken} />
//       {/* Parent Passing Down Props to the Children - 1.*/}
//       {protectedViews()}
//     </div>
//   );
// }

// export default App;


 













//-----------------------------------

// MOVED SignInUpContainer from './containers' to './components
// WHERE AUTH ususally sits, the code below works, So you can call the 
// import anything you want as long as you Mount the same name.
/*
import * as React from 'react';
import Auth from './components/SignInUpContainer/index'; 
// import { SignUp } from './components/SignUpForm';

function App() {
  return (
    <Auth/> 
  // <SignUp/>
  );
}

export default App;
*/
// import React from 'react';
// import SignInUpContainer from './containers';
// function App() {
//   return (
//     <div className="App">
//      <SignInUpContainer/>
//     </div>
//   );
// }


// export default App;
//-----------------------------------