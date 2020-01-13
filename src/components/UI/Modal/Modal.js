import React from 'react'

import Aux from '../../../hoc/Aux.js'
import BackDrop from '../Backdrop/Backdrop.js'

import classes from './Modal.css'

const modal = (props) => {
    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.modalClosed} />
            <div 
                className={classes.Modal}
                style = {{
                            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: props.show ? '1' : '0'
                        }} >
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;