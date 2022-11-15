import { initialBoard } from './GameContext'
import { getRandomInt } from '../../tools'
import { TileStates } from '../../components/game/Tile'

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return {
        ...state,
        board: action.payload,
      }

    case 'INIT_NEW_GAME':
      return {
        ...state,
        board: initialBoard,
        allWords: [],
        targetWords: [],
        targetWord: '',
        maxWordLength: 5,
        gameOver: false,
        currentRow: 0,
      }

    case 'SET_WORDS':
      const targetWords = action.payload.targetWords

      return {
        ...state,
        targetWords,
        allWords: action.payload.allWords,
        targetWord: targetWords[getRandomInt(0, targetWords.length)],
      }

    case 'SET_TARGET_WORD':
      return {
        ...state,
        targetWord: action.payload,
      }

    case 'UPDATE_CURRENT_ROW':
      let newBoard = state.board
      let currentRow = state.currentRow
      let maxWordLength = state.maxWordLength
      let buffer = action.payload

      for (let i = 0; i < maxWordLength; i++) {
        if (i >= buffer.length) {
          newBoard[currentRow][i] = { state: TileStates.None, letter: '\u00A0' }
        } else {
          newBoard[currentRow][i] = {
            state: TileStates.None,
            letter: buffer[i],
          }
        }
      }

      return {
        ...state,
        board: newBoard,
      }

    default:
      return state
  }
}

export default gameReducer
