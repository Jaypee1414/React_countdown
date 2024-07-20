import Challenge from './components/Challenge.jsx';
import Player from './components/Player.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title={"Weak"} targetTime={1}/>
        <Challenge title={"Hard"} targetTime={5}/>
        <Challenge title={"Extreme"} targetTime={10}/>
        <Challenge title={"Pros Only"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
