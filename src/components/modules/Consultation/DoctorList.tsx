/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { getDoctors } from "@/app/(commonLayout)/consultation/_actions";
import { useQuery } from "@tanstack/react-query";

const DoctorsList = () => {
    const { data: doctorData } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => getDoctors(),
  })

//   const {data: nonPrefactchedData} = useQuery({
//     queryKey: ['doctors-non-prefetched'],
//     queryFn: () => getDoctors(),
//   })

//   console.log(nonPrefactchedData);

  console.log(doctorData);
    return (
        <div>
            {doctorData?.data?.map((doctor: any) => (
                <div key={doctor.id}>
                    <h2>{doctor.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default DoctorsList;