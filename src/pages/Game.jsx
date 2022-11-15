import { useContext } from 'react'
import GameContext from '../context/game/GameContext'
import Board from '../components/game/Board'
import Keyboard from '../components/keyboard/Keyboard'
import { loadWords } from '../tools'
import ErrorMessage from '../components/layout/ErrorMessage'

function Game() {
  const { gameOver, dispatch, maxWordLength, allWords } =
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
      payload: buffer,
    })
  }

  const submitWord = (word) => {
    word = word.toLowerCase()

    if (word.length < maxWordLength) {
      setErrorMessage(`Word must be ${maxWordLength} characters long.`)
    }

    if (!allWords.includes(word)) {
      setErrorMessage('Your word does not exist in the dictionary.')
    }



    console.log('submit word', word)
  }

  const setErrorMessage = (message) => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: message,
    })

    setTimeout(() => {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: null,
      })
    }, 3000)
  }

  return (
    <div className='container flex h-full flex-col align-bottom'>
      {!gameOver && (
        <>
          <ErrorMessage />

          <div className='container mx-auto my-10'>
            <Board />
          </div>

          <div className='container bottom-1 mx-auto'>
            <Keyboard
              maxWordLength={maxWordLength}
              updateCallBack={updateCurrentRow}
              submitCallBack={submitWord}
            />
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
