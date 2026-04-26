# EventHub – Event Management Application

## 📌 Project Overview

EventHub is a simple event management web application built with Next.js. Users can explore events, view details, and manage their own events through a clean and responsive interface. The project focuses on UI consistency, basic functionality, and protected routes using authentication.

---

## ✨ Key Features

* Browse and search events
* Filter events by category and other fields
* View detailed event information
* Add new events (protected route)
* Manage events (view & delete)
* Responsive design for mobile, tablet, and desktop
* Clean and consistent UI layout

---

## 🔐 Authentication

Firebase Authentication is used for:

* Email & Password login/register
* User state management
* Protected routes (Add Event, Manage Events)

---

## 🧭 Routes Summary

| Route            | Description                          |
| ---------------- | ------------------------------------ |
| `/`              | Landing page with multiple sections  |
| `/events`        | View all events with search & filter |
| `/events/[id]`   | Event details page                   |
| `/about`         | About the application                |
| `/items/add`     | Add new event (protected)            |
| `/events/manage` | Manage events (protected)            |
| `/login`         | Login page                           |

---

## 🛠️ Technologies Used

* Next.js (App Router)
* React
* Tailwind CSS
* Firebase Authentication
* MongoDB (Mongoose)

---

## ⚙️ Setup & Installation

1. Clone the repository

```
git clone https://github.com/your-username/eventhub.git
```

2. Install dependencies

```
npm install
```

3. Add environment variables
   (Create `.env.local`)

```
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
```

4. Run the development server

```
npm run dev
```

---

## 🚀 Live Demo

Deployed on Vercel (add your link here)

---

## 📎 Notes

This project was built as part of the Odyssey Next.js assessment task, focusing on UI structure, routing, and basic full-stack functionality.
