import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((dataItem: AffairType) => (
        <Affair
            key={dataItem._id}
            affair={dataItem}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    };
    const setHigh = () => {
        props.setFilter('high');
    };
    const setMiddle = () => {
        props.setFilter('middle');
    };
    const setLow = () => {
        props.setFilter('low');
    };


    return (
        <div>
            <div className={classes.affairsWrapper}>
                {mappedAffairs}
            </div>
            <button className={classes.filterBtn} onClick={setAll}>All</button>
            <button className={classes.filterBtn} onClick={setHigh}>High</button>
            <button className={classes.filterBtn} onClick={setMiddle}>Middle</button>
            <button className={classes.filterBtn} onClick={setLow}>Low</button>

        </div>)
}

export default Affairs
