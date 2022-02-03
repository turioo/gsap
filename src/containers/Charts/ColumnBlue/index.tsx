import React from 'react'
import { Column } from '@ant-design/plots';
import {Wrapper} from "./styles";

export const ColumnBlue = () => {
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
        columnBackground: {
            style: {
                fill: 'rgba(0,0,0,0.1)',
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        color: (colorData) => {
            return 'l(290) 0:#3EBFED 0.5:#7AEBF5 1:#78FFF2';
        },
    };
    return (
        <Wrapper>
            <Column {...config} />
        </Wrapper>
    )
}