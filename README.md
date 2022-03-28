# fussball-spiel-paraplegie-test-frontend

Technology used for intergrating Unity: https://www.npmjs.com/package/react-unity-webgl

1. npm install
2. Listen to event "GameFinished" - see App.js for useEffect event registration
3. Get score details scorePlayer and scoreEenemy via event parameter
4. Change react state in event handler

## Note for production use
Despite being the case in this prototype, it is wise to host the game on a dedicated server and NOT bundle it with the frontend build, since the size of the game is massive. The "public" folder contains the game and is in this case only for development purposes.


## Current issues
Since Unity 2020 there is an issue with WebGL containers. When they get unmounted in react, there are still somehow events registered that throw errors in intervals to the console. A workaround is yet to be found.
