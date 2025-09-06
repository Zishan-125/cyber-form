// Simple login credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "12345";

// Login Form Handling
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadSubmissions();
  } else {
    alert("Invalid username or password!");
  }
});

// Load Data from localStorage
function loadSubmissions() {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const tableBody = document.getElementById("dataTable");
  tableBody.innerHTML = "";

  submissions.forEach(sub => {
    let row = `<tr>
      <td>${sub.name}</td>
      <td>${sub.id}</td>
      <td>${sub.department}</td>
      <td>${sub.email}</td>
      <td>${sub.number}</td>
      <td>${sub.gender}</td>
      <td>${sub.problem}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });

  if (submissions.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No submissions found</td></tr>`;
  }
}

// Clear All Data
document.getElementById("clearData").addEventListener("click", function() {
  if (confirm("Are you sure you want to delete all submissions?")) {
    localStorage.removeItem("submissions");
    loadSubmissions();
  }
});
