import { User } from "./models/User.js";
import { Repo } from "./models/Repo.js";

import * as userView from "./views/userView.js";
import * as repoView from "./views/repoView.js";

import { clearUI, elements } from "./views/base.js";

const state = {};

const controlRepositories = async (url) => {
  try {
    state.repositories = new Repo(url);

    await state.repositories.getRepositories();

    repoView.renderRepositories(state.repositories.repos);
  } catch (error) {
    console.log(error);
  }
};

const controlSearch = async (event) => {
  event.preventDefault();

  try {
    const searched = elements.input.value;

    state.user = new User(searched);

    await state.user.getUser();

    clearUI();
    userView.renderUser(state.user);
    
    await controlRepositories(state.user.repos_url);

    elements.input.value = "";
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("submit", controlSearch);
window.addEventListener("load", controlSearch);