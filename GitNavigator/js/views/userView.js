import { elements } from "./base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  bio,
  user,
}) => {
  const markup = `
  <div class="profile-header">
    <a href="${html_url}"><img src="${avatar_url}"></a>   
    <a href="assets/Curriculo.pdf" download="Curriculo">Curriculo</a>           
  </div>   

<div class="profile-bio">
  <div class="content-top">
      <a href="${html_url}">${user}</a>
  </div>

  <div class="content-bio">
      <p>${bio}</p>
  </div>               
</div>
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};  
