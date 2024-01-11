
# The Dog App

Want to find the information about dogs ? Then you come to the right place.

## Screenshots
![Screenshot 2024-01-11 130207](https://github.com/Dev-Sarmad/the-dog-app/assets/111682412/8bf9d2a4-5074-449c-aa4c-45b0dbeeda74)

![Screenshot 2024-01-11 130248](https://github.com/Dev-Sarmad/the-dog-app/assets/111682412/de9b8620-9f39-43d9-9eb2-625a3d5b09e6)

![Screenshot 2024-01-11 130428](https://github.com/Dev-Sarmad/the-dog-app/assets/111682412/865cee62-b450-402c-b75e-c39d8eae9cc8)

![Screenshot 2024-01-09 234540](https://github.com/Dev-Sarmad/the-dog-app/assets/111682412/239b6ee0-d38c-47b4-b39f-64eb2c124923)

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
