async function signupuser(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#userpassword").value;
  const email = document.querySelector("#useremail").value;
  const errormsg = document.querySelector("#error");
  try {
    const response = await axios.post("http://localhost:3000/expense/signup", {
      username: username,
      email: email,
      password: password,
    });
    if (response.status == 200) {
      document.getElementById("username").value = "";
      document.getElementById("userpassword").value = "";
      document.getElementById("useremail").value = "";
      // console.log("Signup successfull",response);
      alert("Sign up successfull");
    } else {
      //console.log("Signup failed", response.statusText);
      error.innerHTML = `"Signup failed",${response.status} `;
    }
  } catch (error) {
   // console.log("Error during signup:", error.response.data.message);
    errormsg.innerHTML = `<p style="font-size:20px ;color:red">Signup failed, ${error.response.data.message}</p> `;
  }
}
async function userlogin(event) {
  event.preventDefault();
  const password = document.querySelector("#loginpassword").value;
  const email = document.querySelector("#loginemail").value;
  const errormsg = document.querySelector("#error");
  try {
    const response = await axios.post("http://localhost:3000/expense/login", {
      email: email,
      password: password,
    });
    if (response.status == 200) {
     // console.log(response);
      document.getElementById("loginpassword").value = "";
      document.getElementById("loginemail").value = "";
      alert("Login Successfull");
    }
  } catch (error) {
    if (error.status == 401 || error.status == 404) {
      //console.log("Error during login:", error.response.data.message);
      errormsg.innerHTML = `<p style="font-size:20px ;color:red">Login failed, ${error.response.data.message}</p> `;
    } else {
     // console.log("error");
      errormsg.innerHTML = `<p style="font-size:16px ;color:red">Login failed, ${error.response.data.message}</p> `;
    }
  }
}
