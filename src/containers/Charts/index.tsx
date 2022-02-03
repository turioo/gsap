import React from 'react'
import {Wrapper} from "./styles";
import {ColumnRainbow} from "./ColumnRainbow";
import {ColumnBlue} from "./ColumnBlue";
import {RoseChart} from "./Rose";
import {RadialChart} from "./Radial";
import {DonutChart} from "./Donut";

export const Charts = () => {
    return (
        <Wrapper>
            <ColumnRainbow />
            <ColumnBlue />
            <RoseChart />
            <RadialChart />
            <DonutChart />
        </Wrapper>
    )
}