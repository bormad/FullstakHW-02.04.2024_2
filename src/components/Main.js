import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Main = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const data = { fullName, phone };
    await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setFullName("");
      setPhone("");
      navigate("/problem");
    });
  };
  return (
    <div>
      <h1 className="mb-3">Записаться к врачу</h1>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3">
          <Form.Label>ФИО</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            type="text"
            placeholder="+7(ХХХ) ХХХ-ХХ-ХХ"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default Main;
