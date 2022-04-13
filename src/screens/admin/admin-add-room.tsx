import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
const AdminAddRoom = () => {
    return (
        <div>
            <Title level={2}>Sửa thông tin phòng ban</Title>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            >
                <Row justify='center'>
                    <Col span={10}>
                        <Form.Item
                            label="Tên phòng ban"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Sức chứa tối đa"
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

export default AdminAddRoom;