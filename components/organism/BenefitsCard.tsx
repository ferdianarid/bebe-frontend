import React from 'react'
import { FaComment, FaMoneyBillWave, FaUserCheck } from "react-icons/fa"
import { IBenefits } from 'interfaces/IBenefits'

const BenefitsCard = ({ id, title, description }: IBenefits) => {
    return (
        <React.Fragment>
            <div className={`w-full ${id === 1 ? "bg-green-600" : "bg-gray-100"} p-6`}>
                <div className={`w-8 h-8 ${id === 1 ? "text-white" : "text-gray-400"} mb-6`}>
                    {
                        id === 1 ? <FaComment size={40} /> : id === 2 ? <FaMoneyBillWave size={40} /> : <FaUserCheck size={40} />
                    }
                </div>
                <h3 className={`font-semibold ${id === 1 ? "text-white" : "text-gray-700"} text-md`}>{title}</h3>
                <h4 className={`font-normal ${id === 1 ? "text-white" : "text-gray-500"} mt-2 text-sm`}>{description}</h4>
            </div>
        </React.Fragment>
    )
}

export default BenefitsCard