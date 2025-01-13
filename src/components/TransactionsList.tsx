import { TransactionItem } from './TransactionItem'
import { Transaction } from '../types/transaction'

interface TransactionsListProps {
    data: Transaction[];
}

export const TransactionsList: React.FC<TransactionsListProps> = ({ data }) => {
    const transactions = [...data].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <div>
            <h2>Latest Transactions</h2>

            {data ? <ul>
                {transactions.slice(0, 10).map((t) => <TransactionItem key={t.id} item={t as Transaction} />)}
            </ul> : <h3>No Transaction found</h3>}

        </div>
    )
}