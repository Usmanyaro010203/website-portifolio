
        document.getElementById("registerForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from refreshing
            const name = document.getElementById("name").value;
            const regno = document.getElementById("regno").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if (!name || !regno || !gender) {
                alert("Please fill in all the fields.");
            } else {
                alert(`Thank you, ${name} (${gender.value}), for registering!`);
            }
        });
    
  document.getElementById("contactBtn").addEventListener("click", function() {
    alert("Thank you for showing interest! You will be redirected to the contact page.");
    window.location.href = "contact.html"; // Make sure contact.html exists
  });

