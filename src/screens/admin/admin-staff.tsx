import { Button, Col, Input, Modal, Row, Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PAGE_ROUTE } from "constants/route";

const AdminCategory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory()
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Trưởng phòng",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "2",
      id: 2,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "3",
      id: 3,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "4",
      id: 4,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "5",
      id: 5,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "6",
      id: 6,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "7",
      id: 7,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "8",
      id: 8,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "9",
      id: 9,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "10",
      id: 10,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "11",
      id: 11,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "12",
      id: 12,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "13",
      id: 13,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "14",
      id: 14,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "15",
      id: 15,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "16",
      id: 16,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "17",
      id: 17,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "18",
      id: 18,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "19",
      id: 19,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "20",
      id: 29,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "21",
      id: 21,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "22",
      id: 22,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
      note: ""
    },
    {
      key: "23",
      id: 23,
      name: "Nguyễn Văn A",
      age: 32,
      dateOfBirth: "01/01/1990",
      phoneNumber: "0987654321",
      sex: "Nam",
      position: "Nhân viên",
      phongBan: "Phòng 01",
      email: "a.nguyenvan@smartosc.vn",
      ngayThamGia: "03/05/2018",
      ngayNghi: "",
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
      title: "Ngày sinh",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Chức vụ",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Phòng ban",
      dataIndex: "phongBan",
      key: "phongBan",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày tham gia",
      dataIndex: "ngayThamGia",
      key: "ngayThamGia",
    },
    {
      title: "Ngày nghỉ",
      dataIndex: "ngayNghi",
      key: "ngayNghi",
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
            style={{ marginLeft: "10px" }}
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
          <Button type="primary" onClick={() => {history.push(PAGE_ROUTE.ADD_STAFF)}}>Thêm mới</Button>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} />;

      <Modal title="Xóa nhân viên?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Bạn muốn xóa nhân viên?</p>
      </Modal>
    </div>
  );
};

export default AdminCategory;
