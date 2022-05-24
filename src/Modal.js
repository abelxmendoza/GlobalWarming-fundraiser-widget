import React from "react";





export const Modal = (props) => {

    return (
        <div className="modal" data-status = {props.status}>
            <div className = "modal-card">
                <div className="modal-header">
                    <h2 className="title" style = {{color: 'white'}}>
                        {props.data.title}
                    </h2>
                </div>
                <div className="modal-body">
                    <div className="subtle">
                        We would like to thank you for your generous donation of {' '} 
                    </div>
                    <span className="donation">${props.value.toFixed(2)}</span>
                    <div className="subtitle">
                        With your help we have raised{' '}
                        <span className="donation-thin">${props.raised}</span> of our{' '}
                        <span className="donation-thin">${props.data.goal}</span> goal.{' '}

                    </div>
                    <button className='modal-btn' onClick={props.onClick}>
                        Donate some more!
                    </button>
                </div>
            </div>
        </div>
    )
}