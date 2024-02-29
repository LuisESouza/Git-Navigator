import { elements } from "./base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  bio,
  user,
}) => {
  const markup = `
        <div class="profile-header">
          <h2 style="text-align: center;">${user}</h2>
        <div class="name-tittle">

        </div>
        <img src="${avatar_url}">
        <a href="${html_url}" target="_blank">Visitar perfil</a>
        </div>   

        <div class="profile-bio">
          <p>${bio}</p>
        </div>
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};  
