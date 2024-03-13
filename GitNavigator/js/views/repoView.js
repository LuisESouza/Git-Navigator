import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach(({ html_url, name, language, ower }) => {
    markup += `
    <div class="repo-div">
    <div class="tittle-repo" onclick="window.open('${html_url}', '_blank')">
        <a href="${html_url}" class="repo-url" target="_blank" name="link-teste">
            ${name}
        </a>
    </div>
    
    <div class="text-repo">
        ${bio}
    </div>

    <div class="container-language">
        <span class="language">${language}</span> 
        <a href="/${ower.login}/${name}/archive/refs/heads/main.zip" class="link-download">Download</a>
    </div>
    
  </div>
    `;
  });

  elements.repos.innerHTML = markup;
};