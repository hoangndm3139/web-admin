import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
const AdminAddMode = () => {
    return (
        <div>
            <Title level={2}>Sửa chế độ</Title>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            >
                <Row justify='center'>
                    <Col span={10}>
                        <Form.Item
                            label="Tên chế độ"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Kiểu chế độ"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thời gian áp dụng"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thời gian kết thúc"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ghi chú"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

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

export default AdminAddMode;