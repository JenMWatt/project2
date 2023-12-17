import React from 'react'


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