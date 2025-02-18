function showSkills() {
    const repositories = {
        "Java": [
            { name: "Go Study! Java RPG Game", url: "https://github.com/cali-kennedy/Go_Study_3" },
            { name: "Data Visualization Tool", url: "https://github.com/cali-kennedy/Data_Visualization_Tool" }
        ],
        "Python": [
            { name: "Quiz Exploit", url: "https://github.com/cali-kennedy/Quiz_Exploit" },
            { name: "TCP Socket Project", url: "https://github.com/cali-kennedy/TCP_Socket_Project" }
        ],
        "JavaScript": [
            { name: "This!", url: "https://github.com/cali-kennedy/AboutMeWebPage" },
        ],
        "R": [
            { name: "Statistical Methods using R", url: "https://github.com/cali-kennedy/StatisticalMethods" }
        ],
        "SQL": [
            { name: "IMDB Data Loader Java/SQL", url: "https://github.com/cali-kennedy/IMDb-Data-Loader" }
        ]
    };

    document.getElementById("skillForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var selectedSkills = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => selectedSkills.push(el.value));

        let outputHTML = "You selected: " + selectedSkills.join(", ") + "<br><br>";
        selectedSkills.forEach(skill => {
            repositories[skill].forEach(repo => {
                outputHTML += `<a href="${repo.url}" target="_blank">${repo.name}</a><br>`;
            });
        });

        document.getElementById("skillOutput").innerHTML = outputHTML;
    });
}

window.onload = showSkills;  // Call the function when the window loads
