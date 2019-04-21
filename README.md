# overwatchleague.js
[!["Latest Release"](https://img.shields.io/github/release/ShaunLWM/OverwatchLeague.js.svg)](https://github.com/ShaunLWM/OverwatchLeague.js/releases/latest)
[!["Latest Release"](https://img.shields.io/npm/v/overwatchleague.js.svg)](https://github.com/ShaunLWM/OverwatchLeague.js/releases/latest)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/ShaunLWM/OverwatchLeague.js/blob/master/LICENSE)

OverwatchLeague API. Inspired by [blizzard.js](https://github.com/benweier/blizzard.js) and [OWLeagueLib](https://github.com/overtools/OWLeagueLib/).

## Install

Install `overwatchleague.js` 

With yarn:

    $ yarn add overwatchleague.js

With npm:

    $ npm install overwatchleague.js --save

## Usage

1. `require()` *overwatchleague.js* within your application:

```javascript
const OWL= require('overwatchleague.js');
```

2. Call the API method of your choice listed below

```javascript
OWL.getSchedule().then(response => {
    console.log(response.data);
});
```
or the async way (node v8 and above)
```javascript
(async () => {
    let players = await OWL.getPlayers();
    console.log(players);
});
```
## Methods
- `getAppData`- Retrieve current app information
- `getSchedule` - Retrieve upcoming matches' schedule
- `getLiveStreams` - Retrieve current live streams
- `getMatch(id)` - Get match's information
- `getMatchStats(mapId, mapNumber)` - Get map information for particular match. [Example](https://api.overwatchleague.com/stats/matches/10528/maps/1): where `10528` is the `matchId` and `1` is the `mapNumber`
- `getTeam(id)` - Get team's information
- `getTeams` - Get all team's information
- `getNews` - Retrieve latest site's news
- `getPlaylistVideos(name)` - Retrieve playlist
- `getRankings` - Retrieve team rankings (games won, games lost, etc)
- `getStandings` - Retrieve team standings (division info, player info, etc)
- `getVideos` - Retrieve VODs
- `getPlayers` - Get overall players' stats
- `getPlayer(id)` - Get player id's information
- `getUpcomingLiveMatches` - Get upcoming live matches
- `getMaps` - Get all maps in pool