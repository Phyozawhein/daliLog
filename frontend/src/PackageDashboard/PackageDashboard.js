import React,{useState} from 'react';
import Card from '../Card/Card';
import './PackageDashboard.css';
import plus from '../assets/img/plus.svg';
import bell from '../assets/img/bell.svg';
import Modal from '../Modal/Modal';
const PackageDashboard = ({deliveryData})=>{
    const [showAddEntry,setShowAddEntry] = useState(false);
    const [showNotify,setShowNotify] = useState(false);
    const [editPkg,setEditPkg] = useState(0)
    const [focusApt,setFocusApt]= useState("")
    let dashboard =(
        <div className="container ">
        <span className="title">
            <span >Package list</span>
            <button className="DBBtn  hover:bg-green-500" onClick={()=>setShowAddEntry(true)}><img  src={plus} alt="add package entry"/></button>
            <button className="DBBtn  hover:bg-yellow-500" onClick={()=>setShowNotify(true)}><img  src={bell} alt="notify tenants" /></button>
          
        </span>
        <ul className="dashboard">
            {deliveryData.map((data,index) =><Card key={index} data={data} editPkg={editPkg} setEditPkg={setEditPkg}/>)}
        </ul>

    </div>
    )

    let addPackageModal=(
        <>
        <div>
            <label className="m-2 ">Apartment:</label>
            <select className="m-2 w-20 text-center" onChange={(e)=>{
                let res=deliveryData.filter((item)=> item.apt === e.target.value);
                let {pkg,apt} = res.length > 0 ? {pkg:res[0].packages, apt:res[0].apt} : {pkg:0,apt:""};
                setEditPkg(parseInt(pkg))
                setFocusApt(apt)
                }}>
                <option value="-">-</option>
                {deliveryData.map((item,indx)=> <option   value={item.apt} key={indx}>{item.apt}</option>)}
            </select>
        </div>
        <div>        
            <label className="m-2">Package(s):</label>
            <input type="number" min={0} className="m-2 w-20 text-center" value={editPkg} onChange={(e)=> setEditPkg(parseInt(e.target.value))} />
        </div>
        </>
    )
    let NotifyBody=(
        <div className="flex flex-col ">
        <div className="flex flex-wrap justify-center m-1">
            { // notify feature
            deliveryData.filter(item => item.packages >0).map((item,indx)=> 
            <button key={indx} className=" w-10 mx-1 my-0.5  notiBtn" onClick={e=> {e.preventDefault()}}> 
                {item.apt}
            </button> )}
        </div>
        <button 
        className=" block mt-1 w-full p-1 bg-yellow-500 font-bold font-white"
        onClick={e=> {e.preventDefault()}}>
            Notify All
        </button>
        </div>
    )
    return (<>
        {dashboard}
        {showAddEntry && <Modal inputModal 
        modalTitle="Register Packages" 
        modalBody={addPackageModal} 
        handleModal={setShowAddEntry} 
        clearInput={()=>{setEditPkg(0); setFocusApt("")}} />}
        {showNotify && <Modal modalTitle="Notify Tenants" modalBody={NotifyBody} handleModal={setShowNotify}/>}
        </>
    )
}

export default PackageDashboard