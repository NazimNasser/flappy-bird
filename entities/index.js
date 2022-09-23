import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { Dimensions } from "react-native";
import ObstacleTop from "../components/ObstacleTop";
import ObstacleBottom from "../components/ObstacleBottom";
import { getPipeSizePosPair } from "../utils/random";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })
    let world = engine.world

    world.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)

    return {
        physics: { engine, world },

        Bird: Bird(world, { x: 50, y: 300 }, { height: 45, width: 70 }),

        ObstacleTop1: ObstacleTop(world, 'ObstacleTop1', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: ObstacleBottom(world, 'ObstacleBottom1', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

        ObstacleTop2: ObstacleTop(world, 'ObstacleTop1', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: ObstacleBottom(world, 'ObstacleBottom1', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

        Floor: Floor(world, { x: windowWidth / 2, y: windowHeight }, { height: 120, width: windowWidth })
    }
}