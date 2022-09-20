import './page3.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import CardButtons from '../../components/Navbar/CardButtons';

const Page3 = () => {
	const BootstrapInput = styled(InputBase)(({ theme }) => ({
		'label + &': {
			marginTop: theme.spacing(3),
		},
		'& .MuiInputBase-input': {
			borderRadius: 4,
			position: 'relative',
			backgroundColor: theme.palette.mode === '#D1CCEC' ? '#D1CCEC' : '#D1CCEC',
			fontSize: 16,
			width: 'auto',
			padding: '10px 12px',
			transition: theme.transitions.create([
				'border-color',
				'background-color',
				'box-shadow',
			]),
			fontFamily: ['-apple-system'].join(','),
		},
	}));

	return (
		<>
		< CardButtons />
		<div className="listContainer">
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
							height: 400,
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
							Total Language
						</Typography>
						<Typography
							sx={{
								fontSize: 14,
								background:
									'linear-gradient(90deg, rgba(117,95,222,1) 25%, rgba(255,255,255,1) 100%)',
								fontWeight: 'bold',
							}}
							color="text.secondary"
							style={{
								padding: '13px 110px 13px 30px',
								marginTop: '10px',
								color: '#fff',
								paddingRight: '110px',
							}}
						>
							English
						</Typography>
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
							Add Language
						</Typography>
						<FormControl
							variant="standard"
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								marginTop: '60px',
							}}
						>
							<BootstrapInput id="bootstrap-input" />
						</FormControl>
						<Grid
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'row',
								marginTop: '20px'
								
							}}
						>
							<Button
								variant="contained"
								style={{ backgroundColor: '#826DE5' }}
							>
								add
							</Button>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</div>
		</>
	);
};

export default Page3;
