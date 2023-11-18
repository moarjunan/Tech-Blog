const handleFormSubmission = async (event, endpoint, redirectPath) => {
    try {
        event.preventDefault();

        const nameField = document.querySelector("#name-signup");
        const emailField = document.querySelector(`#email-${endpoint}`); 
        const passwordField = document.querySelector(`#password-${endpoint}`);

        const name = nameField?.value?.trim();
        const email = emailField?.value?.trim();
        const password = passwordField?.value?.trim();

        if ((name && email && password) || (email && password)) {
            const response = await fetch(`/api/users${endpoint === "login" ? "/login" : ""}`, {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                document.location.replace(redirectPath);
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        } else {
            throw new Error("Please provide valid values for email and password.");
        }
    } catch (error) {
        alert(error.message);
    }
};

const loginFormHandler = (event) => {
    handleFormSubmission(event, "login", "/profile");
};

const signupFormHandler = (event) => {
    handleFormSubmission(event, "signup", "/profile");
};

document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
