// Callback Hell example
// 가독성이 매우 떨어짐
// 콜백 체인이 길수록, 디버깅하고 문제를 파악하는데 어려움이 있음.
// 코드 유지 보수가 어려움.

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
//           resolve(id);
//         } else {
//           reject(new Error("not found"));
//         }
//       }, 2000);
//     });
//   }

//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === "ellie") {
//           resolve({ name: "ellie", role: "admin" });
//         } else {
//           reject(new Error("no access"));
//         }
//       }, 1000);
//     });
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
