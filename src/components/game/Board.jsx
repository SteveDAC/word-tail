import { useContext } from 'react'
import GameContext from '../../context/game/GameContext'
import Row from './Row'

function Board() {
  const { board } = useContext(GameContext)

  let rowId = 0

  return (
    <>
      <div className='outline-1 outline outline-base-300 rounded-lg mx-auto w-fit shadow-lg'>
        <div className='div card-body w-fit'>
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
