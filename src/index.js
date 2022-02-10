const server = require("./Servers");

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}!!!!`);
});
