import { useState } from 'react';

import Logotype from 'src/components/Logotype/Logotype';
import Menu from 'src/components/Menu/Menu';
import Button from 'src/components/Button/Button';

import s from './Header.module.scss';

import logIn from 'src/assets/icons/header/log-in-icon.svg';
import logOut from 'src/assets/icons/header/log-out-icon.svg';
import burgerMenuOpen from 'src/assets/icons/header/burger-menu-open-icon.svg';
import burgerMenuClose from 'src/assets/icons/header/burger-menu-close-icon.svg';

const Header: React.FC = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
	const handleIsLogin = () => {
		setIsLogin((prev) => !prev);
	};

	const handleIsOpenBurgerMenu = () => {
		setIsOpenBurgerMenu((prev) => !prev);
	};

	return (
		<header className={s.header}>
			<div className={s.container}>
				<Logotype />
				<Menu />
				<div className={s.btnWrapper}>
					<Button
						buttonClasses={'primaryBtn helpBtn'}
						type={'button'}
						name={'Допомогти'}
						onClick={() => console.log('Клік Допомогти')}
					/>
					<Button
						buttonClasses={'secondaryBtn  secondaryIconLeft'}
						imgClasses={'miniIconContainer'}
						type={'button'}
						name={isLogin ? 'Вихід' : 'Вхід'}
						imgPath={isLogin ? logOut : logIn}
						onClick={handleIsLogin}
					/>
				</div>
				<Button
					buttonClasses={'bigIconContainer burgerMenuBtn'}
					imgClasses={'bigIcon'}
					type={'button'}
					imgPath={isOpenBurgerMenu ? burgerMenuClose : burgerMenuOpen}
					onClick={handleIsOpenBurgerMenu}
				/>
			</div>
		</header>
	);
};

export default Header;
