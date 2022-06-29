const emailMiddleware = (req, res, next) => {
  const { email } = req.body;
  const regex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
  if (!email) {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }
  if (!regex.test(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
};

module.exports = emailMiddleware;
