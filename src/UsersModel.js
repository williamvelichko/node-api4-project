const users = [
  {
    name: "william",
    password: "velichko",
    id: Math.floor(Math.random() * 100),
  },
  {
    name: "jeff",
    password: "gerbet",
    id: Math.floor(Math.random() * 100),
  },
  {
    name: "foo",
    password: "bar",
    id: Math.floor(Math.random() * 100),
  },
];

function get() {
  return Promise.resolve(users);
}

function register(user) {
  user = {
    name: user.name,
    password: user.password,
    id: Math.floor(Math.random() * 100),
  };
  users.push(user);
  return Promise.resolve(user);
}

function login(info) {
  users.find((user, index) => {
    //console.log(user);
    if (info.name === user.name && info.password === user.password) {
      console.log(user);
    } else {
      console.log("wrong info");
    }
  });
}

module.exports = {
  get,
  register,
  login,
};
