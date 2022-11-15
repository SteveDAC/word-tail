import PropTypes from 'prop-types'
import { useContext } from 'react'
import GameContext from '../../context/game/GameContext'

function KeyboardButton({ button, onKeyPress }) {
  const { correctLetters, incorrectLetters, misplacedLetters } =
    useContext(GameContext)

  const buttonData = button.split('|')
  const buttonLabel = buttonData[0]
  const buttonKey = buttonData.length === 2 ? buttonData[1] : buttonData[0]

  const onClick = () => {
    onKeyPress(buttonKey)
  }

  // console.log('correctLetters: ', correctLetters)
  // console.log('incorrectLetters: ', incorrectLetters)
  // console.log('misplacedLetters: ', misplacedLetters)

  let color = '';
  if (correctLetters.includes(buttonKey)) {
    color = 'bg-tileStateCorrect text-white hover:bg-neutral hover:text-neutral-content'
  } else if (incorrectLetters.includes(buttonKey)) {
    color = 'bg-tileStateIncorrect text-white hover:bg-neutral hover:text-neutral-content'
  } else if (misplacedLetters.includes(buttonKey)) {
    color = 'bg-tileStateMisplaced text-white hover:bg-neutral hover:text-neutral-content'
  } else {
    color = 'bg-base-100 text-base-content hover:bg-neutral hover:text-neutral-content'
  }


  return (
    <button
      className={`kbd btn ${color}`}
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  )
}

KeyboardButton.propTypes = {
  button: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
}

export default KeyboardButton
