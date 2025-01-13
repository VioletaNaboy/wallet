import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


import { Transaction } from "../types/transaction"
import { formatDate } from "../utils/formatDate";


interface TransactionItemProps {
    item: Transaction;
}


export const TransactionItem: React.FC<TransactionItemProps> = ({ item }) => {
    const date = formatDate(item.date)

    return (<li>
        <Link to={`/transaction/${item.id}`}>
            <div>
                <i className="fas fa-home fa-3x"></i>
            </div>
            <div>
                <h4>{item.type === 'payment' ? 'Payment' : item.name}</h4>
                <span>{item.type === 'payment' ? `+${item.amount}` : item.amount}</span>
                <span>{">"}</span>
                <p>{item.pending === true ? `Pending - ${item.descr}` : item.descr}</p>
                <p>{item.user ? `${item.user} - ${date}` : date}</p>
            </div>

        </Link>
    </li>)
}