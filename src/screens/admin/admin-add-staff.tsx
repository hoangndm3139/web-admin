import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
const { Title} = Typography;
const AdminAddStaff = () => {
    return (
        <div>
           <Title level={2}>Sửa thông tin nhân viên</Title>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            > 
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Họ và tên"
                            name="Họ và tên"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ngày sinh"
                            name="Ngày sinh"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="Số điện thoại"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Giới tính"
                            name="Giới tính"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Chức vụ"
                            name="Chức vụ"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Phòng ban"
                            name="Phòng ban"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="Email"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ngày tham gia"
                            name="Ngày tham gia"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ngày nghỉ"
                            name="Ngày nghỉ"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ghi chú"
                            name="Ghi chú"
                        >
                            <Input />
                        </Form.Item></Col>
                </Row>
                <Row justify='center'>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Row>

            </Form>


        </div>
    );
};

export default AdminAddStaff;