const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", signupUser);

async function signupUser(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#userpassword").value;
  const email = document.querySelector("#useremail").value;
  const response = await fetch("http://localhost:3000/expense/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  console.log(response);
  if (response.ok) {
    document.getElementById("username").value = "";
    document.getElementById("userpassword").value = "";
    document.getElementById("useremail").value = "";
  }
}
