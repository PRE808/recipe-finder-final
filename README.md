# Recipe Finder App

## About
This is a simple Recipe Finder web app made using Next.js.

It lets users search recipes, view details, and save favorites.

---

## Pages

### Home Page (/)
- Shows recipes
- Search recipes
- Click recipe to view details
- Save favorites

### Recipe Details Page (/recipe/[id])
- Shows recipe ID from URL

### Favorites Page (/favorites)
- Shows saved recipes using localStorage

---

## Components

### Navbar
- Used on all pages
- Links to Home and Favorites

---

## State

- useState is used for search and favorites
- localStorage is used to save favorites

---

## Features

- Page navigation (routing)
- Dynamic routes
- Add favorites
- Remove favorites
- Simple styling