document
  .getElementById("cricketer-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const cricketerData = {};

    formData.forEach((value, key) => {
      cricketerData[key] =
        key === "age" ||
        key === "numberOfMatches" ||
        key === "totalRuns" ||
        key === "fifties" ||
        key === "centuries" ||
        key === "wickets" ||
        key === "average"
          ? parseFloat(value)
          : value;
    });

    try {
      const response = await fetch("/api/cricketers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cricketerData),
      });

      if (response.ok) {
        alert("Cricketer added successfully!");
        event.target.reset();
      } else {
        alert("Failed to add cricketer");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add cricketer");
    }
  });

document
  .getElementById("search-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchName = document.getElementById("searchName").value;

    try {
      const response = await fetch(`/api/cricketers/name/${searchName}`);
      const cricketer = await response.json();

      const searchResults = document.getElementById("searchResults");
      const mainContent = document.getElementById("main-content");
      mainContent.style.display = "none"; // Hide main content
      searchResults.style.display = "block"; // Show search results
      searchResults.innerHTML = "";

      if (cricketer) {
        searchResults.innerHTML = `
          <h1>${cricketer.name}</h1>
          <img src="${cricketer.photoUrl}" alt="${cricketer.name}" style="max-width: 200px;">
          <p>Age: ${cricketer.age}</p>
          <p>Birth Place: ${cricketer.birthPlace}</p>
          <p>Career: ${cricketer.career}</p>
          <p>Number of Matches: ${cricketer.numberOfMatches}</p>
          <p>Total Runs: ${cricketer.totalRuns}</p>
          <p>Fifties: ${cricketer.fifties}</p>
          <p>Centuries: ${cricketer.centuries}</p>
          <p>Wickets: ${cricketer.wickets}</p>
          <p>Average: ${cricketer.average}</p>
          <button onclick="editCricketer(${cricketer.id})">Edit</button>
          <button onclick="goBack()">Go Back</button>
        `;
      } else {
        searchResults.innerHTML = "<p>No cricketer found with that name.</p>";
        const goBackButton = document.createElement("button");
        goBackButton.textContent = "Go Back";
        goBackButton.onclick = goBack;
        searchResults.appendChild(goBackButton);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

function goBack() {
  const searchResults = document.getElementById("searchResults");
  const mainContent = document.getElementById("main-content");
  searchResults.style.display = "none"; // Hide search results
  mainContent.style.display = "block"; // Show main content
}
