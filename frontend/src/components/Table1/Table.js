import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function List({ Transactions }) {
	return (
		<>
			<TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className="tableCell">User</TableCell>
							<TableCell className="tableCell">Language</TableCell>
							<TableCell className="tableCell">View</TableCell>
							<TableCell className="tableCell">Status</TableCell>
							<TableCell className="tableCell">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell className="tableCell">
								<div className="cellWrapper">
									<img
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
										alt=""
										className="image"
									/>
									Minhaj T
								</div>
							</TableCell>
              <TableCell className="tableCell">English</TableCell>
							<TableCell className="tableCell">
								<Button
                size="small"
									variant="contained"
									color="primary"
									onClick={event => {}}
								>
									View
								</Button>
							</TableCell>
							<TableCell className="tableCell">
								<Button
									variant="contained"
									color="success"
									onClick={event => {}}
								>
									Approve
								</Button>
							</TableCell>
							{/* <TableCell className="tableCell">
                <span className={`status ${'complete'}`}>{'complete'}</span>
              </TableCell> */}
							<TableCell>
								<Button
									variant="contained"
									color="error"
									onClick={event => {}}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default List;
