import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { Transaction } from "../types/transaction"
import { formatDate } from "../utils/formatDate";


interface TransactionItemProps {
    item: Transaction;
}


export const TransactionItem: React.FC<TransactionItemProps> = ({ item }) => {
    const date = formatDate(item.date)

    return (<li >
        <Link to={`/transaction/${item.id}`}>
            <div className="p-3 flex justify-between items-center gap-3">
                <div className="w-16 h-16 rounded-md bg-gray-400 flex justify-center items-center">
                    <FontAwesomeIcon icon={faApple} size="2x" className='text-gray-300' />
                </div>
                <div className="grid grid-cols-2 grid-rows-3 w-64 gap-0">
                    <h4 className="row-span-1 col-span-1 text-left font-semibold text-lg text-black">{item.type === 'payment' ? 'Payment' : item.name}</h4>
                    <div className="row-span-1 col-span-1 flex justify-end items-center gap-6">
                        <span className="font-medium text-lg text-black">{item.type === 'payment' ? `+${item.amount}` : item.amount}</span>
                        <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
                    </div>
                    <p className="row-span-1 col-span-2 text-left">{item.pending === true ? `Pending - ${item.descr}` : item.descr}</p>
                    <p className="row-span-1 col-span-2 text-left">{item.user ? `${item.user} - ${date}` : date}</p>

                </div>
            </div>
        </Link>
        <hr />
    </li >)
}