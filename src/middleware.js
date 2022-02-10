function validateRegistration(req, res, next) {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(404).json({ message: "missing name or password" });
  } else {
    next();
  }
}

module.exports = {
  validateRegistration,
};
