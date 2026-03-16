'use server'
import { httpClient } from "@/lib/axios/httpClient"
import { IDoctor } from "@/types/doctor.types"

export const getDoctors = async (queryString: string) => {
    try {
        const getDoctors = await httpClient.get<IDoctor[]>(queryString ? `/doctors?${queryString}` : '/doctors')
    return getDoctors
    } catch (error) {
        console.error('Error fetching doctors:', error)
        throw error
    }
}