const date = { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second:"numeric"};
document.getElementById('currentdate').textContent =new Date().toLocaleDateString('en-US', date);

