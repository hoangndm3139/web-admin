import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row, Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useHistory } from 'react-router-dom';
import { PAGE_ROUTE } from 'constants/route';
const AdminMode = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()
    const dataSource = [
        {
            key: 1,
            id: 1,
            name: "Thưởng tết dương",
            thoiGianDen: "28/12/2021",
            thoiGianVe: "03/01/2022",
            note: "Thưởng"

        },
        {
            key: 2,
            id: 2,
            name: "Thưởng tết âm",
            thoiGianDen: "10/02/2021",
            thoiGianVe: "14/02/2021",
            note: "Lương tháng 13 + Quà"
        },
        {
            key: 3,
            id: 3,
            name: "Giải phóng miền Nam và quốc tế lao động",
            thoiGianDen: "30/04/2021",
            thoiGianVe: "01/05/2021",
            note: "Thưởng"
        },
        {
            key: 4,
            id: 4,
            name: "Thưởng quốc tế thiếu nhi",
            thoiGianDen: "30/05/2021",
            thoiGianVe: "02/06/2021",
            note: "Dành cho con em CBNV"
        },
        {
            key: 5,
            id: 5,
            name: "Quốc khánh ",
            thoiGianDen: "02/09/2021",
            thoiGianVe: "02/09/2021",
            note: "Thưởng"
        },
        {
            key: 6,
            id: 6,
            name: "Du lịch/Team building",
            thoiGianDen: "01/01/2021",
            thoiGianVe: "01/01/2022",
            note: "Tổ chức event"
        },

        {
            key: 7,
            id: 7,
            name: "Liên hoan cuối năm",
            thoiGianDen: "01/01/2021",
            thoiGianVe: "01/01/2022",
            note: "Tổ chức event"
        },
    ]
    const columns = [
        {
            title: "Mã chế độ",
            dataIndex: "id",
            key: "id",
            width: "150px"
        },
        {
            title: "Tên chế độ",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thời gian áp dụng",
            dataIndex: "thoiGianDen",
            key: "thoiGianDen",
        },
        {
            title: "Thời gian kết thúc",
            dataIndex: "thoiGianVe",
            key: "thoiGianVe",
        },
        {
            title: "Kiểu chế độ",
            dataIndex: "note",
            key: "note",
        },
        {
            title: "Ghi chú",
            dataIndex: "noted",
            key: "noted",
        },
        {
            dataIndex: "editRole",
            key: "editRole",
            render: () => (
                <>
                    <EditFilled
                        className="edit-role"
                    />
                    <DeleteFilled
                        style={{ marginLeft: "10px" }}
                        className="delete-role"
                        onClick={showModal}
                    />
                </>

            ),
        },

    ]
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Input placeholder="Tìm kiếm chế độ"></Input>
                </Col>
                <Col offset={16}>
                    <Button type="primary" onClick={() => {history.push(PAGE_ROUTE.ADD_MODE)}}>Thêm mới</Button>
                </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />;
            <Modal title="Xóa chế độ?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Bạn muốn xóa chế độ?</p>
            </Modal>
        </div>
    );
};

export default AdminMode;