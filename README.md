# Todo List Application

## Overview

The Todo List Application is a simple React-based web app that allows users to manage their tasks. Users can add, edit, delete, and mark tasks as completed. The application features a search bar to filter tasks and displays tasks in an expandable list format. It uses a dummy JSON file for data storage and local storage to persist tasks.

## System Design

### Features
- **Create Task**: Users can add new tasks with a description.
- **Update Task**: Users can edit existing tasks.
- **Mark as Done**: Users can mark tasks as completed.
- **Search Tasks**: Users can filter tasks using a search bar.
- **Expandable List**: Tasks can be expanded to show additional details like descriptions and timestamps.

### Data Storage
The application uses a dummy JSON file (`src/data/tasks.json`) as a data repository for the initial data setup. For persisting user tasks, the application utilizes the browser's local storage.

## Implementation

### Frontend
- **Framework**: React
- **Styling**: CSS for layout and styling
- **Components**:
  - **App.js**: Main component that manages the state of tasks and handles user interactions.
  - **TodoInput.js**: Component for adding new tasks.
  - **TodoItem.js**: Component for displaying and managing individual tasks.
  - **SearchBar.js**: Component for filtering tasks.

### Setup and Running the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/GauravKapale/todo-list-app.git
   cd todo-list-app


3. Install dependencies:
npm install

4. Run the application:
npm start
