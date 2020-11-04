import React from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';
import AddNew from './components/AddNew/AddNew';

let items = [
  {
    id: 1,
    name: 'SampleItem1',
    value: 4
  },
  {
    id: 2,
    name: 'SampleItem2',
    value: 1
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [],
      navigation: 'home',
    }
  }

  componentDidMount() {
    this.setState({list: items});
    if(localStorage.getItem('listOfItems')) {
      this.setState({list: JSON.parse(localStorage.getItem('listOfItems'))});
    }
  }

  handleAddItem = () => {
    let name = document.getElementById("name");
    let val = document.getElementById("val");
    if(name.value.trim() === '') {
      alert("name is blank");
    } else if(val.value === '') {
      alert("value is blank");
    } else {
      let newItem = {
        id: Math.floor(Math.random() * 1000000),
        name: name.value.trim(),
        value: parseInt(val.value)
      };
      let array = this.state.list;
      array.push(newItem);
      localStorage.setItem('listOfItems', JSON.stringify(array));
      this.setState({
        list: array,
        navigation: 'home'
      });
    }
  }

  handleRemoveItem = (name) => {
    let array = this.state.list;
    let index = -1;
    for(let i = 0; i < array.length; i++) {
      if(array[i].name === name) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({list: array});
    localStorage.setItem('listOfItems', JSON.stringify(array));
  }

  handleReduceValue = (name) => {
    let array = this.state.list;
    for(let i = 0; i < array.length; i++) {
      if(array[i].name === name) {
        array[i].value--;
        break;
      }
    }
    this.setState({list: array});
    localStorage.setItem('listOfItems', JSON.stringify(array));
  }

  handleAddValue = (name) => {
    let array = this.state.list;
    for(let i = 0; i < array.length; i++) {
      if(array[i].name === name) {
        array[i].value++;
        break;
      }
    }
    this.setState({list: array});
    localStorage.setItem('listOfItems', JSON.stringify(array));
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.navigation === 'home')?
            <div>
              <h2>
                  Input Items 
                  <span>
                    <button onClick={() => {this.setState({navigation: 'newAddition'})} }>+</button>
                  </span>
              </h2>
              <ItemsList items={this.state.list} 
                handleRemoveItem={this.handleRemoveItem} 
                handleAddValue={this.handleAddValue} 
                handleReduceValue={this.handleReduceValue}
              />
            </div>
            :
            <div>
              <h2>
                  Add New Item 
                  <span>
                    <button onClick={() => {this.setState({navigation: 'home'})} }>Back</button>
                  </span>
              </h2>
              <AddNew handleAddItem={this.handleAddItem} />
            </div>
        }
      </div>
    );
  }

}

export default App;
