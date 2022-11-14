import { useContext } from 'react'
import GameContext from '../context/game/GameContext'
import Board from '../components/game/Board'
import Row from '../components/game/Row'
import Tile from '../components/game/Tile'
import { TileStates } from '../components/game/Tile'

function Game() {
  const { board, dispatch } = useContext(GameContext)

  let rowId = 0
  let tileId = 0

  const testSettingLetter = (e) => {
    let newBoard = board
    newBoard[2][4] = {
      state: TileStates.Incorrect,
      letter: 'S',
    }

    dispatch({
      type: 'UPDATE_BOARD',
      payload: newBoard,
    })
  }

  return (
    <div className='container mx-auto my-10 h-full'>
      <Board />
    </div>
  )
}

export default Game
