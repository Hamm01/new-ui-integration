# Habit Tracker App

A simple and responsive Habit Tracking application built with React.  
This app helps users track daily habits week-by-week, maintain streaks, and store all progress locally

---

## Features

- Add new habits using a form
- Track habits for each day of the week
- Blue button indicates the habit is completed
- Grey button indicates the habit is not completed
- Weekly navigation using Previous and Next buttons
- Weekly progress tracking
- Streak counter for completed habits
- Data persistence using `localStorage`
- Responsive and clean UI

---

## Tech Stack

- React
- JavaScript
- CSS / Tailwind CSS (if used)
- LocalStorage API

---

## Project Functionality

### 1. Add Habits

Users can create habits by entering the habit name in the form.

Example:

- Workout
- Reading
- Meditation

---

### 2. Weekly Habit Tracking

Each habit displays all 7 weekdays:

- Mon
- Tue
- Wed
- Thurs
- Fri
- Sat
- Sun

Users can click a day button to mark the habit as completed.

| State         | Color |
| ------------- | ----- |
| Completed     | Blue  |
| Not Completed | Grey  |

---

### 3. Streak Counter

Each habit shows its streak count, representing how consistently the habit has been completed.

Example:

- 5-day streak
- 10-day streak

---

### 4. Week Navigation

Users can move between weeks using:

- Previous Week button
- Next Week button

The app updates:

- Habit completion status
- Weekly progress
- Streak data

for the selected week.

---

### 5. Weekly Progress

The application displays how many habits were completed during the selected week.

Example:
Completed Habits: `18 / 28`

---

### 6. LocalStorage Support

All habits and tracking data are automatically saved in the browser using `localStorage`.

This ensures:

- Data remains after page refresh
- No backend required
- Fast and lightweight experience

---
