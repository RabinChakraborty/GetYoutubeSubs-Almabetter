# youtube-subscribers backend project

Youtube subscribers backend Api to get the subscribers using specific routes end point made using Node.js , Express.js and MongoDB.
By including particular routes end point in the URL, users can access all subscribers, particular subscriber through specific ID, create new subscriber , delete & update subscriber through particular IDs.

## Deployment
Deployment link:
https://get-youtube-subs-almabetter.vercel.app/

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#features">Features</a></li>
        <li><a href="#Demo">Demo</a></li>
        <li><a href="#Quick-Start">Quick Start</a></li>
        <li><a href="#how-to-run-locally">How to run Locally</a></li>
        <li><a href="#API-Reference">API reference</a></li>
        <li><a href="#faq">FAQ</a></li>
    </ol>
</details>

## How to run Locally

Clone the project

```bash
https://github.com/RabinChakraborty/GetYoutubeSubs-Almabetter.git
```

Go to the project directory

```bash
  cd Youtube-subs
```

Install dependencies

```bash
  npm install
```

Create .env file using .env.sample.

Set the environment key DATABASE_URL with you mongoDB connection URL

Start the server

```bash
  npm run start
```

## Quick Start

Node.js module should be installed in your machine befor download the project and run this command

```bash
  npm install
```

Start the server:

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all subscribers

```http
  GET /subscribers
```

#### Get all subscriberChannel and name only

```http
  GET /subscribers/names
```

#### Get single subscriber

```http
  GET /subscribers/:id
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to fetch |

#### Add subscriber

```http
  POST /subscribers
```

#### Delete subscriber

```http
  DELETE /subscribers/:id
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to delete |

#### Update subscriber

```http
  POST /subscribers/:id
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to update |

## Features

- Access all subscribers from remotely hoisted database
- Add new subscriber to the database
- Access any perticular data from database through a specific IDs
- Delete any subscriber from the database through a specific IDs
- Update any existing subscriber in the database through a specific IDs
- Access any only subscriber list with names and subscribed Channels

## FAQ

#### How to add new subscribers?

Use Postman to add new subscriber in the database.

#### How to delete new subscribers?

Use Postman to Delete subscriber from the database.

#### How to update new subscribers?

Use Postman to update subscriber from the database.

## 🚀 About Me

I am a web development enthusiast.
