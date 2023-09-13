import React, {useState} from 'react';
import './TenantDashboard.css';
import Modal from '../Modal/Modal';

const TenantDashboard =({tenantData})=>{
    const [showEditEntry,setShowEditEntry]= useState(false)
    const [showAddEntry,setShowAddEntry]= useState(false)

    // Need to add functionalities for adding and editing tenant details 
    let dashboard =(
        <div className="container ">
        <span className="title">
            <span >Tenant list</span>
        </span>
       
        <table className="Tdashboard" >
            <thead>
                <tr>
                    <th>Apartment</th>
                    <th>Residents</th>
                    <th>Emails</th>
                    <th>Phone number</th>
                    <th> Util</th>
                </tr>                
            </thead>
            <tbody>
                {tenantData.map((data,idx)=> 
                    <tr key={idx}>
                        <td>{data.apt}</td>
                        <td className="tenantDetails">{data.tenants.join(', ')}</td>
                        <td className="tenantDetails">{data.email.join(', ')}</td>
                        <td className="tenantDetails">{data.phone}</td>

                        <td className="TdashboardUtils"> 
                            <button className="TDBBtn bg-green-400 hover:bg-green-500" onClick={()=>setShowAddEntry(true)}>Add</button>
                            <button className="TDBBtn bg-blue-400 hover:bg-blue-500" onClick={()=>setShowEditEntry(true)}>Edit</button>
                            {/* <button className="TDBBtn bg-red-400 hover:bg-red-500" onClick={()=>alert("cleared")}>Clear</button> */}
                        </td>
                    </tr>
                )}                
            </tbody>

        </table>
        

    </div>
    )

    let addTenantDetails=(
        <>
            <table>
                <tr>
                    <td className="text-right"><label className="m-2">Resident(s):</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44 border border-black"  /></td>  
                </tr>    
                <tr>
                    <td className="text-right"><label className="m-2">Email(s):</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44   border border-black" /></td>  
                </tr>  
                <tr>
                    <td className="text-right"><label className="m-2">Phone :</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44   border border-black" /></td>  
                </tr>  
            </table>        
        </>
    )
    let editTenantDetails=(
        <>
            <table>
                <tr>
                    <td className="text-right"><label className="m-2">Resident(s):</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44 border border-black"  /></td>  
                </tr>    
                <tr>
                    <td className="text-right"><label className="m-2">Email(s):</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44   border border-black" /></td>  
                </tr>  
                <tr>
                    <td className="text-right"><label className="m-2">Phone :</label></td>  
                    <td><input type="text" className="mx-0.5 my-2  w-44   border border-black" /></td>  
                </tr>  
            </table>  
        </>
    )
    return (<>
            {dashboard}

            {showEditEntry && <Modal 
            inputModal 
            handleModal={setShowEditEntry} 
            modalTitle="Edit Tenant Detail" 
            modalBody={editTenantDetails}
            clearInput={()=>{}}/>}

            {showAddEntry && <Modal 
            inputModal 
            handleModal={setShowAddEntry} 
            modalTitle="Add Tenant Detail" 
            modalBody={addTenantDetails}
            clearInput={()=>{}}/>}
            </>)
}

export default TenantDashboard;