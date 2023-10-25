// feels complete ?

// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container'; 

import Heading from "./components/Heading";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import LoginForm, { Login } from "./components/forms/LoginForm";
import UserForm from "./components/forms/UserForm";
import Logout from "./components/Logout";
import PlanningPage from "./pages/PlanningPage";
import StartPlanningPage from './pages/StartPlanningPage.js';
import Sidebar from "../src/components/SideNavBar/Sidebar.jsx";
import { initFirebase } from './firebaseUtils';

initFirebase();

function App(): JSX.Element {

  return (
    <Container style={{ maxWidth: '100%', padding: 0}}>
      <Heading />
      <Container style={{display: 'inline-flex', padding: 0, maxWidth: '100%'}}>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/register' element={<FormPage><UserForm edit={false} /></FormPage>}/>
            <Route path='/login' element={<FormPage><LoginForm /><Login /></FormPage>}/>
            <Route path='/logout' element={<Logout />}/>
            {/* <Route path='/plan' element={<PlanningPage />}/> */}
            <Route path='/plan' element={<StartPlanningPage />}/>
            <Route path='*' element={<Navigate to='/' />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  )
}

export default App
