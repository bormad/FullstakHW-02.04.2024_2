import React from "react";

export const Problems = () => {
  const [patients, setPatients] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/problems", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(patients);

  return (
    <div>
      <h1>Пациенты</h1>
      <ul>
        {patients.map((obj, index) => (
          <li key={index}>
            {obj.fullName} {obj.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
