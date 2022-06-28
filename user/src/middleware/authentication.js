const authentication = ((req, res, next) => {
	const token = localStorage.getItem("token");
	if (!token) {
		return next({ path: "/" });
	}
	next();
});

module.exports = authentication;