const Setting = (props) => {
  const { isStarted, dimension, playerType, setDimension, setPlayerType } = props;
  return (
    <div className="setting">
      <div>
        Dimension: <select disabled={isStarted} value={dimension} onChange={(evt) => setDimension(parseInt(evt.target.value))}>
          <option value="3">3 * 3</option>
          <option value="4">4 * 4</option>
        </select>
      </div>
      <div className="player-setting">
        Players: <select disabled={isStarted} value={playerType} onChange={(evt) => {setPlayerType(parseInt(evt.target.value))}}>
          <option value="0">2 player</option>
          <option value="1">3 player</option>
        </select>
      </div>
    </div>
  );
  
}

export default Setting;