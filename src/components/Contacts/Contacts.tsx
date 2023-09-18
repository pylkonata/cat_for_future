import React from 'react';
import phoneIcon from 'src/assets/icons/phone-icon.svg';
import emailIcon from 'src/assets/icons/email-icon.svg';
import { ReactComponent as Facebook } from 'src/assets/icons/facebook-icon.svg';
import { ReactComponent as Instagram } from 'src/assets/icons/instagram-icon.svg';
import { Link } from 'react-router-dom';

import s from 'src/components/Contacts/Contacts.module.scss';

const Contacts: React.FC = () => {
	return (
		<div className={s.contacts}>
			<div className={s.list}>
				<p>Зв’язок з нами</p>

				<div className={s.contentContainer}>
					<p className={s.contactContainer}>
						<img className={s.contactIcn} src={phoneIcon} alt="Phone icon" />
						+38 063 628 66 30
					</p>

					<p className={s.contactContainer}>
						<img className={s.contactIcn} src={emailIcon} alt="Email icon" />
						catforfuture@gmail.com
					</p>
				</div>
			</div>

			<div className={s.socmediaContainer}>
				<div className={s.socmediaIcn}>
					{/*no link yet*/}
					<Link to="*">
						<Facebook/>
					</Link>
				</div>

				<div className={s.socmediaIcn}>
					{/*no link yet*/}
					<Link to="*">
					<Instagram/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
