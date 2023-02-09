import Navigation from '/components/Navigation';
import PropTypes from 'prop-types';
import Footer from '/components/Footer';
const MainLayout = ({ children }) => {
	return (
		<div className="justify-between h-screen">
			<Navigation />
			<main className="flex flex-col flex-grow">{children}</main>
			{false && (
				<>
					<div className="top-52 pt-24 lg:pt-32" />
					<div className="pt-14 lg:pt-20" />
					<div className="top-40" />
					<div className="top-32" />
					<div className="top-24" />
					<div className="top-20" />
					<div className="top-14" />
				</>
			)}
            <Footer />
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.object.isRequired,
};

export default MainLayout;
