# Backstage

--- Backstage is an app designed to allow venues and artists to share essential    information needed to orchestrate unhindered performances.  


## Special Features

 - Users enjoy their own dashboard with saved stages, equipment, and events
 - Users can create events and generate a unique link to share with collaborators
 - Drag and Drop Stage Plot Coordination
 - PDF Download
 - Users can upload their own profile image
 - Saved events



## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`



## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.



## APIs and frameworks
- Sendgrid for our email functionality
- TailwindCSS and PostCSS for the front end components and design
- Cloudinary to upload and manage user images
- To keep track of login information, we used JWT-based token authentication, bcrypt for password hashing, and Passport for user authentication



## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`
