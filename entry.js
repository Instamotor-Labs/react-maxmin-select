import React from 'react';
import ReactDOM from 'react-dom';
import MaxMin from './MaxMin';
import PlainSelect from './PlainSelect';

// TODO: get max and min year from api - returned by search as {string} aggregations.min_year.value and aggregations.max_year.value
var options = [
    {value: 0, label: '0 miles'},
    {value: 25000, label: '25,000 miles'},
    {value: 50000, label: '50,000 miles'},
    {value: 100000, label: '100,000 miles'},
    {value: 150000, label: '150,000 miles'},
    {value: 200000, label: '200,000 miles'},
    {value: 250000, label: '250,000 miles'}
];

var min = 25000;
var max = 200000;
ReactDOM.render(
    <MaxMin
        selectBox={PlainSelect}
        minCallback={(value)=>{
            console.log('min value: ', value);
            min = value;
        }}
        maxCallback={(value)=>{
            console.log('max value: ', value);
            max = value;
        }}
        min={min}
        max={max}
        options={options}
        placeHolderMin="Mileage min"
        placeHolderMax="Mileage max"
        width="130px"
    />,
    document.getElementById('example')
);
