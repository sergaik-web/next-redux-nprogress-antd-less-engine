const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	host: isProduction ? 'https://apiAddress.ru' : 'https://apiAddress.ru',
	metaTitle: 'Project Name',
};
