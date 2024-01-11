
# The Dog App

Want to find the information about dogs ? Then you come to the right place.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Dev-Sarmad/the-dog-app.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## API Reference

#### Get random dogs

```http
  GET /images/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get dog

```http
  GET /images/search?breed_ids
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of dog to fetch |
| `limit`      | `string` | **optional**. limits of dogs |
| `api_key` | `string` | **Required**. Your API key |



## Features

- Responsive
- Filter Search
- Dog details (life-span , weight, height , breed etc)


## Tech Stack

**Client:** HTML, Javascript, TailwindCSS.



## Support

For support, email sarmaddevelops@gmail.com .


## FAQ

#### What will I learn while building this project?

ES6 javascript , async nature of javascript reponsive dsign. Fetching data from the external API.


