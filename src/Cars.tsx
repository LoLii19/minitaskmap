import React from 'react';
import './Cars.css';

export type CarsType ={
    topcars: Array<TopcarsType>
}

type TopcarsType ={
    manufacturer: string
    model: string
}

export const Cars = (props:CarsType) => {
    return (
        <table className={"Cars"}>
            {props.topcars.map((car, index )=> {
                return (
                    <tr className={"Cars"}>
                        <th className={"Cars"}>{index+1}</th>
                        <span><th>{car.manufacturer}</th></span>
                        <th className={"Cars"}>{car.model}</th>
                </tr>
                )
            })}
        </table>
    );
};

export default Cars;