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
    <kbd className={`kbd ${color}`}>
      <span className={`${color}`}>
        {letter !== '' ? letter : ' '}
      </span>
    </kbd>
    // <>
    //   {state === TileStates.None ? (
    //     <kbd className={`kbd ${color}`}>
    //       {letter !== '' ? letter : ' '}
    //     </kbd>
    //   ) : (
    //     <kbd className={`kbd ${color}`}>
    //       {letter !== '' ? letter : ' '}
    //     </kbd>
    //   )}
    // </>
  )
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
}

export default Tile
