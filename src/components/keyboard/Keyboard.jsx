import KeyboardButton from './KeyboardButton'

function Keyboard() {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter|{ENTER}', 'Z', 'X', 'C', 'V', 'B', 'N', 'Delete|{DELETE}'],
  ]

  let rowId = 0
  let keyId = 0

  const onKeyPress = (button) => {
    console.log(button)
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

export default Keyboard
