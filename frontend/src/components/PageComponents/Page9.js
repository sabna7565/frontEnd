import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

const Page9 = () => {
	return (
		<Grid
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'row',
			}}
			container
			rowSpacing={1}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
		>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: '#EFECFF',
						borderRadius: 3,
					}}
				>
					<Typography
						variant="h6"
						style={{
							textAlign: 'center',
							color: '#787878',
							fontWeight: 'bold',
							paddingTop: '8px',
						}}
					>
						Select Chapter
					</Typography>
					<TextField
						hiddenLabel
						size="small"
						variant="filled"
						placeholder="Title"
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							marginTop: '30px',
						}}
						InputProps={{
							disableUnderline: true,
						}}
					></TextField>
					<TextField
						hiddenLabel
						size="small"
						variant="filled"
						placeholder="Description"
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							marginTop: '10px',
						}}
						InputProps={{
							disableUnderline: true,
						}}
					></TextField>
					<Grid
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'row',
							marginTop: '20px',
						}}
					>
						<Button variant="contained" style={{ backgroundColor: '#826DE5' }}>
							add
						</Button>
					</Grid>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: '#EFECFF',
						borderRadius: 3,
					}}
				>
					<Typography
						variant="h6"
						style={{
							textAlign: 'center',
							color: '#787878',
							fontWeight: 'bold',
							paddingTop: '8px',
						}}
					>
						Add Audio
					</Typography>
					<TextField
						hiddenLabel
						size="small"
						variant="filled"
						placeholder="Customer care number"
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							marginTop: '30px',
						}}
						InputProps={{
							disableUnderline: true,
						}}
					></TextField>
					<TextField
						hiddenLabel
						size="small"
						variant="filled"
						placeholder="Customer care email"
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							marginTop: '10px',
						}}
						InputProps={{
							disableUnderline: true,
						}}
					></TextField>
					<Grid
						sx={{
							alignItems: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'row',
							marginTop: '20px',
						}}
					>
						<Button variant="contained" style={{ backgroundColor: '#826DE5' }}>
							add
						</Button>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Page9;
