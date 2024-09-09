import prisma from '@/db'

export async function getHotelById( hotelId: string) {
    try {
        const hotel = await prisma.hotel.findUnique({
            where: {
                id: hotelId
            }
        })

        return hotel
    } catch (error) {
        
    }
}