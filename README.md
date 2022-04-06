# fussball-spiel-paraplegie-test-frontend

Technology used for intergrating Unity: https://www.npmjs.com/package/react-unity-webgl

1. npm install
2. Listen to event "GameFinished" - see App.js for useEffect event registration
3. Get score details scorePlayer and scoreEenemy via event parameter
4. Quit the application react side [1]
5. Change react state in event handler after application is quitted

## Note for production use
Despite being the case in this prototype, it is wise to host the game on a dedicated server and NOT bundle it with the frontend build, since the size of the game is massive. The "public" folder contains the game and is in this case only for development purposes.


## Notes
[1] Despite the documentation on react-unity-webgl, the container is not able to catch events when Unity itself quits the game (specifically, the "quitted" event that should be fired by the react-unity-webgl container does not work). In order to quit the game properly, a custom event can be thrown from Unity that is catched by the react container. In the event function, the unityContext can quit the unity application and after unmount the react-unity-webgl component properly. If the unity instance in the container isnt quitted before unmounting, errors will occur.