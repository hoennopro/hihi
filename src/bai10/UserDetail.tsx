import React from "react";
import { useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
  // Lấy ra id của user từ URL
  const { id } = useParams<{ id: string }>();

  // Tìm user tương ứng với id
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h1>Thông tin chi tiết người dùng</h1>
      {/* Hiển thị thông tin của user */}
      <p>ID: {user?.id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Address: {user?.address}</p>
    </div>
  );
};

export default UserDetail;
