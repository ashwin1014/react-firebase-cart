import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipes } from '../config';
import { getFoodItems } from '../redux/actions';

class Home extends Component {

  componentDidMount() {
     recipes.on('value', snapshot => {
       let items = [];
       snapshot.forEach(item => {
           const { category, details, image, isFavourite, name, price, rating, reviews } = item.val();
           const serverKey = item.key;
           items.push({serverKey, category, details, image, isFavourite, name, price, rating, reviews});
       });
       this.props.getFoodItems(items);
     })
  };
  

  render() {
    return (
      <div>
         {
           this.props.items && this.props.items.map(item=>{
             return (
               <>
                <p>{item.name}</p>
                <p>{item.price}</p>
               </>
             )
           })
         }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const { items } = state;
  return {
    items
  }
}

export default connect(mapStateToProps, { getFoodItems })(Home);
