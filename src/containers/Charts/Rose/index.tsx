import React from 'react'
import { Rose } from '@ant-design/plots';
import {Wrapper} from "./styles";

export const RoseChart = () => {
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
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        label: {
            content: '',
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
    };
    return (
        <Wrapper>
            <Rose {...config} />
        </Wrapper>
    )
}