const input = document.getElementById("input");
const api = import.meta.env.VITE_API_KEY;
const global = {
  baseUrl: "https://api.thedogapi.com/v1/",
};
const fetchDetails = async () => {
  const breed_id = window.location.search.split("=")[1];
  showSpinner();
  const response = await fetch(
    `${global.baseUrl}images/search?breed_ids=${breed_id}&api_key=${api}`
  );
  const data = await response.json();
  hideSpinner();
  data.forEach((dog) => {
    const div = document.createElement("div");
    div.innerHTML = `
  <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
        >
          <img src="${dog.url}" alt="ui/ux review check" />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5
              class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900"
            >
              ${dog.breeds.map((name) => name.name)}
            </h5>
          </div>
          <p
            class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700"
          >
            Temperament :${dog.breeds.map(
              (temperament) => temperament.temperament
            )}
          </p>
          <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
            <span
              class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
              Life-Span ${dog.breeds.map((life) => life.life_span)}
            </span>
            <span
              class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
             Weight: ${dog.breeds.map((weight) => weight.weight.imperial)}
             : ${dog.breeds.map((weight) => weight.weight.metric)}
            </span>
            <span
              class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
             Height: ${dog.breeds.map((height) => height.height.imperial)}
             : ${dog.breeds.map((height) => height.height.metric)}
            </span>
            <span
              class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
              >Breed- Group ${dog.breeds.map(
                (breedgrp) => breedgrp.breed_group
              )}
            </span>
          </div>
        </div>
      </div>
  `;
    document.querySelector("#details-container").appendChild(div);
  });
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

  // data.forEach((data) => {
  //   const div = document.createElement("div");
  //   div.innerHTML = `<div
  //   class="h-[300px] mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  // >
  //   <a href="index-details.html?id=${data.breeds.map((dog) => dog.id)}">
  //     <img class="rounded-t-lg h-[80%]" src=${data.url} alt="" md:h-72 md:w-80/>
  //   </a>
  //   <div class="p-5">

  //       <h5
  //         class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
  //       >
  //        ${data.breeds.map((name) => name.name)}
  //       </h5>

  //   </div>
  // </div>`;
  //   document.querySelector("#card-container").appendChild(div);
  // });
  diplayResults(data);
};
const diplayResults = (data) => {
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
const filterSearch = async (e) => {
  document.querySelector("#card-container").innerHTML = ``;
  if (e && e.target.value) {
    const value = e.target.value.toLowerCase();
    const response = await fetch(
      `${global.baseUrl}breeds/search?q=${value}&api_key=${api}`
    );
    const valueData = await response.json();

    console.log(valueData);
    const image = valueData.map((dog) => dog.image && dog.image.url);
    if (valueData) {
      valueData.forEach((searchedDog) => {
        const div = document.createElement("div");
        div.innerHTML = `<div
        class="h-[300px] mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="index-details.html?id=${searchedDog.id}">
          <img class="rounded-t-lg h-[80%]" src=${image} alt="" md:h-72 md:w-80/>
        </a>
        <div class="p-5">
          
            <h5
              class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
            >
             ${searchedDog.name}
            </h5>
          
        </div>
      </div>`;
        document.querySelector("#filtered-results-container").appendChild(div);
      });
    }
  }
};

function start() {
  switch (window.location.pathname) {
    case "/":
      fetchData();
      input.addEventListener("change", filterSearch);
      filterSearch();
      break;
    case "/index-details.html":
      fetchDetails();
      break;
  }
}
document.addEventListener("DOMContentLoaded", start);
