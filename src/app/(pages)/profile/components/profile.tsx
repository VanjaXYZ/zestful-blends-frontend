"use client";
const ProfileName = {
  id: 1,
  profileName: "ruchita",
  emailId: "ruchita@gmail.com",
  phone: "1234567890",
  address: 'canada'
};
const ProfilePage = () => {
  return (
    <div>
      <div>
        <p>Name is= {ProfileName.profileName}</p>
        <p>Email is= {ProfileName.emailId}</p>
        <p>Number is= {ProfileName.phone}</p>
        <p>Address is= {ProfileName.address}</p>
      </div>;
    </div>
  );
};

export default ProfilePage;
