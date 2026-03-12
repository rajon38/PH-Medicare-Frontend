'use client'

import { getDoctors } from "@/services/doctor.services"
import { useQuery } from "@tanstack/react-query"

const DoctorsTable = () => {
    const { data: doctorDataResponse } = useQuery({
        queryKey: ['doctors'],
        queryFn: getDoctors
    })

    const { data: doctors } = doctorDataResponse! || [] ;

    console.log(doctors);
    return (
        <div>
            Doctors Table
        </div>
    )
}

export default DoctorsTable