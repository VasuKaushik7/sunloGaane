import Header from "../header/header"
import Carousel from "../carousel/carousel"
import SongCard from "../songCard/songCard";
import Grid from '@mui/material/Unstable_Grid2';
export default function Dashboard(){
    return(<>
    <Header/>
    <Carousel/>
    <Grid container spacing={2} >    
    <Grid xs={4} md={3}>
    <SongCard/>
    </Grid>
    <Grid xs={4} md={3}>
    <SongCard/>
    </Grid>
    <Grid xs={4} md={3}>
    <SongCard/>
    </Grid>
    <Grid xs={4} md={3}>
    <SongCard/>
    </Grid>
    <Grid xs={4} md={3}>
    <SongCard/>
    </Grid>
    </Grid>
    <p>Dashboard works...</p>
    </>
    )
}