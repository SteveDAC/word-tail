import { useContext } from 'react'
import GameContext from '../context/game/GameContext'
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
      letter: 'S'
    }

    dispatch({
      type: 'UPDATE_BOARD',
      payload: newBoard
    })
  }

  return (
    <>
      <div className='container mx-auto my-10 h-full'>
        <div class='card glass mx-auto w-fit'>
          <div className='div card-body w-fit'>
            {board.map((row) => (
              <div key={rowId++} className='mx-auto space-x-2'>
                {row.map((tile) => (
                  <Tile
                    key={tileId++}
                    state={tile.state}
                    letter={tile.letter}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <button className='btn' onClick={testSettingLetter}>
          Test
        </button>
      </div>
    </>
  )
}

export default Game
