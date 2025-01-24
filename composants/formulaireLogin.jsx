import './formulaireLogin.css';
import { useState } from 'react';

function FormulaireLogin({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "", errors: {} });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "L'email est obligatoire";
    }
    if (!formData.password) {
      errors.password = "Le mot de passe est obligatoire";
    }

    setFormData((prevState) => ({ ...prevState, errors: errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onLogin({
        email: formData.email,
        password: formData.password
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.errors.email && <span className="error">{formData.errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.errors.password && <span className="error">{formData.errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default FormulaireLogin;
