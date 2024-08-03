# Todo List Application

## Overview

This Todo List application is a simple, responsive, and interactive web app built using React. It allows users to manage tasks by adding, editing, marking as completed, and deleting them. The application features an expandable list for detailed task descriptions, a search functionality, and a visually appealing design with a dark theme.

## System Design

The application consists of the following key components:

1. **Task Management**: Users can create new tasks, update existing ones, mark tasks as completed, and delete tasks.
2. **Expandable List**: Tasks are displayed in a list format, and each task can be expanded to show additional details such as a description and the last updated timestamp.
3. **Search Functionality**: Users can filter tasks using the search bar, which updates the displayed tasks in real-time.
4. **Persistent Storage**: Tasks are stored in the browser's local storage to ensure data persists between sessions.

## Implementation

### Frontend

- **Framework**: React is used to build the frontend of the application.
- **Styling**: The application is styled using CSS, with a focus on a modern and clean dark-themed design.
- **State Management**: React's state and hooks are used for managing task data and UI states.
- **Icons**: Icons are used for buttons to enhance the user experience, making it intuitive to perform actions such as adding, editing, and deleting tasks.

### Data Storage

- **Local Storage**: The application uses the browser's local storage to save tasks, ensuring that data persists even after the page is refreshed.

## Setup and Run

### Prerequisites

Ensure you have the following installed:

- Node.js (with npm)
- Git

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/GauravKapale/todo-list-app.git

2. Navigate to the project directory:
cd todo-list-app

3. Install dependencies:
npm install

4. Run the application:
npm start
