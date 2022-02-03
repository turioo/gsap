import React from 'react'
import { Column } from '@ant-design/plots';
import {Wrapper} from "./styles";

export const ColumnRainbow = () => {
    const data = [
        {
            type: '1',
            value: 0.16,
        },
        {
            type: '2',
            value: 0.125,
        },
        {
            type: '3',
            value: 0.24,
        },
        {
            type: '4',
            value: 0.19,
        },
        {
            type: '5',
            value: 0.22,
        },
        {
            type: '6',
            value: 0.05,
        },
        {
            type: '7',
            value: 0.01,
        },
        {
            type: '8',
            value: 0.24,
        },
        {
            type: '9',
            value: 0.24,
        },
        {
            type: '10',
            value: 0.29,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        columnWidthRatio: 0.4,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        color: (colorData) => {
            if (colorData.type >= 1 &&  colorData.type < 3) {
                return 'l(270) 0:#FF626C 1:#FF7523';
            }
            if (colorData.type >= 3 &&  colorData.type < 5) {
                return 'l(270) 0:#FF7523 1:#FFF35B';
            }
            if (colorData.type >= 5 &&  colorData.type < 8) {
                return 'l(270) 1:#FFFA7B 0:#56E076';
            }
            if (colorData.type >= 8 ) {
                return 'l(270) 1:#AAFF7B 0:#56E076';
            }
            return 'l(270) 0:#FF7523 1:#58ff00';
        },
    };
    return (
        <Wrapper>
            <Column {...config} />
        </Wrapper>
    )
}