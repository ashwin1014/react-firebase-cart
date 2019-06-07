import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../config';
import { Form, Icon, Input, Button } from 'antd';
import './auth.css';

class EmailLogin extends Component {

    state = {
        error : {
            message: ''
        }
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values.username, values.password);
          firebaseApp.auth().signInWithEmailAndPassword(values.username, values.password)
                    .catch(err=> {
                        this.setState({error: err})
                    });
        }
      });
    };

    
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container center">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            or <Link to={'/signup'}>New User? Register</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}


export default Form.create({ name: 'normal_login' })(EmailLogin);

