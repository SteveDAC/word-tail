import PropTypes from 'prop-types'

function KeyboardButton({ button, onKeyPress }) {

  const buttonData = button.split('|');
  const buttonLabel = buttonData[0];
  const buttonKey = buttonData.length === 2 ? buttonData[1] : buttonData[0]


  const onClick = () => {
      onKeyPress(buttonKey)
  }

  return (
    <button
      className='kbd btn bg-base-100 text-base-content hover:bg-neutral hover:text-neutral-content'
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
