# Calculator App: L1 Calculator

This is a Next.js project that implements a calculator with the ability to save and search past calculations based on names of your choice. The project uses Prisma with SQLite as the database for local development. There is no database for public deployment as it is out of my budget for this course.

**Introduction Video:** https://drive.google.com/file/d/1VxW3sFkCThGLdsZUQGN_q2q1EWABYQtB/view?usp=sharing

**APP Platform:**
Web

**Tech Stack:**
Next.js, chakra UI, prisma (sqlite), vecel

**App Intro:**
This is a calculator app but it allows for the storing of queries as well as the searching of the queries. You ever have psets in math where you run a million calculations and it's hard to find computational results from the past? Use our L1 Calculator!

**Tool Intro:**
VSCode built-in Copilot, Public ChatGPT (free version at https://chatgpt.com/). Usage included code generation as well as debugging; see more details in the introduction video.

**Detailed overview**:
This is a calculator with a local database that stores your past calculation queries. There are two input fields: one for the calculation, and the other for what you want to name the calculation. There is one search bar for looking up past queries by their names. There are three clickable buttons, the calculate button which evaluates the expression, the save button which saves a non-empty expression given a non-empty name, and the clear all button which clears all current queries saved. The value of this web app is how quick and easy it is to look up previous calculations by custom names. The production process can be found in the **introduction video** above.

## Deployment Link

You can access the deployed version of the app at:
[https://calculator-dzpm7f31x-jonathan-chens-projects-82cdad12.vercel.app](https://calculator-dzpm7f31x-jonathan-chens-projects-82cdad12.vercel.app)

**Note:** In the deployed version, database functions (save queries and search queries) do not work since I am not paying for a database in deployment for this specific assignment.

## Local Development

To run the project locally, follow these steps:

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

Option 1:
1. Clone the repository:

   ```sh
   git clone https://github.com/csc301-2024-f/assignment-2-ai-app-jonathanjschen913
   cd calculator-app
   
2. run ./run.sh. Use this option if you are unsure if you have npm or node both installed, or if you just want to save some time.

Option 2:
1. Clone the repository:

   ```sh
   git clone https://github.com/csc301-2024-f/assignment-2-ai-app-jonathanjschen913
   cd calculator-app

2. Install the dependencies:

   npm install

3. Set up the database:

   npx prisma migrate dev --name init

**Running the Development Server**
To start the development server, run:

  npm run dev

  Open http://localhost:3000 with your browser to see the result.

**Project Structure**
pages/: Contains the Next.js pages.\
components/: Contains the React components used in the project.\
prisma/: Contains the Prisma schema and migration files.\
styles/: Contains the CSS files for styling.

**License**\
This project is licensed under the MIT License.
