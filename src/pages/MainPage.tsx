import data from '../assets/localDB.json'
import { TransactionsList } from "../components/TransactionsList"
import { Transaction } from '../types/transaction'
import { getDailyPoints } from '../utils/dailyPoints'

const BALANCE = 344.30
const MAX = 1500

export const MainPage = () => {

    const points = getDailyPoints(data as Transaction[])
    return (
        <>
            <div>
                <h3>Card Balance</h3>
                <h1>{`$ ${BALANCE}`}</h1>
                <span>{`$ ${MAX - BALANCE} Available`}</span>
            </div>
            <div>
                <h3>Daily Points</h3>
                <span>{points}</span>
            </div>

            <div>
                <h3>No Payment Due</h3>
                <p>You've paid your balance.</p>
            </div>
            <TransactionsList data={data as Transaction[]} />
        </>
    )
}