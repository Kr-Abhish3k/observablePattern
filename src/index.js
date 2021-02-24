import Form from "./components/Form";
import List from "./components/List";
import Count from "./components/Count";
import State from "./lib/State";

//get intial data
import users from "./utils/user";

//hydrate state with initial data
const appState = new State();
appState.update({users});

const userForm = new Form(appState);
const userList = new List();
const userCount = new Count();



userForm.render("add-user-container")
userList.render(appState.getState(),"user-list-container")
userCount.render(appState.getState(),"user-count-container");