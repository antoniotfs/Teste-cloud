import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/app.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/companies');
        setCompanies(response.data);
      } catch (error) {
        setError('Erro ao buscar empresas');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleEditClick = (companyId) => {
    navigate(`/edit/${companyId}`);
  };

  const handleDeleteClick = async (companyId) => {
    if (window.confirm('Tem certeza que deseja deletar esta empresa?')) {
      try {
        await axios.delete(`http://localhost:5000/api/companies/${companyId}`);
        setCompanies(companies.filter((company) => company._id !== companyId));
        alert('Empresa deletada com sucesso!');
      } catch (error) {
        alert('Erro ao deletar a empresa. Tente novamente mais tarde.');
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="company-list-container">
      <header className="company-list-header">
        <h1 className="company-list-title">Empresas</h1>
        <button className="company-create-button">
          <Link to="/edit/new" className="company-create-link">
            Criar Nova Empresa
          </Link>
        </button>
      </header>
      <div className='company-box-div'>
      <div className='company-table-div'>
      <table className="company-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id}>
              <td><strong>{company.name}</strong></td>
              <td>{company.cnpj}</td>
              <td>{company.address}</td>
              <td>{company.phone}</td>
              <td>
                <button
                  className="company-edit-button"
                  onClick={() => handleEditClick(company._id)}
                >
                  Editar
                </button>
                <button
                  className="company-delete-button"
                  onClick={() => handleDeleteClick(company._id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default CompanyList;
