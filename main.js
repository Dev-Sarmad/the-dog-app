const api = import.meta.env.VITE_API_KEY;
const detailsContainer = document.getElementById('details-container');  
const global = {
  baseUrl: "https://api.thedogapi.com/v1/",
};
const fetchDetails = async () => {
  console.log("in details");
  const breed_id = window.location.search.split("=")[1];
  showSpinner();
  const response = await fetch(
    `${global.baseUrl}images/search?breed_ids=${breed_id}&api_key=${api}`
  );
  const data = await response.json();
  hideSpinner();
  console.log(data);
  const div = document.createElement('div');
  div.innerHTML = `
  <img src=${data.refrence_image_id} alt="">
<h1>${data.name}</h1>
<h1>${data.bred_for}</h1>
  `
  document.body.appendChild(div);
};
//
function showSpinner() {
  document.querySelector(".spinner").classList.add("lds-facebook");
}
function hideSpinner() {
  document.querySelector(".spinner").classList.remove("lds-facebook");
}

const fetchData = async () => {
  showSpinner();
  const response = await fetch(
    `${global.baseUrl}images/search?api_key=${api}&limit=10&has_breeds=true`
  );
  const data = await response.json();
  hideSpinner();
  console.log(data);
  data.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `<div
    class="h-[300px] mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="index-details.html?id=${data.breeds.map((dog) => dog.id)}">
      <img class="rounded-t-lg h-[80%]" src=${data.url} alt="" md:h-72 md:w-80/>
    </a>
    <div class="p-5">
      
        <h5
          class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
        >
         ${data.breeds.map((name) => name.name)}
        </h5>
      
    </div>
  </div>`;
    document.querySelector("#card-container").appendChild(div);
  });
};

switch (window.location.pathname) {
  case "/":
    fetchData();
    break;
  case "/index-details.html":
    fetchDetails();
    break;
}
