import React, { Component } from 'react';
import { connect } from 'react-redux';
import { someAction } from '../reducers/app';

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

const state = ({ text }) => ({ text });
const dispatch = { someAction };
export default connect(state, dispatch)(App);