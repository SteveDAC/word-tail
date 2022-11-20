import PropTypes from 'prop-types'

export const TileStates = {
  None: 0,
  Correct: 1,
  Incorrect: 2,
  Misplaced: 3,
}

function Tile({ letter, state }) {
  let color = 'red'
  switch (state) {
    case TileStates.Correct:
      color = 'bg-tileStateCorrect text-white'
      break

    case TileStates.Incorrect:
      color = 'bg-tileStateIncorrect text-white'
      break

    case TileStates.Misplaced:
      color = 'bg-tileStateMisplaced text-white'
      break

    default:
      color = 'bg-tileStateNone text-base-content'
      break
  }

  return (
      
      <div className={`kbd kbd-lg ${color} p-1`} style={{color: (state === TileStates.None) ? '' : 'white', width: '45px', height: '45px'}}>
        {letter !== '' ? letter : ' '}
      </div>

  )
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
}

export default Tile
