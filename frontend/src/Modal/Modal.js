import React from 'react';
import './Modal.css';
import xMark from '../assets/img/xMarkLined.svg';

const Modal =({handleModal,modalTitle, modalBody, clearInput, inputModal})=>{
    
  const closeModal =()=>{
      handleModal(false);
      if(inputModal){
         clearInput(); //   * Be sure to clear the input so that we dont save any changes we dont intend to make *
      }
    }
  const handleSubmit=()=>{
    if(!inputModal){
      return null
    }
    // lets add a promise where the changes are saved (as in we change the states as
    // well after the api has been successfully called) otherwise the states value will remain the same.
  }
    
    return(
        <React.Fragment>
        <div className="backDrop bg-slate-900  opacity-50 " onClick={()=>closeModal()}/>
        <div className="bg-white modalContainer">
          <div><button className="exitButton" onClick={()=>closeModal()}><img src={xMark}/></button></div>
        
          <div className="modalTitle">
            <h1>{modalTitle}</h1>
          </div>
          <form >
          <div className="modalBody">
              {modalBody}
          </div>
          <div className="modalActions">
              {inputModal && <>
                <button 
                type="submit"
                className="m-2 p-1 border border-black bg-green-400 rounded-full hover:bg-green-200" 
                onClick={(e)=> {
                  e.preventDefault();
                  handleSubmit();
                  }}>
                  Save
                </button>
                <button 
                className="m-2 p-1 border border-black bg-pink-400 rounded-full hover:bg-pink-200 " 
                onClick={()=>{closeModal();}}> 
                  Cancel
                </button>
               </>
              }
             
          </div>
          </form>
        </div>
      </React.Fragment>)
}

export default Modal;