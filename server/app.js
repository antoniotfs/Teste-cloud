const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const companyRoutes = require('./routes/companyroutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Substitui o body-parser para JSON

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://TesteTec:bQriQvRLc1k059Bf@teste-tec.bushb.mongodb.net/'
).then(() => console.log('MongoDB conectado com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota 
app.use('/api/companies', companyRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
