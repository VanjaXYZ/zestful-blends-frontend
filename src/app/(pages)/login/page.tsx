"use client";

import LoginPage from "./components/loginForm";

const UserName = {
  id: 1,
  userName: "ruchita",
  emailId: "ruchita@gmail.com",
  phone: "1234567890",
  address: 'canada'
};
const loginPage = () => {
  return (
    <div>
      <div>
        <LoginPage></LoginPage>
      </div>;
    </div>
  );
};

export default loginPage;
