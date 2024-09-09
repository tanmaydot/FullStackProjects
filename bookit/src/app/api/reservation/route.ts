import prisma from '@/db'

export async function POST(req: Request){
    const body = await req.json()

    const { userId, hotelId, startDate, endDate, totalPrice } = body;

    try {

        const reservation = await prisma.reservations.create({
            data: {
                userId: userId,
                hotelId: hotelId,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                totalPrice: parseInt(totalPrice)
            }
        })

        return new Response(JSON.stringify({"success": "success"}))
    } catch (error) {
        console.log(error)
    }

}