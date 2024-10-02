import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        num: '',
        mail: '',
        handicap: '',
        civilite: '',
        birth: '',
        password: '',
        contact_mail: '',
        contact_num: '',
        note: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/userAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Client ajouté avec succès');
            } else {
                alert(`Erreur: ${result.error}`);
            }
        } catch (error) {
            alert('Erreur lors de l\'envoi des données');
        }
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        paddingTop: '150px'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '3px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h4>Nom</h4>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} autoComplete="given-name" />
            <h4>Prenom</h4>
            <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required style={inputStyle} autoComplete="family-name" />
            <h4>Numéro de téléphone</h4>
            <input type="number" name="num" placeholder="Num" value={formData.num} onChange={handleChange} required style={inputStyle} autoComplete="tel" />
            <h4>Email</h4>
            <input type="email" name="mail" placeholder="Mail" value={formData.mail} onChange={handleChange} required style={inputStyle} autoComplete="email" />
            <h4>Handicap</h4>
            <select name="handicap" value={formData.handicap} onChange={handleChange} required style={inputStyle}>
                <option value="">Handicap</option>
                <option value="1">Fautueil</option>
                <option value="2">Aveugle</option>
                <option value="3">Agé</option>
            </select>
            <h4>Civilité</h4>
            <select name="civilite" value={formData.civilite} onChange={handleChange} required style={inputStyle}>
                <option value="">Civilité</option>
                <option value="1">Homme</option>
                <option value="2">Femme</option>
                <option value="3">Autre</option>
            </select>
            <h4>Date Anniversaire</h4>
            <input type="date" name="birth" placeholder="Birth" value={formData.birth} onChange={handleChange} required style={inputStyle} autoComplete="bday" />
            <h4>Mot de Passe</h4>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} autoComplete="new-password" />
            <h4>Contact mail</h4>
            <input type="email" name="contact_mail" placeholder="Contact Mail" value={formData.contact_mail} onChange={handleChange} required style={inputStyle} autoComplete="email" />
            <h4>Contact numéro de téléphone</h4>
            <input type="number" name="contact_num" placeholder="Contact Num" value={formData.contact_num} onChange={handleChange} required style={inputStyle} autoComplete="tel" />
            <h4>Note</h4>
            <textarea name="note" placeholder="Note" value={formData.note} onChange={handleChange} required style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Ajouter Client</button>
        </form>
    );
};

export default Signup;
