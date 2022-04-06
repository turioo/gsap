import React from 'react'
import {Chart, Tooltip, Wrapper, TooltipDate, TooltipResult, TooltipMentions} from "./styles";
import {Area} from '@ant-design/plots';
import {data} from "./data";


export const Stress = () => {

    const showTip = (data) => {
        alert(data)
    }
    const config = {
        data,
        height: 300,
        xField: 'time',
        yField: 'value',
        smooth: false,
        yAxis: {
            max: 112,
            // label: null
        },
        xAxis: {
            tickLine: null,
        },
        point: {
            size: 3,
            style: {
                fill: '#3DF317',
                lineWidth: 0,
            },
        },
        line: {
            color: 'l(90) 0.17:rgba(255, 0, 0, 0.8) 0.28:rgba(241, 205, 17, 0.8) 0.48:rgba(196, 241, 17, 0.8) 1:rgba(0, 243, 24, 0.8)',
        },
        areaStyle: () => {
            return {
                fill: 'l(90) 0.17:#FF0000 0.28:#F1CD11 0.48:#C4F111 1:#00F318',
                fillOpacity: 0.1
            };
        },
        tooltip: {
            enterable: true,
            fields: ['time', 'date', 'value'],
            marker: {
                fontSize: 50,
                fill: 'l(90) 0:#E164BC 0.53:#FF9FD1 1:#FFB790',
                width: 20,
                height: 20,
            },
            customContent: (title, items) => {
                const data = items[0]?.data || {};
                return <Tooltip>
                    <TooltipDate>{data.date}</TooltipDate>
                    <TooltipResult>{data.value}</TooltipResult>
                    <TooltipMentions onClick={() => showTip(data.date)}>Читать заметку</TooltipMentions>
                </Tooltip>
            }
        },
        animation: {
            appear: {
                duration: 2000,
            },
        },
    };


    return (
        <Wrapper>
            <Chart>
                {/*@ts-ignore*/}
                <Area  {...config} />
            </Chart>
        </Wrapper>

    )
}