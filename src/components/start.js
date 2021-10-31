import React from 'react'
function Start(){
    const [disable, setDisable] = React.useState(false)
    const Modal = props =>{
        if(!props.show){
            return null}
        }

    return(
        <div class="sidebar">
        <button disabled={disable} onClick={() => setDisable(true)}>Start
        </button>
        <button disabled={!disable}>Guess</button>
        <button disabled={!disable}>I give up!</button>
        <Modal/>
      
        </div>
)    
    }    




    




    
    export default Start



        
    
    
    

    
    
