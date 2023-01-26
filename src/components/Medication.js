import React from "react";

function Medication({
  medication: {name, form, retail, price, savings},
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{form}</td>
      <td>{retail}</td>
      <td>{price}</td>
      <td>{savings}</td>
    </tr>
  );
}

export default Medication;