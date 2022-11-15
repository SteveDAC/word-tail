import { useContext } from 'react'
import GameContext from '../context/game/GameContext'
import Board from '../components/game/Board'
import Keyboard from '../components/keyboard/Keyboard'
import { loadWords } from '../tools'
import ErrorMessage from '../components/layout/ErrorMessage'
import { TileStates } from '../components/game/Tile'

function Game() {
  const {
    gameOver,
    dispatch,
    maxWordLength,
    allWords,
    currentRow,
    board,
    correctLetters,
    incorrectLetters,
    targetWord,
  } = useContext(GameContext)

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
    if (gameOver) return

    if (word.length < maxWordLength) {
      setErrorMessage(`Word must be ${maxWordLength} characters long.`, 3000)
      return
    }

    if (!allWords.includes(word)) {
      setErrorMessage('Your word does not exist in the dictionary.', 3000)
      return
    }

    evaluateWord(word)
  }

  const evaluateWord = (word) => {
    let rowId = currentRow
    const currentBoard = board

    let newRow = []

    let currentCorrectLetters = correctLetters
    let currentIncorrectLetters = incorrectLetters
    let currentMisplacedLetters = []
    let availableLetters = targetWord.split('')

    // Init new row
    for (let i = 0; i < word.length; i++) {
      newRow[i] = { state: TileStates.None, letter: word[i] }
    }

    // Check for correct letters
    for (let i = 0; i < word.length; i++) {
      if (word[i] === targetWord[i]) {
        availableLetters.splice(availableLetters.indexOf(word[i]), 1)
        newRow[i].state = TileStates.Correct
        if (!currentCorrectLetters.includes(word[i]))
          currentCorrectLetters.push(word[i])
      }
    }

    // Check for misplaced letters
    for (let i = 0; i < word.length; i++) {
      if (newRow[i].state === TileStates.Correct) continue

      if (availableLetters.includes(word[i])) {
        availableLetters.splice(availableLetters.indexOf(word[i]))
        newRow[i].state = TileStates.Misplaced
        if (!currentMisplacedLetters.includes(word[i]))
          currentMisplacedLetters.push(word[i])
      }
    }

    // Check for incorrect letters
    for (let i = 0; i < word.length; i++) {
      if (newRow[i].state === TileStates.Correct) continue
      if (newRow[i].state === TileStates.Misplaced) continue
      

      newRow[i].state = TileStates.Incorrect
      if (!currentIncorrectLetters.includes(word[i]))
        currentIncorrectLetters.push(word[i])
    }

    currentBoard[rowId] = newRow
    rowId++

    if (rowId > 5) {
      dispatch({ type: 'SET_GAME_OVER', payload: true })
      setErrorMessage(`Nope, the word was ${targetWord}!`)
    }
    if (word === targetWord) {
      dispatch({ type: 'SET_GAME_OVER', payload: true })
      setErrorMessage('You win!')
    }

    dispatch({
      type: 'UPDATE_BOARD',
      payload: currentBoard,
    })

    currentIncorrectLetters = currentIncorrectLetters.filter((l) => !currentCorrectLetters.includes(l))
    currentIncorrectLetters = currentIncorrectLetters.filter((l) => !currentMisplacedLetters.includes(l))

    dispatch({
      type: 'SET_LETTERS',
      payload: {
        correctLetters: currentCorrectLetters,
        incorrectLetters: currentIncorrectLetters,
        misplacedLetters: currentMisplacedLetters,
      }
    })

    dispatch({ type: 'SET_NEXT_ROW', payload: rowId })
  }

  const setErrorMessage = (message, timeout) => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: message,
    })

    if (timeout) {
      setTimeout(() => {
        dispatch({
          type: 'SET_ERROR_MESSAGE',
          payload: null,
        })
      }, timeout)
    }
  }

  return (
    <div className='container flex h-full flex-col align-bottom'>
      {(!gameOver || currentRow !== 0) && (
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
