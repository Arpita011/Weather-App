import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_url="https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    
    return(
        <div className="infoBox">
            <br />
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
            info.humidity>80
            ? <ThunderstormIcon/>
            :info.temp>15
            ?<WbSunnyIcon/>
            : <AcUnitIcon/>
                
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i>  and feels like {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}