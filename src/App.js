import './App.css';
import {useEffect, useState} from "react";
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:  "/game/Build/WebGL.loader.js",
  dataUrl: "/game/Build/WebGL.data",
  frameworkUrl: "/game/Build/WebGL.framework.js",
  codeUrl: "/game/Build/WebGL.wasm",
});

function App() {

  const [pageState, setPageState] = useState("gameRunning");
  const [scorePlayer, setScorePlayer] = useState();
  const [scoreEnemy, setScoreEnemy] = useState();

  unityContext.setFullscreen(true);

  useEffect(function () {
    unityContext.on("GameFinished", function (scorePlayer, scoreEnemy) {
      setScorePlayer(scorePlayer);
      setScoreEnemy(scoreEnemy);
      unityContext.quitUnityInstance().then(
          () => setPageState("gameFinished")
      );
    });
  }, []);

  useEffect(function () {
    unityContext.on("Minimize", function () {
      console.log("MinimizeEvent");
      unityContext.setFullscreen(false);
    });
  }, []);

  return (
      <div className="App">
        {pageState === "gameRunning" && <Unity unityContext={unityContext}
                                               style={{
                                                 height: 720,
                                                 width: 1280,
                                               }}/>}
        {pageState === "gameFinished" && <p>{`Game Over! Player: ${scorePlayer} - Enemy: ${scoreEnemy}`}</p>}
      </div>
  );
}

export default App;
