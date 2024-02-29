export const elements = {
    profile: document.querySelector(".profile"),
    input: document.querySelector("input"),
    repos: document.querySelector(".repo-list"),
    infoBio: document.querySelector(".profile-bio"),
};

export const clearUI = () => {
    elements.profile.innerHTML = "";
};