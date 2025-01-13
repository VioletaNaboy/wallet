import { Link, useParams } from "react-router-dom";
import data from '../assets/localDB.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const TransactionPage = () => {
    const { id } = useParams();
    const transaction = data.find((t) => t.id === Number(id));

    if (!transaction) {
        return <h3 className="text-3xl">Transaction not found</h3>;
    }
    return (
        <div className="flex flex-col px-8 py-32 h-screen">
            <Link to="/" className="absolute top-10 left-10">
                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </Link>
            <h1 className="mb-4 font-bold text-black text-7xl">${transaction.amount}</h1>
            <span>{transaction.name && `${transaction.name} - `} {transaction.descr}</span>
            <span>{transaction.date}</span>
            <div className="bg-white rounded-xl p-4 flex flex-col items-start mt-8">
                <span className="font-medium text-lg text-black">Status: {transaction.pending === true ? "Pending" : "Approved"}</span>
                <span>Bank Debit Card</span>
                <hr className="my-2 " />
                <div className="w-80 font-medium text-lg text-black flex justify-between">
                    <span>Total:</span>
                    <span> ${transaction.amount}</span>
                </div>
            </div>
        </div>
    )
}