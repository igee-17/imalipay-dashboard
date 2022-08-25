import React from "react";

const InfoProfile = ({ name, phone, image }) => {
  return (
    <aside className="profile">
      <img src={image} alt="person-one" />
      <div className="info">
        <h3>{name}</h3>
        <p>{phone}</p>
      </div>
    </aside>
  );
};

export default InfoProfile;
