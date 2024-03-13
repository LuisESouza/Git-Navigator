class User {
  constructor(user) {
    this.user = user;
  }

  async getUser() {
    try {
      const apiUrl = `https://api.github.com/users/${this.user}`;
      const apiUrlRepo = `https://api.github.com/users/${this.user}/repos`;
      
      const response = await fetch(apiUrl);
      const result = await response.json();

      this.bio = result.bio;
      this.avatar_url = result.avatar_url;
      this.followers = result.followers;
      this.following = result.following;
      this.public_repos = result.public_repos;
      this.html_url = result.html_url;
      this.language = result.language;
      this.location = result.location;
      this.repos_url = apiUrlRepo;
    } catch (error) {
      console.log(error);
    }
  }
}

export { User };