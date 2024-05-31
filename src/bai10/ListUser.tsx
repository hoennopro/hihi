import React from "react";
import { Link } from "react-router-dom";

// Mảng users
const users = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@example.com",
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Tran Thi B",
    email: "tranthib@example.com",
    address: "Ho Chi Minh",
  },
  { id: 3, name: "Le Van C", email: "levanc@example.com", address: "Da Nang" },
];

const ListUser: React.FC = () => {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {/* Sử dụng hàm map để render danh sách user */}
        {users.map((user) => (
          <li key={user.id}>
            {/* Liên kết đến trang UserDetail */}
            <Link to={`/user-detail/${user.id}`}>Xem chi tiết</Link> -{" "}
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
