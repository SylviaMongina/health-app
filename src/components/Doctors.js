import React from "react";

function Doctors({
  doctor: {name, hospital, contact, speciality, status},
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{hospital}</td>
      <td>{contact}</td>
      <td>{speciality}</td>
      <td>{status}</td>
    </tr>
  );
}

export default Doctors;