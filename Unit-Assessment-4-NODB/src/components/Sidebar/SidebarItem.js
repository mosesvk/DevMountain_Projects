import React, { Component } from 'react'

export default class SidebarItem extends Component {

  constructor(props){
    super(props); 

    this.state = {
      quantityInput: null,
    }

  };

  handleChange = (e) => {
    this.setState({quantityInput: e.target.value} )
  }

  render() {
    const {name, quantity, id} = this.props.prod;
    const {editItem, removeItem} = this.props;
    // remember editItem and prod are on the same level editItem is a function NOT apart of the array of object cart items
    return (
      <div className="cartItem">
        <h1>{name}</h1>
        <h2>Qty: {quantity}</h2> 
        <input style={{width: "150px"}} className="input" value={this.state.quantityInput} placeholder="Edit Quantity" onChange={(e) => this.handleChange(e)}/>
        {/* the value let's you change the value that's INSIDE the input */}
        {/* onChange will change the STATE through the handleChange */}
        <button onClick={() => editItem(id, this.state.quantityInput)}>Save</button>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    )
  }
}
