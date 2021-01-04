import React from 'react';

import { 
    Container,
    Header,
    LegendContainer,
    Legend,
    ChartArea
} from './styles';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';

import formatCurrent from '../../util/formatCurrent'

interface IHistoryBoxProps {
    data: {
        month: string,
        amountEntry: number;
        amountOutput: number;
        amountTot: number;
    }[],
    lineColorAmountEntry: string,
    lineColorAmountOutput: string,
    lineColorAmountTot: string,
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput,
    lineColorAmountTot
}) => {
    return(
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <Legend color={lineColorAmountEntry}>
                        <div>{}</div>
                        <span>Entrada</span>
                    </Legend>
                    <Legend color={lineColorAmountOutput}>
                        <div>{}</div>
                        <span>Saída</span>
                    </Legend>
                    <Legend color={lineColorAmountTot}>
                        <div>{}</div>
                        <span>Total</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ChartArea>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#cecece'/>
                        <XAxis dataKey='month' stroke='#cecece'/>
                        <Tooltip formatter={(value) => formatCurrent(Number(value))}/>
                        <Line 
                            type='monotone'
                            dataKey='amountEntry'
                            name='Entradas'
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r:8}}
                        />
                        <Line 
                            type='monotone'
                            dataKey='amountOutput'
                            name='Saídas'
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r:8}}
                        />
                        <Line 
                            type='monotone'
                            dataKey='amountTot'
                            name='Saldo total'
                            stroke={lineColorAmountTot}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r:8}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartArea>
        </Container>
    )
}

export default HistoryBox;