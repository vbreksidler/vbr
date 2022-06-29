const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const emailMiddleware = require('./middlewares/emailMiddleware');
const passwordMiddleware = require('./middlewares/passwordMiddleware');
const authorizationMiddleware = require('./middlewares/tokenMiddleware');
const nameMiddleware = require('./middlewares/nameMiddleware');
const ageMiddleware = require('./middlewares/ageMiddleware');
const { talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware } = require('./middlewares/talkMiddleware');

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_FAIL_STATUS = 404;
const HTTP_CREATED = 201;
const PORT = '3000';

const talkerPath = path.join(__dirname, 'talker.json');

app.delete('/talker/:id', authorizationMiddleware, async (req, res) => {
  const { id } = req.params;
  const talker = await JSON.parse(fs.readFileSync(talkerPath, 'utf-8'));
  const index = talker.findIndex((item) => item.id === Number(id));
  talker.splice(index, 1);
  await fs.writeFileSync(talkerPath, JSON.stringify(talker));
  res.status(204).end();
});

app.put('/talker/:id',
  authorizationMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware, async (req, res) => {
    const { id } = req.params;
    const talker = await JSON.parse(fs.readFileSync(talkerPath, 'utf-8'));
    const { name, age, talk } = req.body;
    const index = talker.findIndex((item) => item.id === Number(id));
    if (index === -1) return res.status(HTTP_FAIL_STATUS).json({ message: 'Talker not found' });
    talker[index] = { ...talker[index], name, age, talk };
    await fs.writeFileSync(talkerPath, JSON.stringify(talker));
    res.status(HTTP_OK_STATUS).json({ id: Number(id), name, age, talk });
  });

app.get('/talker/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const talker = await JSON.parse(fs.readFileSync(talkerPath, 'utf-8'));
    const talkerById = talker.find((item) => item.id === Number(id));
    if (talkerById) return res.status(HTTP_OK_STATUS).json(talkerById);
    return res.status(HTTP_FAIL_STATUS).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } catch (error) {
    return res.status(HTTP_FAIL_STATUS).send({
      message: 'error',
    });
  }
});

app.post('/talker',
  authorizationMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware, async (req, res) => {
    const { name, age, talk } = req.body;
    try {
      const talker = await JSON.parse(fs.readFileSync(talkerPath, 'utf-8'));
      const newTalker = { id: talker.length + 1, name, age, talk };
      talker.push(newTalker);
      fs.writeFileSync(talkerPath, JSON.stringify(talker));
      return res.status(HTTP_CREATED).json(newTalker);
    } catch (error) {
      return res.status(HTTP_FAIL_STATUS).send({
        message: 'error',
      });
    }
  });

app.get('/talker', async (req, res) => {
  try {
    const talker = await JSON.parse(fs.readFileSync(talkerPath, 'utf-8'));
    if (talker) {
      return res.status(HTTP_OK_STATUS).json(talker);
    }
    return res.status(HTTP_OK_STATUS).json([]);
  } catch (error) {
    return res.status(HTTP_FAIL_STATUS).send({
      message: 'error',
    });
  }
});

app.post('/login', emailMiddleware, passwordMiddleware, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

// não remova esse endpoint, e para o avaliador funcionara
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
