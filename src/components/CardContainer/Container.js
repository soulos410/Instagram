import React, { Component } from 'react';

export default class Container extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        text: 'ttt'
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        )
    }

}
