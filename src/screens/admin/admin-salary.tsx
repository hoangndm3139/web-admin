import { Button, Col, Input, Modal, Row, Table } from "antd";
import React, { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { PAGE_ROUTE } from "constants/route";

const AdminRoduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory()
  const dataSource = [
  {
    key: "1",
    id: 1,
    name: "Nguyễn Văn A",
    time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "2",
    id: 2,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "3",
    id: 3,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "4",
    id: 4,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "5",
    id: 5,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "6",
    id: 6,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "7",
    id: 7,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "8",
    id: 8,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "9",
    id: 9,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "10",
    id: 10,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "11",
    id: 11,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "12",
    id: 12,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "13",
    id: 13,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "14",
    id: 14,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "15",
    id: 15,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "16",
    id: 16,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "17",
    id: 17,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "18",
    id: 18,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "19",
    id: 19,
    name: "Nguyễn Văn A",
    time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "20",
    id: 29,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "21",
    id: 21,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "22",
    id: 22,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },
  {
    key: "23",
    id: 23,
    name: "Nguyễn Văn A",
   time: "1 tháng",
    luongCoBan: "5.000.000",
    luongNgoaiGio: "3.000.000",
    luongTamUng: "0",
    troCap: "500.000",
    thuongHieuSuat: "500.000",
    thuongChuyenCan: "200.00",
    thuongHoanThanh: "5.000.000",
    thuongYThuc: "300.000",
    tong: "15.500.000",
    note: ""
  },

];

const columns = [
  {
    title: "Mã nhân viên",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Lương cơ bản",
    dataIndex: "luongCoBan",
    key: "luongCoBan",
  },
  {
    title: "Lương ngoài giờ",
    dataIndex: "luongNgoaiGio",
    key: "luongNgoaiGio",
  },
  {
    title: "Lương tạm ứng",
    dataIndex: "luongTamUng",
    key: "luongTamUng",
  },
  {
    title: "Trợ cấp",
    dataIndex: "troCap",
    key: "troCap",
  },
  {
    title: "Thưởng hiệu suất",
    dataIndex: "thuongHieuSuat",
    key: "thuongHieuSuat",
  },
  {
    title: "Thưởng chuyên cần",
    dataIndex: "thuongChuyenCan",
    key: "thuongChuyenCan",
  },
  {
    title: "Thưởng hoàn thành",
    dataIndex: "thuongHoanThanh",
    key: "thuongHoanThanh",
  },
  {
    title: "Thưởng ý thức",
    dataIndex: "thuongYThuc",
    key: "thuongYThuc",
  },
  {
    title: "Tổng",
    dataIndex: "tong",
    key: "tong",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
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
        style={{marginLeft: "10px"}}
        className="delete-role"
        onClick={showModal}
        />
    </>
      
    ),
},
];
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
          <Input placeholder="Tìm kiếm nhân viên"></Input>
        </Col>
        <Col offset={16}>
           <Button type="primary" onClick={() => {history.push(PAGE_ROUTE.ADD_SALARY)}} >Thêm mới</Button>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal title="Xóa nhân viên?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Bạn muốn xóa nhân viên?</p>
      </Modal>
    </div>
  );
};

export default AdminRoduct;
