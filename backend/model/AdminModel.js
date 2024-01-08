export default class Admin {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setEmail(email) {
    if (this.validateEmail(email)) {
      this.email = email;
      console.log("ModelSuccess: Valid email set.");
    } else {
      console.error("ModelError: Invalid email address.");
    }
  }

  setPassword(password) {
    if (this.validatePassword(password)) {
      this.password = password;
      console.log("ModelSuccess: Valid password set.");
    } else {
      console.error(
        "ModelError: Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character."
      );
    }
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
