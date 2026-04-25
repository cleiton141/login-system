const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

/* cadastro */
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (email, password) VALUES (?, ?)`,
    [email, hashedPassword],
    function (err) {
      if (err) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }
      res.json({ message: 'Usuário criado com sucesso' });
    }
  );
});

/* login */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    async (err, user) => {
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return res.status(400).json({ error: 'Senha inválida' });
      }

      res.json({ message: 'Login realizado com sucesso' });
    }
  );
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
