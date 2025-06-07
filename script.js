        // Show popup after 30 seconds
        setTimeout(() => {
            showPopup();
        }, 30000); // 30 seconds

        function showPopup() {
            const overlay = document.getElementById('loginOverlay');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            const overlay = document.getElementById('loginOverlay');
            overlay.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // Handle form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your login logic here
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Login attempt:', email);
            // Replace with actual authentication
            
            closePopup();
        });

        // Close with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });

        // Close when clicking outside popup
        document.getElementById('loginOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });






function loadCalculator(course) {
  const container = document.getElementById("main-content");
  container.innerHTML = ""; // Clear previous content

  if (course === "btech") {
    let html = `<h2>B.Tech CGPA Calculator</h2>
      <p>Enter SGPA for completed semesters (leave blank if not attempted):</p>
      <form id="btech-form">`;

    for (let i = 1; i <= 8; i++) {
      html += `
        <div>
          <label>Semester ${i} SGPA:</label>
          <input type="number" step="0.01" min="0" max="10" class="form-control mb-2" name="sgpa${i}">
        </div>`;
    }

    html += `
      <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-success mt-3">Calculate CGPA</button>
      </div>
      </form>
      <div id="result" class="mt-3"></div>`;

    container.innerHTML = html;

    document.getElementById("btech-form").onsubmit = function (e) {
      e.preventDefault();
      const form = e.target;
      let total = 0, count = 0;

      for (let i = 1; i <= 8; i++) {
        const val = parseFloat(form[`sgpa${i}`].value);
        if (!isNaN(val)) {
          total += val;
          count++;
        }
      }

      const result = document.getElementById("result");
      if (count === 0) {
        result.innerHTML = `<div class="text-danger">Please enter at least one SGPA.</div>`;
      } else {
        const cgpa = (total / count).toFixed(2);
        result.innerHTML = `<div class="alert alert-info">Your CGPA is: <strong>${cgpa}</strong></div>`;
      }
  };

} else if (course === "LEbtech") {
  let html = `<h2>B.Tech(Lateral Entry) CGPA Calculator</h2>
    <p>Enter SGPA for completed semesters (leave blank if not attempted):</p>
    <form id="btech-form">`;

  for (let i = 1; i <= 6; i++) {
    html += `
      <div>
        <label>Semester ${i} SGPA:</label>
        <input type="number" step="0.01" min="0" max="10" class="form-control mb-2" name="sgpa${i}">
      </div>`;
  }

  html += `
    <div class="d-flex justify-content-center">
    <button type="submit" class="btn btn-success mt-3">Calculate CGPA</button>
    </div>
    </form>
    <div id="result" class="mt-3"></div>`;

  container.innerHTML = html;

  document.getElementById("btech-form").onsubmit = function (e) {
    e.preventDefault();
    const form = e.target;
    let total = 0, count = 0;

    for (let i = 1; i <= 6; i++) {
      const val = parseFloat(form[`sgpa${i}`].value);
      if (!isNaN(val)) {
        total += val;
        count++;
      }
    }

    const result = document.getElementById("result");
    if (count === 0) {
      result.innerHTML = `<div class="text-danger">Please enter at least one SGPA.</div>`;
    } else {
      const cgpa = (total / count).toFixed(2);
      result.innerHTML = `<div class="alert alert-info">Your CGPA is: <strong>${cgpa}</strong></div>`;
    }
  };

} else {
    // For 10th and Intermediate
    container.innerHTML = `
      <h2>${course === "10th" ? "Class 10th" : "Intermediate"} Percentage Calculator</h2>
      <form id="basic-form">
        <div>
          <label>Marks Obtained:</label>
          <input type="number" min="0" class="form-control mb-2" id="marksObtained" required>
        </div>
        <div>
          <label>Total Marks:</label>
          <input type="number" min="1" class="form-control mb-2" id="totalMarks" required>
        </div>
         <div class="d-flex justify-content-center">
           <button type="submit" class="btn btn-success mt-2">Calculate Percentage</button>
         </div>
      </form>
      <div id="result" class="mt-3"></div>
    `;

    document.getElementById("basic-form").onsubmit = function (e) {
      e.preventDefault();
      const obtained = parseFloat(document.getElementById("marksObtained").value);
      const total = parseFloat(document.getElementById("totalMarks").value);
      const result = document.getElementById("result");

      if (obtained > total) {
        result.innerHTML = `<div class="text-danger">Marks obtained cannot exceed total marks.</div>`;
        return;
      }

      const percentage = (obtained / total) * 100;
      const cgpa = (percentage / 9.5).toFixed(2);

      result.innerHTML = `
        <div class="alert alert-info">
          <p>Percentage: <strong>${percentage.toFixed(2)}%</strong></p>
          <p>CGPA (approx): <strong>${cgpa}</strong></p>
        </div>`;
    };
  }
}
