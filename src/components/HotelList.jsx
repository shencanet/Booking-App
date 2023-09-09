import { useQuery } from "@tanstack/react-query";

const fetchHotels = async () => {
    const res = await fetch("http://localhost:3001/hotels");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}

const HotelList() {
    const  {
        data: hotels,
        isLoading,
        error,
    } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels})
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Something went wrong {error.message}</div>

    

}