exports.verify = function(req, email, key){
	return {
		from: 'palapunkupoz@gmail.com',
		to: email,
		subject: 'Verifying account',
		html: `
		</p>
		Link to verify your account: ${'https://tracebucks.herokuapp.com/user/verify/verify?key=' + key + '&email=' + email}
		</p>
		`
	}
}

exports.password_change = function(req, email, key){
	return {
		from: 'palapunkupoz@gmail.com',
		to: email,
		subject: 'Verifying account',
		html: `
		</p>
		Your account ${email} password has been changed.
		</p>
		`
	}
}