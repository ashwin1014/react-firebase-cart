import React, { Component } from 'react';
import Products from './Products/Products';
import { Layout, Menu, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { getFoodItems } from '../redux/actions/index';
import { firebaseApp, recipes } from '../firebase/config';

const { Header, Sider, Content } = Layout;

class Home extends Component {

 
  state = {
    collapsed: false,    
    category: 'All'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  signout = () => {
    firebaseApp.auth().signOut();
  }

  handleFilter = (category) => {   
    let query = category === 'All' ? recipes.orderByChild('category'):recipes.orderByChild('category').equalTo(category);        
      query.on('value', snapshot => {
        let items = [];
        snapshot.forEach(item => {
            const { category, details, image, isFavourite, name, price, rating, reviews } = item.val();
            const serverKey = item.key;
            items.push({serverKey, category, details, image, isFavourite, name, price, rating, reviews});
        });
        this.props.getFoodItems(items);   
        this.setState({category})
      })           
  };

  render() {
    return (
     <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span onClick={(e)=>this.handleFilter("All")}>All</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span onClick={(e)=>this.handleFilter("Starters")}>Starters</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span onClick={(e)=>this.handleFilter("Dessert")}>Dessert</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span  onClick={(e)=>this.handleFilter("Drinks")}>Drinks</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{padding: 20}}
            />
            <Button style={{float: 'right', margin: 15}} onClick={this.signout}>Signout</Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              height: 'calc(100vh - 112px)',
              overflow: 'auto'
            }}
          >
            <Products/>
          </Content>
        </Layout>
      </Layout>
    )
  }
};


const mapStateToProps = (state) => {
  const { items } = state;
  return {
    items
  }
};


export default connect(mapStateToProps, { getFoodItems })(Home) ;
