import React from "react";

const TaskItem = (props) => {
    return (
        <div className="to-do-item">
            <h2>{ props.task }</h2>
            <p>{ props.date }</p>
            <p>{ props.time }</p>
            <p>{ props.location }</p>
            <p>{ props.description }</p>
            <p>{ props.priority }</p>
            <p>{ props.calendar }</p>
        </div>
    )
}