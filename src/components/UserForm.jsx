import React from "react";

const UserForm = ({ data, updateFiledHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome"
          requirid
          value={data.name || ""}
          onChange={(e) => updateFiledHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          requirid
          value={data.email || ""}
          onChange={(e) => updateFiledHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
