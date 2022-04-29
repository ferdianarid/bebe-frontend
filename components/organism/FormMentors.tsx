import React, { useState } from 'react'

const FormMentors = () => {
    const [mentorName, setMentorName] = useState("")
    const [speciality, setSpeciality] = useState("")

    const API_URL = `http://localhost:5000/apis`

    const dataRecommendation = { name: mentorName, speciality }

    const SendRecomendation = () => console.log(`Recommendation`);

    const ConfigOptions = {
        headers: {
            "Content-Type": "application/json"
        },
        data: dataRecommendation
    }

    const PostRecommendation = async () => {
        const response = await fetch(`${API_URL}/rekomendasi-mentor`, ConfigOptions)
            .then(response => response.json())
            .then(data => console.log(`Data is ${data}`)
            );
    }

    return (
        <React.Fragment>
            <form onSubmit={SendRecomendation} className="">
                {/* <!-- Field Mentor Name --> */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Nama Mentor <span className="text-red-600">*</span></label>
                    <input type="text" required id="mentorName" value={mentorName} name="mentorName" onChange={event => setMentorName(event.target.value)} placeholder="Siapa nama mentor mu ?" className="appereance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 text-sm leading-tight" />
                </div>

                {/* <!-- Field Speciality --> */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Spesialisasi <span className="text-red-600">*</span></label>
                    <input type="text" required id="speciality" value={speciality} name="speciality" onChange={event => setSpeciality(event.target.value)} placeholder="Spesialisasi di bidang apa ?" className="appereance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 text-sm leading-tight" />
                </div>

                {/* <!-- Button Submit --> */}
                <button type="submit" className="py-2 mt-4 rounded-md text-sm text-white px-4 bg-green-600 hover:bg-green-800 w-full">
                    <p className="text-sm font-bold">Kirim Rekomendasi</p>
                </button>
            </form>
        </React.Fragment>
    )
}

export default FormMentors