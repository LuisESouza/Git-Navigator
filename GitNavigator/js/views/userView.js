import { elements } from "./base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  bio,
  user,
  location,
  followers,
}) => {
  const markup = `
  <div class="profile-header">
  <a href="${html_url}"><img src="${avatar_url}"></a>   
  <a href="assets/Curriculo.pdf" download="Curriculo">Curriculo</a>           
</div>   

<div class="profile-info-bio">
  <div class="text-content">
      <div class="content-top">
        <a href="${html_url}">${user}</a>
      </div>     

      <div class="content-bio">
        <p>${bio}</p>
      </div>
  </div>

  
  <div class="profile-info-list">
          <ul>
              <li><img src="assets/location.svg" alt=""> ${location}</li>
              <li><img src="assets/followers.svg" alt=""> - ${followers} Seguidores</li>
          </ul>
  </div>

</div>
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};  
