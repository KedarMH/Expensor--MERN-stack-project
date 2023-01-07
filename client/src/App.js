import React, { useEffect } from 'react'
import AppBar from './components/AppBar.js'
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './store/auth.js';

function App() {
  const auth = useSelector(state => state.auth)
  console.log(auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])


  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
