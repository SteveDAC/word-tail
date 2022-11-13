import { createContext, useReducer } from 'react'
import gameReducer from './GameReducer'
import { TileStates } from '../../components/game/Tile'

const GameContext = createContext()

const defaultLetter = '\u00A0';

export const GameProvider = ({ children }) => {
  const initialState = {
    gameOver: false,
    targetWord: 'AUDIO',
    board: [
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
    ],
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