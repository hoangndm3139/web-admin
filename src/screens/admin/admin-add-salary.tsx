import { Button, Col, Form, Input, Row, Typography} from 'antd';
import React from 'react';
const { Title} = Typography;
const AdminAddSalary = () => {
    return (
        <div>
            <Title level={2}>Sửa thông tin lương nhân viên</Title>
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
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thời gian"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lương cơ bản"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lương ngoài giờ"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lương tạm ứng"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Trợ cấp"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thưởng hiệu suất"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thưởng chuyên cần"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thưởng hoàn thành"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thưởng ý thức"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Ghi chú"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Tổng"
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

export default AdminAddSalary;