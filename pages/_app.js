import '../styles/globals.css';
import PropTypes from 'prop-types';
function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};
