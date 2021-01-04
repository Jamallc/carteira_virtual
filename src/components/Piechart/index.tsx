import React from 'react';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts'

import { 
    Container,
    SideRight,
    SideLeft,
    LegendContainer,
    Legend
} from './styles'

interface IPiechartProps {
    Idata: {
        name: string,
        value: number,
        percent: number, 
        color: string
    }[];
}

const Piechart: React.FC<IPiechartProps> = ({ Idata }) => (
    <Container>
        <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {
                        Idata.map(indicator =>(
                        <Legend key={indicator.name} color={indicator.color}>
                        <div>{indicator.percent}%</div>
                        <span>{indicator.name}</span>
                        </Legend>
                        ))
                    }

                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            data={Idata}
                            dataKey='percent'
                        >
                            {
                                    Idata.map(indicator => (
                                    <Cell 
                                        key={indicator.name}
                                        fill={indicator.color}
                                    />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
    </Container>
)

export default Piechart;