import React from 'react';
import { Card, Icon, Button, Col, Tooltip, Typography, notification } from 'antd';

const { Meta } = Card;
const { Paragraph } = Typography;


const ProductItem = (props) => {
    const {category, details, image, isFavourite, name, price, rating, reviews} = props.item

    const handleCart = () => {
        const args = {
          message: `${name} added to cart`,
          duration: 2,
        };
        notification.open(args);
      };

    return (
        <Col lg={{ span: 8}} sm={{ span: 12}} style={{ marginBottom: 30 }}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="food-item" src={image} />}
                actions={[<p>&#8377; {price}</p>,<Button onClick={handleCart}>Add to cart</Button>]}
            >
            <Tooltip placement="top" title={name}>
            <Meta
              title={name}
            />
            </Tooltip>           
            <Paragraph ellipsis={{ rows: 3, expandable: true }}>{details}</Paragraph>
            <div className="other-details">
            <p>Rating: {rating} <Icon type="star" theme="filled" />({reviews} Reviews)</p>
            <br/>
            {isFavourite ? <Icon type="star" theme="filled" style={{color: 'yellow', fontSize: 20}}/>:<Icon type="star" style={{fontSize: 20}}/>}
            <br/>
            Category: {category}
           </div>            
          </Card>   
        </Col>
    )
}

export default ProductItem
