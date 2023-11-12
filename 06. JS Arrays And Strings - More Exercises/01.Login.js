function login(arr) {
    const username = arr[0];
    const correctPassword = username.split("").reverse().join("");

    const passwords = arr.slice(1);
    let failedAttempts = 0;

    passwords.forEach((pass) => {
        if (pass === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (failedAttempts >= 3) {
                console.log(`User ${username} blocked!`);
                return;
            }

            console.log("Incorrect password. Try again.");
            failedAttempts++;
        }
    });
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
