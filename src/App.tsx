import React from 'react';
import { Routes, Route } from 'react-router-dom'

import {Layout} from "./components/Layout";
import {AddTaskPage} from "./pages/AddTaskPage";
import {FirstPage} from "./pages/FirstPage";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/new" element={<AddTaskPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
