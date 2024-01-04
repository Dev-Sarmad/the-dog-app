const api = import.meta.env.VITE_API_KEY;
console.log(api);

const fetchData = async () => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/images/search?api_key=${api}&limit=10`
  );
  const data = await response.json();
  console.log(data);
  data.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `<div
    class="h-[300px] mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg h-[80%]" src=${data.url} alt=""/>
    </a>
    <div class="p-5">
      
        <h5
          class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
        >
         ${data.breeds.map((name)=>name.name)}
        </h5>
      
    </div>
  </div>`;
  document.querySelector("#card-container").appendChild(div);
  });
};
fetchData();