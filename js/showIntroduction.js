// js/script.js
function showIntroduction() {
    const name = "Cali Kennedy";
    const profession = "Aspiring Systems Engineer / Analyst";
    const current_position = "Senior Computer Science major and Delivery Analyst Intern at Acxiom";
    const graduation = "May 2025";
    const hobbies = ["coding", "learning about system infrastructure", "creating fun projects with JavaScript"];
    const bio = `Hi, my name is ${name}. I am an ${profession}. I am currently a ${current_position}. I graduate in ${graduation}! My hobbies include ${hobbies.join(", ")}.`;
    document.getElementById("introduction").innerText = bio;
}

 
