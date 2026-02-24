# Chuks Kitchen - Food Ordering Interface

## 1. Project Overview

Project Name: Chuks Project

Live Demo: [trueminds-deliverables-1.vercel.app]

Tech Stack: HTML, CSS, JavaScript (deployed via Vercel)

## 2. Project Structure

Here is how the folders and files are organized:

The project has been refactored for better organization:

/root: Contains configuration files (.gitignore, package.json).

/pages: Contains all functional HTML pages and templates.

/assets (optional): Recommended folder for images, fonts, and global CSS.

## 3. Local Development Setup

To run this project on your local machine, follow these steps:

1. Prerequisites
   You need to have Node.js installed to manage dependencies (if using npm) and a code editor like VS Code.

2. Clone the Repository
   git clone https://github.com/DavidAkinJames/trueminds-deliverables-1

   cd truemind-deliverables-1

3. Install Dependencies
   Even though node_modules is ignored by Git, you must regenerate them locally:

   npm install

4. Running the Project
   Since the main entry points are now in the /pages directory, you can run a local server:
   VS Code Live Server: Open pages/index.html, right-click, and select "Open with Live Server."
   Vercel CLI (Recommended): To mimic the production environment exactly:

   npm i -g vercel
   vercel dev

Deployment Workflow
This project is configured for Continuous Integration (CI) via Vercel:

Branching: Always work on a feature branch or the main branch.

Pushing: Every git push origin main triggers an automatic build on Vercel.

Environment Variables: If the project uses sensitive keys (like API tokens), they are stored in Vercel Project Settings and should be added to a local .env file (which is ignored by Git).

Maintenance & Troubleshooting
Prettier Errors: If the IDE throws formatting errors, ensure the Prettier extension is installed. The project is configured to auto-format on save.

Paths: Note that all internal links use relative paths starting from the /pages directory (e.g., <a href="contact.html">).
