'use server'
import { httpClient } from "@/lib/axios/httpClient"

export const getDoctors = async () => {
    const getDoctors = await httpClient.get('/doctors')
    return getDoctors
}