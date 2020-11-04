import React, { Component } from 'react'

export default class addNew extends Component {
    constructor(props) {
        super();
    }
    render(props) {
        return (
            <div>
                <label>Name:</label>
                <input type="text" id="name" />
                <br/>
                <label>Value:</label>
                <input type="number" id="val" />
                <br/>
                <button onClick={this.props.handleAddItem}>Add item</button>
            </div>
        )
    }
}
