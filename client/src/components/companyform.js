import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css'; // Arquivo de estilos para o formulário

const validationSchema = Yup.object({
  name: Yup.string().required('O nome da empresa é obrigatório'),
  cnpj: Yup.string()
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido')
    .required('O CNPJ é obrigatório'),
  address: Yup.string().required('O endereço é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
});

function CompanyForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="company-form">
      <div className="form-group">
        <label htmlFor="name">Nome da Empresa</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-input ${formik.errors.name ? 'error' : ''}`}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <div className="form-error">{formik.errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="cnpj">CNPJ</label>
        <input
          id="cnpj"
          name="cnpj"
          type="text"
          className={`form-input ${formik.errors.cnpj ? 'error' : ''}`}
          value={formik.values.cnpj}
          onChange={formik.handleChange}
        />
        {formik.errors.cnpj && <div className="form-error">{formik.errors.cnpj}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          name="address"
          type="text"
          className={`form-input ${formik.errors.address ? 'error' : ''}`}
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && <div className="form-error">{formik.errors.address}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          className={`form-input ${formik.errors.phone ? 'error' : ''}`}
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <div className="form-error">{formik.errors.phone}</div>}
      </div>

      <button type="submit" className="form-button">
        Salvar
      </button>
    </form>
  );
}

export default CompanyForm;
