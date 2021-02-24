import Form from "./components/Form";
import List from "./components/List";
import Count from "./components/Count";

const userForm = new Form();
const userList = new List();
const userCount = new Count();

userForm.render("add-user-container")
userList.render("user-list-container")
userCount.render("user-list-container");