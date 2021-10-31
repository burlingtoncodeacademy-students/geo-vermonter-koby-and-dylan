import React from 'react'
import { useState } from 'react'

function Start(props){
    const [disable, setDisable] = React.useState(false)
    const Modal = props =>{
        if(!props.showModal){
            return null}
        }
        const [show, setShow] = useState(false);
    return(
        <div class="sidebar">
        <button disabled={disable} onClick={() => setDisable(true)}>Start
        </button>
        <button disabled={!disable} onClick={() => setShow(true)}>Guess</button>
        
        <button disabled={!disable}>I give up!</button>
        {/* <Modal/> */}
        {show && <Modal showModal={setShow} />}
        </div>
)    
    }    




    




    
    export default Start



        
    
    
    

    
    
