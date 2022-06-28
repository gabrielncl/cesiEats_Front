const authentication = ((req, res, next) => {
	const token = localStorage.getItem("token");
	if (!token) {
		return next({ path: "/" });
	}
	next();
});

/*const loginUser = () => {
		const response = await axios.post("http://api.cesieats.loc/users/login", {
			email: this.email,
			password: this.password,
		});
		const token = response.data.token;
		localStorage.setItem("token", token);
		if (token) {
			this.$router.push("/home");
		} else {
			this.$router.push("/");
		}
	}*/