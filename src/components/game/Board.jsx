import { useContext } from 'react'
import GameContext from '../../context/game/GameContext'
import Row from './Row'

function Board() {
  const { board } = useContext(GameContext)
  let rowId = 0

  return (
    <>
      <div className='flex flex-auto'>
        <div className='mx-auto my-5 outline outline-1 outline-base-300 rounded-xl shadow-md p-10'>
          {board.map((row) => (
            <div key={rowId}>
              <Row rowId={rowId++} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Board
