import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" time={1} />
        <TimerChallenge title="Not easy" time={5} />
        <TimerChallenge title="Getting Hard" time={10} />
        <TimerChallenge title="Pros Only" time={15} />
      </div>
    </>
  );
}

export default App;
