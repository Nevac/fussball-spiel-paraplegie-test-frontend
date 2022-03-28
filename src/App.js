import logo from './logo.svg';
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

  useEffect(function () {
    unityContext.on("GameFinished", function (scorePlayer, scoreEnemy) {
      setScorePlayer(scorePlayer);
      setScoreEnemy(scoreEnemy);
      setPageState("gameFinished");
      console.log("Score");
    });
  }, []);


  return (
    <div className="App">
        {pageState === "gameRunning" && <Unity unityContext={unityContext}
        style={{
          height: 405,
          width: 720,
          border: "2px solid black",
          background: "grey",
        }}/>}
        {pageState === "gameFinished" && <p>{`Game Over! Player: ${scorePlayer} - Enemy: ${scoreEnemy}`}</p>}
    </div>
  );
}

export default App;
