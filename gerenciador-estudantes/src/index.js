const express = require('express');
const estudantesRoutes = require('./routes/estudantesRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bem-vindo ao sistema de gerenciamento de estudantes!");
});

app.use('/estudantes', estudantesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
