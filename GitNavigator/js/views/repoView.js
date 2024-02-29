import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach(({ html_url, name, language }) => {
    markup += `
    <div class="repo-div" for="link-teste">
      <a href="${html_url}" class="repo-url" target="_blank" name="link-teste">
        ${name}
      </a>
      <span class="language">${language}</span> 
    </div> 
    `;
  });

  elements.repos.innerHTML = markup;
};

/*
  antigo
  <div class="div-repo">
      <a href="${html_url}" class="repo-url" target="_blank" >
        ${name}
      </a>    
      <span class="language">${language}</span>               
    </div>
*/