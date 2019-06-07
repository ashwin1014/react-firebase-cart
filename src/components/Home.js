import React, { Component } from 'react';
import Products from './Products/Products';
import { Layout, Menu, Icon, Button } from 'antd';
import { firebaseApp } from '../config';

const { Header, Sider, Content } = Layout;

class Home extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  signout = () => {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
     <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Dessert</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Starters</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Drinks</span>
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



export default Home ;
