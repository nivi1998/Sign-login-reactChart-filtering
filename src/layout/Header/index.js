import React, { useState } from 'react';
import { USER_LOGOUT } from '../../redux/features/login';
import { useDispatch } from 'react-redux';

import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(USER_LOGOUT());
	};
	return (
		<>
			<div
				className="logout"
				onClick={() => {
					logout();
				}}
			>
				logout
			</div>
		</>
	);
};

export default Header;
