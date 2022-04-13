import { Button, Col, Input, Row, Table } from "antd";
import React from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const AdminCheckin = () => {
    const dataSource = [
        {
            key: 1,
            id: 1,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"

        },
        {
            key: 2,
            id: 2,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 3,
            id: 3,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:35 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đi trễ"
        },
        {
            key: 4,
            id: 4,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:00 10/03/2022",
            note: "Về sớm"
        },
        {
            key: 5,
            id: 5,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 6,
            id: 6,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:55 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đi trễ"
        },

        {
            key: 7,
            id: 7,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 8,
            id: 8,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 9,
            id: 9,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 10,
            id: 10,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 11,
            id: 11,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 12,
            id: 12,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 13,
            id: 13,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 14,
            id: 14,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 15,
            id: 15,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 16,
            id: 16,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },
        {
            key: 17,
            id: 17,
            name: "Nguyễn Văn A",
            thoiGianDen: "8:15 10/03/2022",
            thoiGianVe: "17:30 10/03/2022",
            note: "Đúng giờ"
        },

    ]
    const columns = [
        {
            title: "Mã nhân viên",
            dataIndex: "id",
            key: "id",
            width: "150px"
        },
        {
            title: "Tên nhân viên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thời gian đến",
            dataIndex: "thoiGianDen",
            key: "thoiGianDen",
        },
        {
            title: "Thời gian về",
            dataIndex: "thoiGianVe",
            key: "thoiGianVe",
        },
        {
            title: "Ghi chú",
            dataIndex: "note",
            key: "note",
        },

    ]
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Input placeholder="Tìm kiếm nhân viên"></Input>
                </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default AdminCheckin;