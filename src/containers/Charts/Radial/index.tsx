import React from 'react'
import { RadialBar } from '@ant-design/plots';
import {Wrapper} from "./styles";

export const RadialChart = () => {
    const data = [
        {
            name: 'X6',
            star: 297,
        },
        {
            name: 'G',
            star: 506,
        },
        {
            name: 'AVA',
            star: 805,
        },
    ];
    const config = {
        data,
        height:150,
        xField: 'name',
        yField: 'star',
        maxAngle: 270,
        radius: 0.8,
        innerRadius: 0.6,
        colorField: 'name',
        color: (colorData) => {
            if (colorData.name === 'X6' ) {
                return 'l(300) 0:#FF626C 1:#FF7523';
            }
            if (colorData.name === 'G' ) {
                return 'l(270) 0:#FFF35B 1:#FF7523';
            }
            if (colorData.name === 'AVA' ) {
                return 'l(180) 0:#AAFF7B 1:#56E076';
            }
            return 'l(0) 0:#FF7523 1:#58ff00';
        },
    };
    return (
        <Wrapper>
            <RadialBar {...config} />
        </Wrapper>
    )
}