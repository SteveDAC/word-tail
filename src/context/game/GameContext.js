import { createContext, useReducer } from 'react'
import gameReducer from './GameReducer'
import { TileStates } from '../../components/game/Tile'

const GameContext = createContext()

const defaultLetter = '\u00A0';

export const initialBoard = () => [
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
  [
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
    { state: TileStates.None, letter: defaultLetter },
  ],
]

export const GameProvider = ({ children }) => {
  const initialState = {
    targetWords: [],
    allWords: [],
    gameOver: true,
    targetWord: '',
    maxWordLength: 5,
    currentRow: 0,
    errorMessage: null,
    correctLetters: [],
    incorrectLetters: [],
    misplacedLetter: [],
    buffer: '',
    board: initialBoard(),
  }
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext