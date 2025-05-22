import React, { useEffect, useState } from "react";

import { Button, Checkbox, Drawer, Form, Input, message, Tabs } from "antd";

import { addUser, onSite, User } from "../../features/UserSlice";
import { showLogin } from "../../features/ModalSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const Login: React.FC = () => {
  const show = useAppSelector(state => state.modals.showLogin);
  const users = useAppSelector(state => state.users.users);
  const [open, setOpen] = useState(show);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (show) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [show]);

  const onClose = () => {
    dispatch(showLogin(!show));
    setOpen(false);
  };

  const onChange = (key: string) => {
    // Tabs
    // console.log(key);
  };

  // Login
  const onFinishLogin = (values: any) => {
    const { username, password } = values;
    const user = users.find(
      user => user.username === username && user.password === password
    );
    if (user) {
      const newUser: User = { username, password, onsite: true };

      dispatch(onSite(newUser));
    } else {
      message.error("Wrong traying");
    }
  };

  const onFinishFailedLogin = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  //Registration
  const onFinishRegistration = (values: any) => {
    const { username, password } = values;
    const newUser: User = { username, password, onsite: false };
    dispatch(addUser(newUser));

    message.success("Registration Success completed");
  };

  const onFinishFailedRegistration = (errorInfo: any) => {
    message.warning(errorInfo);
  };

  return (
    <>
      <Drawer
        className="loginDrawer"
        closable={false}
        placement="top"
        onClose={onClose}
        open={open}
      >
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `Login`,
              key: "1",
              children: (
                <>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishLogin}
                    onFinishFailed={onFinishFailedLogin}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        }
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      valuePropName="checked"
                      wrapperCol={{ offset: 0, span: 16 }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                      <Button
                        className="loginBtn"
                        type="ghost"
                        htmlType="submit"
                        block={true}
                        color="warning"
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              )
            },
            {
              label: `Register`,
              key: "2",
              children: (
                <>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishRegistration}
                    onFinishFailed={onFinishFailedRegistration}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        }
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                      <Button
                        className="registrationBtn"
                        htmlType="submit"
                        block={true}
                      >
                        Registration
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              )
            }
          ]}
        />
      </Drawer>
    </>
  );
};

export default Login;
