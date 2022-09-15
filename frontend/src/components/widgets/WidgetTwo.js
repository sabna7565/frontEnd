import './widget.scss';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Avatar } from '@mui/material';

const WidgetTwo = () => {
	return (
		<div className='widget'>
		<Card sx={{ display: 'flex', backgroundColor: '#704bf3' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '5 0 auto' }}>
					<Grid container spacing={1}>
						<Grid xs={12} md={12}>
							<Typography
								component="div"
								variant="h6"
								style={{ color: 'white', marginBottom: 10 }}
							>
								New Users
							</Typography>
						</Grid>
						<Grid sm={3} md={3}>
							<Avatar
								alt="Remy Sharp"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
								sx={{ width: 30, height: 30,marginLeft:'10px',marginTop:'10px' }}
							/>
						</Grid>
						<Grid sm={3} md={3}>
							<Typography
								component="div"
								variant="p"
								style={{ color: 'white' }}
							>
								unknown name
							</Typography>
						</Grid>
						<Grid sm={3} md={3}>
							<Typography
								component="div"
								variant="p"
								style={{ color: 'white'}}
							>
								ID 343434
							</Typography>
						</Grid>
						<Grid sm={3} md={3}>
							<Typography
								component="div"
								variant="p"
								style={{ color: 'white'}}
							>
								<ExpandMoreOutlinedIcon style={{ color: 'white'}}/>
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Box>
		</Card>
		</div>
	);
};

export default WidgetTwo;
