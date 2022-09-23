import Matter from 'matter-js'
import React from 'react'
import { Image, View } from 'react-native'

const ObstacleBottom = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <View
            style={{
                position: 'absolute',
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody
            }}>
            <Image
                source={require('../assets/pipeBottom.png')}
            />
        </View>
    )
}

export default (world, label, pos, size) => {
    const initialObstacleBottom = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
    )
    Matter.World.add(world, initialObstacleBottom)

    return {
        body: initialObstacleBottom,
        pos,
        renderer: <ObstacleBottom />
    }
}
