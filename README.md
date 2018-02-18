# owl.js
OverwatchLeague API. Inspired by [blizzard.js](https://github.com/benweier/blizzard.js) and [OWLeagueLib](https://github.com/overtools/OWLeagueLib/).

## Install

Install `owl.js` 

With yarn:

    $ yarn add owl.js

With npm:

    $ npm install owl.js --save

## Usage

1. `require()` *owl.js* within your application:

```javascript
const OWL= require('owl.js');
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
- `getTeam(id)` - Get team's information
- `getNews` - Retrieve latest site's news
- `getPlaylistVideos(name)` - Retrieve playlist
- `getRankings` - Retrieve team rankings (games won, games lost, etc)
- `getStandings` - Retrieve team standings (division info, player info, etc)
- `getVideos` - Retrieve VODs