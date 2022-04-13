import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Table } from "antd";
import { PAGE_ROUTE } from "constants/route";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const AdminRoom = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
   const  history = useHistory()
    const dataSource = [
        {
            key: 1,
            id: 1,
            name: "Phòng giám đốc",
            maxSlot: 5
        },
        {
            key: 2,
            id: 2,
            name: "Phòng họp",
            maxSlot: 15
        },
        {
            key: 3,
            id: 3,
            name: "Phòng 01",
            maxSlot: 20
        },
        {
            key: 4,
            id: 4,
            name: "Phòng 02",
            maxSlot: 20
        },
    ]
    const columns = [
        {
            title: "Mã phòng ban",
            dataIndex: "id",
            key: "id",
            width: "150px"
        },
        {
            title: "Tên phòng ban",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số lượng người tối đa",
            dataIndex: "maxSlot",
            key: "maxSlot",
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
                    <Input placeholder="Tìm kiếm phòng ban"></Input>
                </Col>
                <Col offset={16}>
                    <Button type="primary" onClick={()=> {history.push(PAGE_ROUTE.ADD_ROOM)}}>Thêm mới</Button>
                </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />;
            <Modal title="Xóa phòng ban?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Bạn muốn xóa phòng này?</p>
            </Modal>
        </div>
    );
};

export default AdminRoom;