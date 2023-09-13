
import './App.css';
import { Routes,Route } from 'react-router-dom';
import PackageDashboard from './PackageDashboard/PackageDashboard';
import mockData from './mockData.json';
import TntData from './mockTenant.json';
import React, {useState,useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import TenantDashboard from './TenantDashboard/TenantDashboard';
import Home from './Home/Home';

function App() {
  const [pkgData,setPkgData] = useState([]);
  const [tenantData,setTenantData] = useState([]);
  useEffect(()=>{
    setPkgData(mockData);
    setTenantData(TntData)
  },[])
  return (
    <div className="App">
        <nav >
          <Navbar navLinks={[["Home","home"],["Package Managment","package-management"],["Tenant Management","tenant-management"]]}/>
        </nav>
        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/package-management" element={<PackageDashboard deliveryData={pkgData}/>}/>
            <Route path="/tenant-management" element={<TenantDashboard tenantData={tenantData}/>}/>
          </Routes>
        
    </div>
  );
}

export default App;
