import React from 'react'
import { Pie } from '@ant-design/plots';
import {Wrapper} from "./styles";

export const DonutChart = () => {
    const data = [
        {
            type: '1',
            value: 0.42,
        },
        {
            type: '2',
            value: 0.40,
        },
        {
            type: '3',
            value: 0.34,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.7,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        color: (colorData) => {
            if (colorData.type === '1' ) {
                return 'l(270) 0:#FFF35B 1:#FF7523';
            }
            if (colorData.type === '2' ) {
                return 'l(180) 0:#AAFF7B 1:#56E076';
            }
            if (colorData.type === '3' ) {
                return 'l(300) 0:#FF626C 1:#FF7523';
            }
            return 'l(0) 0:#FF7523 1:#58ff00';
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
    };
    return (
        <Wrapper>
            <Pie {...config} />
        </Wrapper>
    )
}