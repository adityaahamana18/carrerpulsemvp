document.getElementById("submitBtn").addEventListener("click", getCareer);

function getCareer() {
  const skill = document.getElementById("skill").value;
  const resultBox = document.getElementById("resultBox");
  const careerList = document.getElementById("careerList");

  if (!skill) {
    alert("Please select all fields");
    return;
  }

  const careers = {
    technical: [
      "Software Developer",
      "Data Analyst",
      "AI Engineer"
    ],
    creative: [
      "UI/UX Designer",
      "Graphic Designer",
      "Content Creator"
    ],
    analytical: [
      "Business Analyst",
      "Financial Analyst",
      "Research Scientist"
    ],
    communication: [
      "HR Manager",
      "Teacher",
      "Public Relations Specialist"
    ]
  };

  careerList.innerHTML = "";

  careers[skill].forEach(career => {
    const div = document.createElement("div");
    div.className = "career";
    div.innerHTML = `<span>${career}</span> – Good match based on your profile`;
    careerList.appendChild(div);
  });

  resultBox.style.display = "block";
}
