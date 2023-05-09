# Next.js and Strapi Website

This is a website built with [Next.js](https://nextjs.org/) and [Strapi](https://strapi.io/). course downloading

## Installation

To install and run this website, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   cd <project-folder>/mm-course
   yarn install
   ```

3. Run the development server:

```
yarn run dev
```

This should start the Next.js development server at `http://localhost:3000`.

4. In another terminal window, navigate to the Strapi API:

you have setup the postgres sql and s3 image upload data in with .env file

sudo -i -u postgres

psql

CREATE ROLE myuser LOGIN PASSWORD 'mypass';
CREATE DATABASE mydatabase WITH OWNER = myuser;

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
JWT_SECRET=

AWS_ACCESS_KEY_ID =
AWS_ACCESS_SECRET=
AWS_REGION=us-east-2
AWS_BUCKET=
```

and then

```
cd <project-folder>/course-backend
yarn install
yarn run develop
```

This should start the Strapi server at `http://localhost:1337`.

## Usage

Once the development servers are running, you should be able to view the website by visiting `http://localhost:3000` in your web browser. You can also access the Strapi API at `http://localhost:1337/admin`.

## Configuration

Some projects may have additional configuration steps or requirements. If so, be sure to read the README.md file carefully and follow any instructions provided by the project maintainers.
