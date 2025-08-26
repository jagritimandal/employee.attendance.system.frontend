import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/loginj';
import Dashboardj from './pages/dashboardj';
import IpManagementPagej from './pages/ipaddressj';
import Registerj from './pages/registerj';
import AttendancePagej from './pages/attendancej';
import AttendanceCalendarj from './pages/allattendancej';
import AttendanceByEmailj from './pages/attendancebyemailj';
import SalaryPagej from './pages/salaryj'; 
import SalarySearchj from './pages/salarybysearchj';
import LeavesPage from './pages/leavePage';
import SetupPage from './pages/setupPage';
import SalarySlipj from './pages/salaryslipj';
import Deductionj from './pages/deductionj';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/loginj" replace />} />
        <Route path="/registerj" element={<Registerj />} />
        <Route path="/loginj" element={<Login />} />
        <Route path="/dashboardj" element={<Dashboardj />} /> 
        <Route path="/allattendancej" element={<AttendanceCalendarj />} />
        <Route path="/attendancebyemailj" element={<AttendanceByEmailj />} />
        <Route path="/attendancej" element={<AttendancePagej />} />
        <Route path="/ipaddressj" element={<IpManagementPagej />} />
        <Route path="/salaryj" element={<SalaryPagej />} />
        <Route path="/salarybysearchj" element={<SalarySearchj />} />
        <Route path="/leaves" element={<LeavesPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/salaryslipj" element={<SalarySlipj />} />
        <Route path="/deductionj" element={<Deductionj/>} />
      </Routes>
    </Router>
  );
}

export default App;