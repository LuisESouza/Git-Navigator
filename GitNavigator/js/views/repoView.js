import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach(({ html_url, name, language, description, owner }) => {
    markup += `
    <div class="repo-div">
    <div class="tittle-repo" onclick="window.open('${html_url}', '_blank')">
        <a href="${html_url}" class="repo-url" target="_blank" name="link-teste">
            <h3>${name}</h3>
        </a>
    </div>
    
    <div class="text-repo">
       ${description}
    </div>

    <div class="container-language">
        <span class="language">${language}</span> 
        <a href="https://github.com/${owner.login}/${name}/archive/refs/heads/main.zip" class="link-download">Download</a>
    </div>
    
  </div>
    `;
  });

  elements.repos.innerHTML = markup;
};