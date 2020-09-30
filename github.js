export default class Github {
    constructor() {
        this.client_id = 'c7a62ad0e48ac7f4516c';
        this.client_secret = 'cc9780bf50978389dd603823f9f24addba412b82';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();

        return {
            profile: profileData,
            repos: reposData
        };
    }
}
