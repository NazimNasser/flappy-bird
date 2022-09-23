import { Dimensions } from "react-native"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getPipeSizePosPair = (addToPosx = 0) => {
    let yPosTop = -getRandom(300, windowHeight - 100)

    const pipeTop = { pos: { x: windowWidth + addToPosx, y: yPosTop }, size: { height: windowHeight * 2, width: 110 } }
    const pipeBottom = { pos: { x: windowWidth + addToPosx, y: windowHeight * 2 + 200 + yPosTop }, size: { height: windowHeight * 2, width: 110 } }

    return {pipeTop, pipeBottom}
}