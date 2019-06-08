const axios = require("axios");
class OverwatchLeague {
    constructor(locale = "en_US") {
        this.axios = axios.create({
            baseURL: "https://api.overwatchleague.com/",
            params: {
                locale
            }
        });
    }

    getAppData() {
        return this.axios.get("about");
    };

    getSchedule() {
        return this.axios.get("schedule");
    };

    getLiveStreams() {
        return this.axios.get("streams");
    };

    getMatch(id) {
        return this.axios.get(`match/${id}`);
    };

    getTeam(id) {
        return this.axios.get(`team/${id}`);
    };

    getTeams() {
        return this.axios.get(`teams?expand=team.content&locale=en_US`);
    };

    getNews() {
        return this.axios.get("news");
    };

    getPlaylistVideos(name) { // todo: are we the app?
        return this.axios.get(`playlist/${name}`);
    };

    getRankings() {
        return this.axios.get("ranking");
    };

    getStandings() {
        return this.axios.get("standings");
    };

    getVideos() {
        return this.axios.get("vods");
    };

    getMatchStats(matchId, mapNumber) {
        return this.axios.get(`stats/matches/${matchId}/maps/${mapNumber}`);
    };

    getPlayers() {
        return this.axios.get("stats/players");
    };

    getPlayer(id) {
        return this.axios.get(`players/${id}?expand=stats,stats.ranks`);
    };

    getUpcomingLiveMatches() {
        return this.axios.get("live-match?expand=team.content&locale=en-us");
    };

    getMaps() {
        return this.axios.get("maps");
    };
}

module.exports = OverwatchLeague;