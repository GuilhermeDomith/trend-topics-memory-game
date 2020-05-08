const Utils = {
    shuffleArray: (array) => array.sort(() => 0.5 - Math.random()),
    duplicateArray: (array) => [...array, ...array],
}

export default Utils;