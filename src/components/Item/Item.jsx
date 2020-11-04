import React, { Component } from 'react';

export default class Items extends Component {
    render(props) {
        return (
            <div>
                <button 
                    onClick={() => this.props.removeItem(this.props.name)}
                >X</button>
                {`${this.props.name}`}
                <button 
                    onClick={() => this.props.reduceValue(this.props.name)}
                >-</button>
                {`${this.props.value}`}
                <button 
                    onClick={() => this.props.addValue(this.props.name)}
                >+</button>
            </div>
        )
    }
}
