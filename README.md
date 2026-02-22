# Web Integration Lab: DOM & Frontend for AI Engineers

**Goal:** Master Vanilla JS to bridge Python/FastAPI backends with .NET/Web frontends.
**Focus:** DOM Manipulation, Event Handling, and API Integration.

## 🛠 Setup & Running
*   **Open Folder:** Open this repository in VS Code.
*   **Run Code:** Right-click inside any `index.html` file -> **"Open with Live Server"**.
*   **Console:** Press `F12` in the browser to debug.

---

## 📚 Module 1: Selectors (How to grab elements)
*   **Old School:** `document.getElementById('id-name')` -> Fastest, strictly for IDs.
*   **Modern (Best):** `document.querySelector('.class-name')` -> Selects the *first* match.
*   **Multiple:** `document.querySelectorAll('div')` -> Returns a NodeList (like an Array).
    *   *Note:* You can loop through a NodeList using `.forEach()`.

## ✏️ Module 2: Manipulation (Changing things)
*   **Text Only:** `element.innerText = "Hello"` -> Safe, strictly text.
*   **HTML Content:** `element.innerHTML = "<b>Bold</b>"` -> Renders HTML tags.
*   **Styles:** `element.style.backgroundColor = "red"` -> CamelCase CSS properties.
*   **Attributes:** `element.setAttribute('src', 'image.png')`.

## 🖱 Module 3: Events (Interactivity)
*   **Syntax:** `element.addEventListener('event_type', callback_function)`
*   **Click:** `btn.addEventListener('click', () => { ... })`
*   **Input:** `input.addEventListener('input', (e) => { console.log(e.target.value) })`
*   **Prevent Reload:** `e.preventDefault()` -> Critical for form submissions in Single Page Apps.

## 🚀 Future Integration (Python Bridge)
*   **Fetch API:** The replacement for Python's `requests`.
*   **Async/Await:** Used to handle network delays from LLM generation.

---

## 🔗 Resources
*   **Chai aur Code Playlist:** Videos #31 (DOM), #32 (Selectors), #36 (Events).
*   **MDN Docs:** The official documentation (use as reference).