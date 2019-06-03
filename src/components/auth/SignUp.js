import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Typography } from 'antd';
// import './auth.css';

const { Title } = Typography;

class SignUp extends Component {
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
        }
      });
    };

    
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container center">
      <Title level={2} className="center">Sign Up</Title>
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
              Sign Up
            </Button>
            or <Link to={'/signin'}>Already a user? Login</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'normal_login' })(SignUp);