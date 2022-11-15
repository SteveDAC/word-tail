import { useContext } from 'react'
import GameContext from '../../context/game/GameContext'

function ErrorMessage() {
  const { errorMessage } = useContext(GameContext)

  return errorMessage && (
    <div className='toast-end toast toast-top my-10'>
      <div className='alert alert-error'>
        <div>
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
