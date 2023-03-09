/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [{
  name: "Tami",
  age: 21,
  major: "UI/UX"
},{
  name: "Dea",
  age: 20,
  major: "Data"
},
{
  name: "Ammar",
  age: 19,
  major: "Frontend"
},{
  name: "Abie",
  age: 19,
  major: "Cyber"
},{
  name: "Zahra",
  age: 19,
  major: "Desain"
}
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const  all = () => {
  for (const dataUser of users){
    console.log(dataUser);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  users.push(user);
  console.log(users);
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  users[index] = user;
  console.log(users);
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  users.splice(index, 1);
  console.log(users);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq Emuach");
  const newUser = {
    name: "Sabiq Emuach",
    age: 20,
    major: "Teknik Mencintaimu",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Sabiq Emuach");
  const editedIndex = 5;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Isfhani");
  const deletedIndex = 5;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
