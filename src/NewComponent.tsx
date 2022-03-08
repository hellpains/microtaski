import React from 'react';
import {NewComponentType} from "./App";

export const NewComponent = (props:NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map(elem=>{
                    return(
                        <li key={elem.id}>
                            <span>{elem.name} </span>
                           <span> age: {elem.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    {props.topCars.map((elem, i) => {
                    return (
                        <th key={i}>
                            <span>{elem.manufacturer} </span>
                            <span>  model: {elem.model}</span>
                        </th>
                    )
                })}</tr>
            </table>
        </div>
    );
};

