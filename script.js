const user = {
  firstname: "Sandip",
  lastname: "Deb",
};

Object.defineProperty(user, "fullname", {
  get() {
    return user.firstname + " " + user.lastname;
  },
  set(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
});

user.fullname = "Gaurab Deb";

console.log(user.fullname);
