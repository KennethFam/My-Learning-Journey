// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  search(name, email) {
    const res = [];
    if (name) name = name.toLowerCase();
    if (email) email = email.toLowerCase();

    // objects aren't iterable, so you have to use Object.values
    for (const user of Object.values(this.storage)) {
      var userName = (user.firstName + " " + user.lastName).toLowerCase();
      if (name && email) {
        if (userName.includes(name) && user.email.toLowerCase().includes(email)) res.push(user);
      } else if (name) {
        if (userName.includes(name)) res.push(user);
      } else {
        if (user.email.toLowerCase().includes(email)) res.push(user);
      }
    } 

    return res;
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
