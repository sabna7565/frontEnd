import './widget.scss';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Widget = () => {
	return (
		<div className="widget">
			<Card sx={{ display: 'flex', backgroundColor: '#704bf3' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '5 0 auto' }}>
						<Grid container spacing={2}>
							<Grid
								item
								xs={12}
								md={6}
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Typography
									component="div"
									variant="h6"
									style={{ color: 'white', marginBottom: 10 }}
								>
									Total <br />
									{'Languages'}
								</Typography>
								<Button
									sx={{ borderRadius: 10 }}
									variant="contained"
									size="small"
									style={{ background: 'red' }}
								>
									View Details
								</Button>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<img
									component="img"
									sx={{ width: 151 }}
									src="/static/images/cards/live-from-space.jpg"
									alt="Live from space album cover"
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Box>
			</Card>
		</div>
	);
};

export default Widget;



