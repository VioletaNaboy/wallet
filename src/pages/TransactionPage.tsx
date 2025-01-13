import { Link, useParams } from "react-router-dom";
import data from '../assets/localDB.json'

export const TransactionPage = () => {
    const { id } = useParams();
    const transaction = data.find((t) => t.id === Number(id));

    if (!transaction) {
        return <h3>Transaction not found</h3>;
    }
    return (<div>

        <Link to="/">{"<"}</Link>
        <h1>{transaction.amount}</h1>
        <span>{transaction.name && `${transaction.name} - `} {transaction.descr}</span>
        <span>{transaction.date}</span>
        <div>
            <span>Status: {transaction.pending === true ? "Pending" : "Approved"}</span>
            <span>Bank Debit Card</span>
            <br />
            <span>Total: {transaction.amount}</span>

        </div>
    </div>)
}