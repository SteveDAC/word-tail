import { useContext } from 'react'
import GameContext from '../context/game/GameContext'
import Board from '../components/game/Board'
import Keyboard from '../components/keyboard/Keyboard'
import { loadWords } from '../tools'

function Game() {
  const { gameOver, dispatch, maxWordLength } =
    useContext(GameContext)

  const initNewGame = () => {
    dispatch({ type: 'INIT_NEW_GAME' })

    const setWords = async () => {
      const words = await loadWords()
      dispatch({
        type: 'SET_WORDS',
        payload: words,
      })
    }

    setWords()
  }

  const updateCurrentRow = (buffer) => {
    dispatch({
      type: 'UPDATE_CURRENT_ROW',
      payload: buffer
    })

    console.log(buffer)
  }

  return (
    <div className='container flex h-full flex-col align-bottom'>
      {!gameOver && (
        <>
          <div className='container mx-auto my-10'>
            <Board />
          </div>

          <div className='container bottom-1 mx-auto'>
            <Keyboard maxWordLength={maxWordLength} callBack={updateCurrentRow} />
          </div>
        </>
      )}

      {gameOver && (
        <>
          <button
            className='btn-primary btn mx-auto my-auto text-3xl'
            onClick={initNewGame}
          >
            New Game
          </button>
        </>
      )}
    </div>
  )
}

export default Game
