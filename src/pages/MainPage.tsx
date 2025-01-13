import data from '../assets/localDB.json'
import { TransactionsList } from "../components/TransactionsList"
import { Transaction } from '../types/transaction'
import { getDailyPoints } from '../utils/dailyPoints'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BALANCE = 344.30
const MAX = 1500

export const MainPage = () => {

    const points = getDailyPoints(data as Transaction[])
    return (
        <div className='p-8'>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-8">
                <div className="row-span-1 col-span-1 bg-white rounded-xl p-4 text-left flex flex-col justify-center" >
                    <h3 className="font-medium text-black"> Card Balance</h3>
                    <h1 className="text-3xl font-extrabold text-black">{`$ ${BALANCE}`}</h1>
                    <span>{`$ ${MAX - BALANCE} Available`}</span>
                </div>
                <div className="row-span-2 col-span-1 bg-white rounded-xl p-4 text-left flex flex-col justify-between items-end">
                    <div>
                        <h3 className="font-medium text-black">No Payment Due</h3>
                        <p>You've paid your balance.</p>
                    </div>
                    <div className='bg-[#d6d3d3] rounded-[50%] w-14 h-14 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCheck} size='2x' className='text-black' />
                    </div>
                </div>
                <div className="row-span-1 col-span-1 bg-white rounded-xl p-4 text-left flex flex-col justify-center">
                    <h3 className="font-medium text-black">Daily Points</h3>
                    <span>{points}</span>
                </div>
            </div>
            <TransactionsList data={data as Transaction[]} />
        </div>
    )
}