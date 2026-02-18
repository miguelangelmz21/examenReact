# examenReact 🎮 Characters-API Project: Dragon Ball Z

This project is part of **Exam 02**, focusing on consuming external APIs using **React** and **Axios**. It implements a shared visualization architecture to handle and display different data structures within a unified UI.

---

## 🚀 Technologies Used

* **React 19** (Vite)
* **Tailwind CSS** (Styling & Animations)
* **Axios** (HTTP Requests)

---

## 🛠️ Technical Implementation

### 1. API Consumption with Axios
The data fetching logic was migrated from the native `fetch` API to `Axios` to leverage automatic JSON transformation.

In this case, the Dragon Ball API returns an object containing an items array, unlike the Pokémon API which returns the array directly.