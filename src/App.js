import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {},
    topping: '',
    size: '',
    vegetarian: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  handleEditClick = (id) => {
    const pizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })

  }

  handleInputChange = (event) => {
    console.log('hello');
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRadioChange = (event) => {
    console.log('hello');
    if(event.target.value === 'Vegetarian'){
    this.setState({vegetarian: true})
    } else {
    this.setState({vegetarian: false})
    }
  }

  handleSubmit = () => {
    console.log('hello');
  }


  render() {
    console.log(this.state.topping);
    console.log(this.state.size);
    console.log(this.state.vegetarian);
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleRadioChange={this.handleRadioChange} topping={this.state.topping} vegetarian={this.state.vegetarian} size={this.state.size} handleInputChange={this.handleInputChange}/>
        <PizzaList pizzas={this.state.pizzas} handleEditClick={this.handleEditClick}/>
      </Fragment>
    );
  }
}

export default App;
