import { Col, Input, Row, Table } from 'antd';
import React, { useState } from 'react';

const AdminSense = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "2",
      id: 2,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "3",
      id: 3,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "4",
      id: 4,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "5",
      id: 5,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "6",
      id: 6,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "7",
      id: 7,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "8",
      id: 8,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "9",
      id: 9,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "10",
      id: 10,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "11",
      id: 11,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "12",
      id: 12,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "13",
      id: 13,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "14",
      id: 14,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "15",
      id: 15,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "16",
      id: 16,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "17",
      id: 17,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "18",
      id: 18,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "19",
      id: 19,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "20",
      id: 29,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "21",
      id: 21,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "22",
      id: 22,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
      note: ""
    },
    {
      key: "23",
      id: 23,
      name: "Nguyễn Văn A",
      OT: 2,
      diMuon: 1,
      nghiPhep: 1,
      nghiKhongPhep: 0,
      quenCheckin: 0,
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
      title: "Over Time",
      dataIndex: "OT",
      key: "OT",
    },
    {
      title: "Số lần đi muộn",
      dataIndex: "diMuon",
      key: "diMuon",
    },
    {
      title: "Nghỉ có phép",
      dataIndex: "nghiPhep",
      key: "nghiPhep",
    },
    {
      title: "Nghỉ không phép",
      dataIndex: "nghiKhongPhep",
      key: "nghiKhongPhep",
    },
    {
      title: "Quên chấm công",
      dataIndex: "quenCheckin",
      key: "quenCheckin",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
    },
  ];

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

export default AdminSense;