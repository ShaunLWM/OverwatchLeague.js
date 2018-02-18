var axios = require('axios');

var OverwatchLeague = function OverwatchLeague() {
    this.axios = axios.create({
        baseURL: 'https://api.overwatchleague.com/',
    });
};

OverwatchLeague.prototype.getAppData = function fetchToken(origin, params) {
    return this.axios.get('about');
};

OverwatchLeague.prototype.getSchedule = function () {
    return this.axios.get('schedule');
};

OverwatchLeague.prototype.getLiveStreams = function () {
    return this.axios.get('streams');
};

OverwatchLeague.prototype.getMatch = function (id) {
    return this.axios.get('match/' + id);
};

OverwatchLeague.prototype.getTeam = function (id) {
    return this.axios.get('team/' + id);
};

OverwatchLeague.prototype.getNews = function () {
    return this.axios.get('news');
};

OverwatchLeague.prototype.getPlaylistVideos = function (name) { // todo: are we the app?
    return this.axios.get('playlist/' + name);
};

OverwatchLeague.prototype.getRankings = function () {
    return this.axios.get('ranking');
};

OverwatchLeague.prototype.getStandings = function () {
    return this.axios.get('standings');
};

OverwatchLeague.prototype.getVideos = function () {
    return this.axios.get('vods');
};

module.exports = new OverwatchLeague();