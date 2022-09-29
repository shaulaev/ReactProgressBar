import React, {useState} from 'react';
import {getPercents} from "../Logic/Percents";
import "./BarComponent.css"

const BarComponent = () => {

    const [data] = useState([
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 0},
        {name: 'Burned', color: '#b71515', value: 200},
        {name: 'Nice', color: '#5cc046', value: 50},
    ])

    const percents = data && getPercents(data)

    const newPerc = percents.map(item => {
        if(item === 0) {
           item = 1
        }

        return item
    })

    const cells = []

    function getCells () {
        for(let n = 0; n < newPerc.length; n++) {
            for (let i = 0; i < Math.round(newPerc[n]); i++) {
                cells.push(<div key={Math.random()} className="barCell" style={{backgroundColor: data[n].color}}/>)
            }
        }
    }

    data && getCells()

    return (
        <div className="main">
            <div className="bar">
                <div className="barLine">
                    {cells}
                </div>
                <div className="data">
                    {data ? data.map((item, index) => {
                        return (
                        <div className="dataTypes" key={index + 1}>
                            <div className="dataSphere" style={{backgroundColor: item.color }}/>
                            <p className="dataName">{item.name}: {item.value} ({percents[index].toFixed(1)}%)</p>
                        </div>)
                    }) : <h1>No data</h1>}
                </div>
            </div>
        </div>
    );
};

export default BarComponent;