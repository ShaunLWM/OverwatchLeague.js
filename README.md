# overwatchleague.js
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
## Methods
- `getAppData`- Retrieve current app information
- `getSchedule` - Retrieve upcoming matches' schedule
- `getLiveStreams` - Retrieve live streams
- `getMatch(id)` - Get match's information
- `getMatchStats(mapId, mapNumber)` - Get map information for particular match. [Example](https://api.overwatchleague.com/stats/matches/10528/maps/1): where `10528` is the `matchId` and `1` is the `mapNumber`
- `getTeam(id)` - Get team's information
- `getNews` - Retrieve latest site's news
- `getPlaylistVideos(name)` - Retrieve playlist
- `getRankings` - Retrieve team rankings (games won, games lost, etc)
- `getStandings` - Retrieve team standings (division info, player info, etc)
- `getVideos` - Retrieve VODs