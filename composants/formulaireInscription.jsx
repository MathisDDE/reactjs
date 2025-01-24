import './formulaireInscription.css';
import { useState } from 'react';

function FormulaireInscription({ onRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nom: "",
    prenom: "",
    errors: {}
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username) {
      errors.username = "Le nom d'utilisateur est obligatoire";
    }
    if (!formData.password) {
      errors.password = "Le mot de passe est obligatoire";
    } else if (formData.password.length < 8) {
      errors.password = "Le mot de passe doit contenir au moins 8 caractères";
    }
    if (!formData.email) {
      errors.email = "L'email est obligatoire";
    }
    if (!formData.nom) {
      errors.nom = "Le nom est obligatoire";
    }
    if (!formData.prenom) {
      errors.prenom = "Le prénom est obligatoire";
    }

    setFormData((prevState) => ({ ...prevState, errors: errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onRegister({
        email: formData.email,
        password: formData.password,
        username: formData.username,
        nom: formData.nom,
        prenom: formData.prenom
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Inscription</h2>
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

          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          {formData.errors.nom && <span className="error">{formData.errors.nom}</span>}

          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
          {formData.errors.prenom && <span className="error">{formData.errors.prenom}</span>}

          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formData.errors.username && <span className="error">{formData.errors.username}</span>}

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
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default FormulaireInscription;
