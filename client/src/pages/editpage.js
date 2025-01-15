import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CompanyForm from '../components/companyform';
import axios from 'axios';
import '../styles/edit.css'; // Arquivo de estilos

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: '',
    cnpj: '',
    address: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      if (id !== 'new') {
        try {
          const response = await axios.get(`http://localhost:5000/api/companies/${id}`);
          setInitialValues(response.data);
        } catch (error) {
          console.error('Erro ao buscar empresa:', error);
        }
      }
      setLoading(false);
    };

    fetchCompany();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      if (id === 'new') {
        await axios.post('http://localhost:5000/api/companies', values);
      } else {
        await axios.put(`http://localhost:5000/api/companies/${id}`, values);
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar empresa:', error);
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="edit-page-container">
      <div className="edit-page-form-wrapper">
        <h2>{id === 'new' ? 'Criar Nova Empresa' : 'Editar Empresa'}</h2>
        <CompanyForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default EditPage;
