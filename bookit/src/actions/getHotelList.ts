import prisma from "@/db";

export default async function getHotelList() {
    const hotels = await prisma.hotel.findMany()
    return hotels;
}
