
# WanderLust

## Introduction
**WanderLust** is a web application designed to help users explore and discover new travel destinations. By providing curated content, user-generated reviews, and personalized recommendations, WanderLust aims to be the ultimate guide for travelers.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Destination Search**: Users can search for destinations based on preferences.
- **User Reviews**: A platform for travelers to share their experiences.
- **Personalized Recommendations**: Tailored suggestions based on user interests.
- **Interactive Maps**: Explore destinations with integrated maps.
- **Itinerary Planner**: Create and manage travel plans.

## Installation
To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AshKatale/WanderLust.git
   ```
2. Navigate to the project directory:
   ```bash
   cd WanderLust
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
After installation, start the application with:
```bash
node app.js
```
The application should be accessible at `http://localhost:8080`.

## Configuration
Configuration details such as environment variables should be defined in a `.env` file. Example:
```env
CLOUD_NAME=your_cloud_host
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_cloud_secret
ATLASDB_URL=your_db_url
SECRET=your_secret_string
```

## Dependencies
- **Express**: For server-side routing.
- **Mongoose**: For MongoDB interactions.
- **EJS**: As the templating engine.
- **Passport.js**: For authentication.

## Deployment
- **Render**

Project Link - https://wanderlust-mlqi.onrender.com

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
