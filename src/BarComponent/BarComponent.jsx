import React, {useState} from 'react';
import {getPercents} from "../Logic/Percents";
import "./BarComponent.css"

const BarComponent = () => {

    const [data] = useState([
        {name: 'Sold', color: '#BD1FBE', value: 100},
        {name: 'Got free', color: '#FC64FF', value: 250},
        {name: 'Burned', color: '#940101', value: 20},
        {name: 'Nice', color: '#439401', value: 0},
    ])

    const percents = getPercents(data)

    const cells = []

    for(let n = 0; n < percents.length; n++) {
        for (let i = 0; i < Math.round(percents[n]); i++) {
            cells.push(<div className="barCell" style={{backgroundColor: data[n].color}}/>)
        }
    }

    return (
        <div className="main">
            <div className="bar">
                <div className="barLine">
                    {cells}
                </div>
                <div className="data">
                    {data.map((item, index) => {
                        return (<div className="dataTypes">
                            <div className="dataSphere" style={{backgroundColor: item.color }}/>
                            <p className="dataName">{item.name}: {item.value} ({percents[index].toFixed(1)}%)</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
};

export default BarComponent;