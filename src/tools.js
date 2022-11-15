export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const loadWords = async () => {
  const [targetWords, allWords] = await Promise.all([
    (await (await fetch('allTargetWords.txt')).text()).split('\r\n'),
    (await (await fetch('allWords.txt')).text()).split('\r\n'),
  ])

  return { targetWords: targetWords, allWords: allWords }
}
