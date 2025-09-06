// Handle Form Submission
document.getElementById("cyberForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect data
  const data = {
    name: document.getElementById("name").value,
    id: document.getElementById("id").value,
    department: document.getElementById("department").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    gender: document.getElementById("gender").value,
    problem: document.getElementById("problem").value,
  };

  // Save to localStorage (simulating Admin Panel database)
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push(data);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  alert("Your problem has been submitted successfully!");
  this.reset();
});
