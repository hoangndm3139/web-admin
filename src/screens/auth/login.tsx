import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { PAGE_ROUTE } from "constants/route";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const history = useHistory();

  const [form] = Form.useForm();

  // const onFinish = () => {
  //   axios
  //     .post("http://localhost:2206/authen/login/admin", {
  //       username: form.getFieldValue("username"),
  //       password: form.getFieldValue("password"),
  //     })
  //     .then((res) => {
  //       if (res.data) {
  //         message.success("Đăng nhập thành công");
  //         history.push(PAGE_ROUTE.ADMIN)
  //       } else {
  //         message.error("Đăng nhập thất bại");
  //       }
  //     });
  // };

  return (
    <div className="full-screen">
      <div className="center-box">
        <Form
          name="normal_login"
          className="form-login"
          initialValues={{ remember: true }}
          onFinish={()=> {history.push(PAGE_ROUTE.ADMIN)}}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button btn-login"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
