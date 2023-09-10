import { Card, CardContent, CardMedia, Link, Stack, Typography, CardActions, Button } from "@mui/material";
import { Link } from "wouter";

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

    return (
        <>
        <Typography variant="h4" component= "h2">Booking App</Typography>
        <Stack spacing={2}> {
            (hotels.map(hotel =>(
                <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
                    <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8" }}>
                        <CardMedia 
                            sx={{ height: 140 }}
                            image={hotel.image}
                            title={hotel.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {hotel.name}


                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                                {hotel.desciption}
                        </Typography>


                        </CardContent>
                        <CardActions>
                            <Button size="small">See Details</Button>


                        </CardActions>



                    </Card>
                </Link>
            )))
        } </Stack>

        </>

    )

    

}

export default HotelList;