import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Layout} from "./components/Layout";
import {AddTaskPage} from "./pages/AddTaskPage";
import {FirstPage} from "./pages/FirstPage";
import {InfoPage} from "./pages/InfoPage";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/new" element={<AddTaskPage/>}/>
                <Route path="/info" element={<InfoPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
