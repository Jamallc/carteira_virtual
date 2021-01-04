import React, { useMemo, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import listOfMonths from '../../util/months'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

import WalletBox from '../../components/walletBox'
import MenssageBox from '../../components/MenssageBox'
import Piechart from '../../components/Piechart'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import shockedImg from '../../assets/shocked.svg'

import { 
    Container,
    Content,
} from './styles'
import HistoryBox from '../../components/HistoryBox'
import BarChartBox from '../../components/BarChartBox'


const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() +1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        
        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })
    },[]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
        
    },[]);


    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === Number(monthSelected) && year === Number(yearSelected)) {
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount most be number')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === Number(monthSelected) && year === Number(yearSelected)) {
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount most be number')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses])

    const menssage = useMemo(() => {
        if(totalBalance < 0){
            return {
                title:'Que triste!',
                description:'Neste mês, você gastou mais do que deveira.',
                footerDescription:'Cuidado com seus gastos, tente cortar algumas coisas desnecesárias!',
                icon: sadImg
            }
        } else if(totalBalance === 0){
            return {
                title:'Ufaa!',
                description:'Neste mês, você gastou exatamente a quantia que recebeu.',
                footerDescription:'Bateu na trave, é sábio fazer economias para momentos realmente necessários!',
                icon: shockedImg
            }
        } else {
            return {
                title:'Muito bom!',
                description:'Sua carteira está positiva',
                footerDescription:'Continue assim! Considere investir seu saldo.',
                icon:happyImg
            }
        }
    }, [totalBalance])

    const relationExpensesVersusGains = useMemo (() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains * 100) / total).toFixed(1))
        const percentExpenses = Number(((totalExpenses * 100) / total).toFixed(1))

        const Idata = [
            {
                name: 'entradas',
                value: totalGains,
                percent: percentGains ? percentGains : 0, 
                color: '#ffb821'
            },
            {
                name: 'saídas',
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0, 
                color: '#dd3737'
            }
        ]

        return Idata;

    },[totalGains, totalExpenses])

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let amountEntry = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === Number(yearSelected)) {
                    try {
                        amountEntry += Number(gain.amount);
                    } 
                    catch {
                        throw new Error('AmountEntry is invalid. AmountEntry must be valid number!')
                    }
                }
            });

            
            let amountOutput = 0;

            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === Number(yearSelected)) {
                    try {
                        amountOutput += Number(expense.amount);
                    } 
                    catch {
                        throw new Error('AmountOutput is invalid. AmountOutput must be valid number!')
                    }
                }
            });


            let amountTot = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth <= month && gainYear === Number(yearSelected)) {
                    try {
                        amountTot += Number(gain.amount);
                    } 
                    catch {
                        throw new Error('AmountEntry is invalid. AmountEntry must be valid number!')
                    }
                }
            });

            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth <= month && expenseYear === Number(yearSelected)) {
                    try {
                        amountTot -= Number(expense.amount);
                    } 
                    catch {
                        throw new Error('AmountOutput is invalid. AmountOutput must be valid number!')
                    }
                }
            });


            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput,
                amountTot
            }

        })
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (Number(yearSelected) === currentYear && item.monthNumber <= currentMonth) || (Number(yearSelected) > currentYear)
        });
    },[yearSelected])

    const relationExpensivesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === Number(monthSelected) && year === Number(yearSelected);
        }).forEach((expense) => {
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount)
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount)
            }
        });

        const total = amountEventual + amountRecurrent
        
        const RecurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1))

        const EventualPercent = Number(((amountEventual / total) * 100).toFixed(1))

        return[
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: RecurrentPercent ? RecurrentPercent : 0,
                color: '#dd3737'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: EventualPercent ? EventualPercent : 0,
                color: '#7ba030'
            }
        ]
    },[monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === Number(monthSelected) && year === Number(yearSelected);
        }).forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount)
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount)
            }
        });

        const total = amountEventual + amountRecurrent
        
        const RecurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1))

        const EventualPercent = Number(((amountEventual / total) * 100).toFixed(1))

        return[
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: RecurrentPercent ? RecurrentPercent : 0,
                color: '#dd3737'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: EventualPercent ? EventualPercent : 0,
                color: '#7ba030'
            }
        ]
    },[monthSelected, yearSelected])


    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#ffb821">
            <SelectInput 
                    options={months} 
                    onChange={(e) => setMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => setYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title='saldo'
                    amount={totalBalance}
                    footerLabel='atualizado com base nas entradas e saídas!'
                    icon='dolar'
                    color='#ffb821'
                />

                <WalletBox
                    title='Entradas'
                    amount={totalGains}
                    footerLabel='atualizado com base nas entradas e saídas!'
                    icon='arrowDown'
                    color='#7ba030'
                />

                <WalletBox
                    title='Saídas'
                    amount={totalExpenses}
                    footerLabel='atualizado com base nas entradas e saídas!'
                    icon='arrowUp'
                    color='#dd3737'
                />

                <MenssageBox
                    title={menssage.title}
                    description={menssage.description}
                    footerDescription={menssage.footerDescription}
                    icon={menssage.icon}
                />

                <Piechart Idata={relationExpensesVersusGains}
                />

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry='#7ba030'
                    lineColorAmountOutput='#dd3737'
                    lineColorAmountTot='#ffb821'
                />

                <BarChartBox
                    title='Saídas'
                    data={relationExpensivesRecurrentVersusEventual}
                />

                <BarChartBox
                    title='Entradas'
                    data={relationGainsRecurrentVersusEventual}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;