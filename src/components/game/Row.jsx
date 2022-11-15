import PropTypes from 'prop-types'
import { useContext } from 'react'
import GameContext from '../../context/game/GameContext'
import Tile from './Tile'

function Row({ rowId }) {
  const { board } = useContext(GameContext)

  let tileId = 0

  return (
    <div className='mx-auto space-x-2 m-1'>
      {board[rowId].map((tile) => (
        <Tile key={tileId++} state={tile.state} letter={tile.letter} />
      ))}
  </div>
  )
}

Row.propTypes = {
  rowId: PropTypes.number.isRequired,
}

Row.defaultProps = {
  rowId: 0,
}

export default Row
