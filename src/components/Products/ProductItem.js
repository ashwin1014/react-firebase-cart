import React from 'react';
import { Card, Icon, Button, Col } from 'antd';

const { Meta } = Card;

const ProductItem = (props) => {
     const {category, details, image, isFavourite, name, price, rating, reviews} = props.item
    return (
        <Col lg={{ span: 8}} sm={{ span: 12}} style={{ marginBottom: 30 }}>
            <Card
            style={{ width: 300 }}
            cover={<img alt="food-item" src={image} />}
            actions={[<p>&#8377; {price}</p>,<Button>Add to cart</Button>]}
            >
            <Meta
                title={name}
                description={details}
            />

            <div className="other-details">
            <p>Rating: {rating} <Icon type="star" theme="filled" />({reviews} Reviews)</p>
            <br/>
            {isFavourite ? <Icon type="star" theme="filled" style={{color: 'yellow'}}/>:<Icon type="star" />}
            <br/>
            Category: {category}
           </div>
            
          </Card>   
        </Col>
    )
}

export default ProductItem
