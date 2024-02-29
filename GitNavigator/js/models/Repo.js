class Repo {
    constructor(repo_url) {
      this.repo_url = repo_url;
    }
  
    async getRepositories() {
      try {
        const response = await fetch(this.repo_url);
        this.repos = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export { Repo };