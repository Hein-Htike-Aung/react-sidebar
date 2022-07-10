import React, { useState } from 'react';
import './app.scss';
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotesIcon from '@mui/icons-material/Notes';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const App = () => {
	const [theme, setTheme] = useState('dark');

	const handleChangeTheme = (value) => {
		setTheme(value);
	};

	return (
		<div>
			<div className={`sidebar ${theme}`}>
				<div className='sidebar-top'>
					<DiamondIcon className='logo' />
					<span className='brand'>The App</span>
				</div>
				<div className={`sidebar-center ${theme}`}>
					<ul className='list'>
						<li className='list-item'>
							<HomeIcon className='list-item-icon' />
							<span className='list-item-text'>Dashboard</span>
						</li>
						<li className='list-item'>
							<SearchIcon className='list-item-icon' />
							<span className='list-item-text'>Search</span>
						</li>
						<li className='list-item'>
							<NotesIcon className='list-item-icon' />
							<span className='list-item-text'>Insightes</span>
						</li>
						<li className='list-item'>
							<ArticleIcon className='list-item-icon' />
							<span className='list-item-text'>Docs</span>
						</li>
						<li className='list-item'>
							<PeopleIcon className='list-item-icon' />
							<span className='list-item-text'>Community</span>
						</li>
						<li className='list-item'>
							<HandymanIcon className='list-item-icon' />
							<span className='list-item-text'>Tools</span>
						</li>
						<li className='list-item'>
							<LocalGroceryStoreIcon className='list-item-icon' />
							<span className='list-item-text'>Market</span>
						</li>
						<li className='list-item'>
							<HelpOutlineIcon className='list-item-icon' />
							<span className='list-item-text'>Resource</span>
						</li>
					</ul>
				</div>
				<div className='sidebar-bottom'>
					<div
						onClick={() => handleChangeTheme('dark')}
						className='color-box dark'
					></div>
					<div
						onClick={() => handleChangeTheme('night')}
						className='color-box night'
					></div>
					<div
						onClick={() => handleChangeTheme('light')}
						className='color-box light'
					></div>
				</div>
			</div>
		</div>
	);
};

export default App;
