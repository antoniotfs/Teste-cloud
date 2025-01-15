import axios from 'axios';

const API_URL = 'http://localhost:5000/companies';

export const getCompanies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCompanyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const saveCompany = async (company) => {
  if (company.id) {
    return await axios.put(`${API_URL}/${company.id}`, company);
  } else {
    return await axios.post(API_URL, company);
  }
};

export const deleteCompany = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};