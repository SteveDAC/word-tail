import { useState } from 'react'
import PropTypes from 'prop-types'
import KeyboardButton from './KeyboardButton'

function Keyboard({ maxWordLength, updateCallBack, submitCallBack }) {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter|{ENTER}', 'Z', 'X', 'C', 'V', 'B', 'N', 'Delete|{DELETE}'],
  ]

  const [buffer, setBuffer] = useState('')

  let rowId = 0
  let keyId = 0
  let currentBuffer = buffer

  const onKeyPress = (button) => {
    switch (button) {
      case '{ENTER}':
        submitCallBack(currentBuffer)
        return

      case '{DELETE}':
        if (buffer.length > 0) {
          currentBuffer = currentBuffer.substring(0, currentBuffer.length - 1)
          setBuffer(currentBuffer)
          // setBuffer(buffer.substring(0, buffer.length - 1))
        }
        break

      default:
        if (maxWordLength && currentBuffer.length >= maxWordLength) return
        currentBuffer += button
        setBuffer(currentBuffer)
    }

    updateCallBack(currentBuffer)
  }

  return (
    <div className='container'>
      {keys.map((row) => (
        <div className='my-1 flex w-full justify-center gap-1' key={rowId++}>
          {row.map((key) => (
            <KeyboardButton
              button={key}
              key={keyId++}
              onKeyPress={onKeyPress}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

Keyboard.propTypes = {
  maxWordLength: PropTypes.number,
  updateCallBack: PropTypes.func,
  submitCallBack: PropTypes.func,
}

export default Keyboard
