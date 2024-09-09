import getCurrentUser from "@/actions/getCurrentUser";
import getHotelList from "@/actions/getHotelList";
import HomePage from "@/components/HomePage/page";

export default async function Root() {
  const currentUser = await getCurrentUser()
  const hotelList: any  = await getHotelList()
  return (
  <div>
    <HomePage currentUser = {currentUser} hotelList = {hotelList}/>
  </div>
  );
}