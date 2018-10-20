import React, { Component } from 'react';
import fetch from 'cross-fetch';

export default class AirApp extends Component {

    // Testing cors:
    // componentDidMount() {
    //     this.getData()
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         });
    // }
    //
    // getData() {
    //     return fetch('https://api.nilu.no/obs/utd')
    // }

    render() {
        return (<h1>Hei, og velkommen</h1>);
    }
}