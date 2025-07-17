function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "Karan" });
    }, 1000);
  });
}

fetchUser(1)
  .then((user1) => console.log(user)) // { id: 1, name: 'Karan' }
  .catch((err) => console.log(err));
