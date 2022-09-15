import './widget.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const WidgetThree = () => {
	return (
		<div className="widgetThree">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item md={4.7} sm={6}>
						<Card sx={{ backgroundColor: '#4bcd61' }}>
							<CardContent sx={{ flex: '5 0 auto', textAlign: 'center' }}>
								<Typography
									component="div"
									variant="h6"
									style={{ color: 'white', marginBottom: 10 }}
								>
									Registered <br />
									{'users'}
								</Typography>
                                <Stack spacing={2} alignItems="center">
									<Button
										variant="contained"
										style={{
											textTransform: 'none',
											padding: '14px 0px',
											backgroundColor: 'white',
											color: '#000000',
											fontWeight: 'bold',
                                            fontSize: '14px',
										}}
									>
										75
									</Button>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4.7} sm={6}>
						<Card sx={{ backgroundColor: '#4bcd61' }}>
							<CardContent sx={{ flex: '5 0 auto', textAlign: 'center' }}>
								<Typography
									component="div"
									variant="h6"
									style={{ color: 'white', marginBottom: 10 }}
								>
									Unregistered <br />
									{'users'}
								</Typography>
								<Stack spacing={2} alignItems="center">
									<Button
										variant="contained"
										style={{
											textTransform: 'none',
											padding: '14px 0px',
											backgroundColor: 'white',
											color: '#000000',
											fontWeight: 'bold',
                                            fontSize: '14px',
										}}
									>
										75
									</Button>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default WidgetThree;
