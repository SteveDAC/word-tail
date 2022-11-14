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
      color = 'green'
      break

    case TileStates.Incorrect:
      color = 'dimgray'
      break

    case TileStates.Misplaced:
      color = 'gold'
      break

    default:
      color = 'whitesmoke'
      break
  }

  return (
    <>
      {state === TileStates.None ? (
        <kbd className='kbd text-base-content' style={{ backgroundColor: color }}>
          {letter !== '' ? letter : ' '}
        </kbd>
      ) : (
        <kbd className='kbd text-white' style={{ backgroundColor: color }}>
          {letter !== '' ? letter : ' '}
        </kbd>
      )}
    </>
  )
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
}

export default Tile
