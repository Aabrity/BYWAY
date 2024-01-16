export default class Admin {
  constructor(email, password, username = null) {
    this._email = email;
    this._password = password;
    this._username = username;
  }

  getUsername() {
    return this._username;
  }

  getEmail() {
    return this._email;
  }

  getPassword() {
    return this._password;
  }

  setUsername(username) {
    if (this.validateUsername(username)) {
      this._username = username;
      console.log("ModelSuccess: Valid username set.");
    } else {
      console.error(
        "ModelError: Username must be less than 10 characters, contain at least one number, and no spaces or special characters."
      );
    }
  }

  setEmail(email) {
    if (this.validateEmail(email)) {
      this._email = email;
      console.log("ModelSuccess: Valid email set.");
    } else {
      console.error("ModelError: Invalid email address.");
    }
  }

  setPassword(password) {
    if (this.validatePassword(password)) {
      this._password = password;
      console.log("ModelSuccess: Valid password set.");
    } else {
      console.error(
        "ModelError: Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character."
      );
    }
  }

  validateUsername(username) {
    // Username must be less than 10 characters, contain at least one number, and no spaces or special characters
    const usernameRegex = /^(?=.*\d)[\w]{1,9}$/;
    return usernameRegex.test(username);
  }

  validatePassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
