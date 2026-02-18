# Project Overview

This project is a simple Advice Generator web application. It fetches random advice from the Advice Slip API (https://api.adviceslip.com/advice) and displays it to the user. Users can click a button to get new advice. The application features a clean UI with loading states.

## Main Technologies

*   HTML5
*   CSS3 (with Google Fonts - Manrope)
*   JavaScript (ES6+)
*   Frontend Mentor challenge

## Architecture

The application follows a standard client-side web architecture:

*   `index.html`: Provides the structure and links to CSS and JS.
*   `css/styles.css`: Styles the application, including responsive design elements.
*   `js/main.js`: Handles the fetching of advice from the API, updates the DOM, and manages the loading/display states.

# Building and Running

This is a static web application. To run it, simply open `index.html` in a web browser. No specific build steps are required.

# Development Conventions

*   **Styling:** Uses plain CSS with an `@import` for Google Fonts.
*   **JavaScript:** Uses modern JavaScript features (`async/await`, `fetch`).
*   **Project Structure:** Standard separation of concerns into `css/`, `js/`, and `images/` directories.
