import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function SongCard(){
    return(
    <Box sx={{ flexGrow: 1 }}>
      
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://a10.gaanacdn.com/gn_img/albums/zLp36v3rGe/p36PloZmbr/size_m_1616002409.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mexio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist-Karan Aujla
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        
    </Box>
    )
}