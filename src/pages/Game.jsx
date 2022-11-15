// import { useContext } from 'react'
// import GameContext from '../context/game/GameContext'
import Board from '../components/game/Board'
import Keyboard from '../components/keyboard/Keyboard'

function Game() {
  // const { gameOver } = useContext(GameContext)

  // const testSettingLetter = (e) => {
  //   let newBoard = board
  //   newBoard[2][4] = {
  //     state: TileStates.Incorrect,
  //     letter: 'S',
  //   }

  //   dispatch({
  //     type: 'UPDATE_BOARD',
  //     payload: newBoard,
  //   })
  // }

  return (
    <div className='container align-bottom flex flex-col'>
      <div className='container mx-auto my-10'>
        <Board />
      </div>

      <div className='container mx-auto'>
        <Keyboard />
      </div>
    </div>
  )
}

export default Game
