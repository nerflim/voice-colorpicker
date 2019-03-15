import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
	render(props) {
		return (
			<div>
				<AppBar position='static' color='secondary'>
					<Toolbar>
						<Typography variant='h6' color='inherit'>
							Voice Colorpicker
						</Typography>
						<Button color='inherit'>Login</Button>
						{/* <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
							<MenuItem onClick={this.handleClose}>Profile</MenuItem>
							<MenuItem onClick={this.handleClose}>My account</MenuItem>
							<MenuItem onClick={this.handleClose}>Logout</MenuItem>
						</Menu> */}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles()(Header);
