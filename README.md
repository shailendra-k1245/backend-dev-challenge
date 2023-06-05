# backend-dev-challenge

This app built on Node.js which has got product list and product details feture.



## Tech Stack

**Server:** Node, Express

**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/shailendra-k1245/backend-dev-challenge.git
```

Go to the project directory

```bash
  cd backend-dev-challenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`mongoURL`


## API Reference

#### List of products

```http
  GET /api/products/list?size={no_of_items}&page={offset}
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` |  id  |
| `item_name` |`string`| item_name |
|`item_image`|`string`| item_image |
|`item_price`|`number`| item_price|

#### Response
```
{
"id": 1,
"item_name": "Olive - Spread Tapenade",
"item_image": "http://dummyimage.com/191x100.png/ff4444/ffffff",
"item_price": 4754
}
```

#### Product detail

```http
  POST /api/products/:id
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` |  id  |
| `item_name` |`string`| item_name |
|`item_image`|`string`| item_image |
|`import_date`|`string`| import_date|
|`expiration_date`|`string`| expiration_date|
|`item_price`|`number`| item_price|
|`item_quantity`|`number`| item_quantity|
|`item_weight`|`number`| item_weight|
|`item_tax`|`number`| item_tax|
|`item_availability`|`boolean`| item_availability|

#### Response
```
{
"id": 2,
"item_name": "Veal - Provimi Inside",
"item_image": "http://dummyimage.com/229x100.png/cc0000/ffffff",
"import_date": "1/3/2023",
"expiration_date": "6/20/2027",
"item_price": 4482,
"item_quantity": 76,
"item_weight": 784,
"item_tax": 16,
"item_availability": true
}
```
