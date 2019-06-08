import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipes } from '../../config';
import { getFoodItems } from '../../redux/actions/index';
import { Row } from 'antd';
import ProductItem from './ProductItem';
import './Products.css';

class Products extends Component {
    componentDidMount() {
        recipes.orderByChild('category').on('value', snapshot => {
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
      <Row type="flex" justify="start">
        <div className="container">
        {
          this.props.items && this.props.items.map(item=>{
            return (        
             <ProductItem item={item} key={item.serverKey}/>
            )
          })
        }
        </div>
     </Row>
    )
  }
}

const mapStateToProps = (state) => {
    const { items } = state;
    return {
      items
    }
  }

export default  connect(mapStateToProps, { getFoodItems })(Products)
