function validateForm() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Validate Name
    if (!/^[A-Za-z]+$/.test(name) || name.length < 6) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Validation successful!");
    return true;
}