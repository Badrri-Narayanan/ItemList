import React, { Component } from 'react'
import Item from '../Item/Item';

export default class ItemsList extends Component {
    constructor(props) {
        super();
    }

    render(props) {
        return (
                <div>
                    {
                        this.props.items.map(item => 
                            <Item key={`${item.id}`} 
                                name={item.name}
                                value={item.value}
                                removeItem={this.props.handleRemoveItem}
                                reduceValue={this.props.handleReduceValue} 
                                addValue={this.props.handleAddValue}
                            />
                        )
                    }
                    {`Total =`}
                    {
                        this.props.items.reduce((a,c) => (a + c.value), 0)
                    }
                </div>
        )
    }
}
