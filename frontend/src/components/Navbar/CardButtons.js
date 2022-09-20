import React from 'react';
import { Grid } from '@mui/material';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardButtons = () => {
	return (
		<>
			<Grid container spacing={1} style={{marginTop:8}} >
				<Grid item xs={6} md={4} style={{display:"flex",justifyContent: "center",alignItems:"center"}} >
					<Card sx={{ width: 200,borderRadius:'15px',borderTop:"3px solid #704bf3",borderBottom:"3px solid #704bf3" }}>
						<CardContent sx={{height: 10}}>
							<Grid container>
								<Grid item xs={12} md={9}>
									<Typography  variant="p">
										Data entry
									</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Avatar sx={{ bgcolor: "#704bf3",width: '100%', height: 24  }}><KeyboardArrowRightIcon /></Avatar>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={6} md={4} style={{display:"flex",justifyContent: "center",alignItems:"center"}}>
					<Card sx={{ width: 200,borderRadius:'15px',borderTop:"3px solid #704bf3",borderBottom:"3px solid #704bf3" }}>
						<CardContent sx={{height: 10}}>
							<Grid container>
								<Grid item xs={12} md={9}>
									<Typography  variant="p">
									   Audio
									</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
								<Avatar sx={{ bgcolor: "#704bf3",width: '100%', height: 24  }}><KeyboardArrowRightIcon /></Avatar>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={6} md={4} style={{display:"flex",justifyContent: "center",alignItems:"center"}} >
					<Card sx={{ width: 200,borderRadius:'15px',borderTop:"3px solid #704bf3",borderBottom:"3px solid #704bf3"}}>
						<CardContent sx={{height: 10}}>
							<Grid container>
								<Grid item xs={12} md={9}>
									<Typography>
										Video
									</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
								<Avatar sx={{ bgcolor: "#704bf3",width: '100%', height: 24  }}><KeyboardArrowRightIcon /></Avatar>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

			</Grid>
		</>
	);
};

export default CardButtons;
