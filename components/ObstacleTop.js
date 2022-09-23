import Matter from 'matter-js'
import React from 'react'
import { Image, View } from 'react-native'

const ObstacleTop = props => {
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
                height: heightBody,
            }}>
            <Image
            style={{
                position: 'absolute',
                bottom: 0,
            }}
                source={require('../assets/pipeTop.png')}
            />
        </View>
    )
}

export default (world, label, pos, size) => {
    const initialObstacleTop = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
    )
    Matter.World.add(world, initialObstacleTop)

    return {
        body: initialObstacleTop,
        pos,
        renderer: <ObstacleTop />
    }
}
