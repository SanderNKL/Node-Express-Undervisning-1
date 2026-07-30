export const validateUserDetails = (user) => {
    if (!user.username) {
        return {
            valid: false,
            error: "Username cannot be empty."
        }
    }

    if (user.username.length > 30) {
        return {
            valid: false,
            error: "Username cannot be longer than 30 characters."
        }
    }

    if (user.username.length < 3) {
        return {
            valid: false,
            error: "Username cannot be shorter than 3 characters."
        }
    }

    if (!user.email) {
        return {
            valid: false,
            error: "Email cannot be empty."
        }
    }

    if (!user.password || user.password.length < 8) {
        return {
            valid: false,
            error: "Password must be at least 8 characters."
        }
    }

    return {
        valid: true
    }

};