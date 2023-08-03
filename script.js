const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dff9d231cemsh3bddc42add51165p17ea6fjsne9c1d3734653",
    "X-RapidAPI-Host": "celebrity-by-api-ninjas.p.rapidapi.com",
  },
};
let keyword = "";

async function searchCelebrity() {
  keyword = searchBox.value;
  const url = `https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity?name=${keyword}`;

  const response = await fetch(url, options);
  const data = await response.json();

  for (var item of data) {
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdGender = document.createElement("td");
    var tdBirthday = document.createElement("td");
    var tdAge = document.createElement("td");
    var tdHeight = document.createElement("td");
    var tdNetworth = document.createElement("td");
    var tdNationality = document.createElement("td");
    // var tdOccupation = document.createElement("td");
    

    tdName.innerHTML = item.name;
    tdName.style.padding = '10px 5px';
    tdGender.innerHTML = item.gender;
    tdBirthday.innerHTML = item.birthday;
    tdAge.innerHTML = item.age;
    tdHeight.innerHTML = item.height;
    tdNetworth.innerHTML = item.net_worth;
    tdNationality.innerHTML = item.nationality;
    // tdOccupation.innerHTML = item.occupation;

    tr.appendChild(tdName);
    tr.appendChild(tdGender);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdAge);
    tr.appendChild(tdHeight);
    tr.appendChild(tdNetworth);
    tr.appendChild(tdNationality);
    // tr.appendChild(tdOccupation);

    document.querySelector("tbody").appendChild(tr);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchCelebrity();
});
