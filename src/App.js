import React from 'react';
//import logo from './logo.svg';
import './App.css';
var createReactClass = require('create-react-class')
var Product = createReactClass({
  getInitialState: function(){
    return{qty:0};
  },

  buy: function(){
    this.setState({qty:this.state.qty + 1});
    this.props.handleTotal(this.props.price);
  }, 

  show: function(){
    this.props.handleShow(this.props.name);
  },

  render:function(){
    return(
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}> Buy </button>
        <button onClick={this.show}> Show </button>
        <h3>Qut:{this.state.qty}item(s)</h3>
        <hr/>
      </div>
      
    );
  }

});

var Total = createReactClass({
  render:function(){
    return(
      <div>
        <h3> Total Cash: $ {this.props.total}</h3>
      </div>
    ); 
  }
  });

var ProductList = createReactClass({

getInitialState: function(){
  return {total:0,

  productlist: [
    {name:"Android", price: 121},
    {name:"Apple", price: 99},
    {name:"Nokia", price: 65},
  ]

  };
},

calculateTotal: function(price){
  this.setState({total: this.state.total + price});
  //alert(this.state.total);
},

showProduct: function(name){
  alert("you selected " + name);
},

  render:function(){
    var component = this;
    var products = this.state.productlist.map(function(product){
      return (
        <Product name={product.name} price= {product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal}/>
      );
    });
    return (
      <div> 
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
});


  //React.render(<Product/>,document.getElementById("root")); //<p>{this.props.name} - ${this.props.price}</p>
export default ProductList;
