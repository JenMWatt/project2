import React from 'react'
import Login from './components/Signin.component';
import SignUp from './components/Signup.component';

function App() {
  return (
    <Router>
      <div className="App">

        <div className="auth-wrap">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/Sign-in" element={<Login />} />
              <Route path="/Sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App