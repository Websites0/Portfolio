# MD Mahfiz Kaif - Personal Portfolio

This is a fully responsive and interactive personal portfolio website for MD Mahfiz Kaif, a passionate front-end developer. The site is designed to showcase projects, skills, and provide an easy way for potential employers to get in touch.

**[View Live Demo](https://portfolio-sepia-xi-42.vercel.app/)**

---

## ✨ Features

This portfolio is packed with modern features to create a great user experience:

-   **Fully Responsive:** The layout adapts beautifully to all screen sizes, from mobile phones to large desktop monitors.
-   **Dark Mode:** A sleek dark mode that can be toggled by the user and is saved in their browser for future visits.
-   **Dynamic Project Loading:** The projects showcased on the portfolio are loaded dynamically from a simple `projects.json` file, making it easy to update the project list without touching the HTML.
-   **Interactive Gradient Theme:** The entire website features a beautiful, layered gradient theme that makes the design pop.
-   **Client-Side Form Validation:** The contact form provides instant feedback to the user, ensuring that all fields are filled out correctly before submission.
-   **Card-Based Layout:** The "Projects" and "Skills" sections use a modern, card-based layout with Flexbox for a clean and organized presentation.

---

## 📂 Project Structure

```
.
├── 📄 index.html        # The main landing page
├── 📄 about.html        # The "About Me" page
├── 📄 projects.html     # The "Projects" page (content is loaded dynamically)
├── 📄 skills.html       # The "Skills" page
├── 📄 contact.html      # The "Contact" page with a functional form
│
├── 📁 assets/
│   ├── 🎨 style.css       # All styles for the website
│   └── ⚙️ script.js       # All JavaScript for interactive features
│
├── 📦 projects.json     # JSON file containing data for the projects section
└── 📖 README.md         # This file!
```

---

## 🚀 Technologies Used

This project was built from scratch using fundamental web technologies:

-   **HTML5**
-   **CSS3** (with CSS Variables for theming)
-   **JavaScript (ES6+)**

---

## 🔧 How to Run Locally

To view the project on your local machine, you can follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Start a simple local server.** Since the project uses `fetch()` to load the `projects.json` file, you'll need to serve the files rather than opening the `index.html` directly. The easiest way is to use Python's built-in HTTP server:
    ```bash
    python -m http.server
    ```

4.  **Open your browser** and navigate to `http://localhost:8000`.

And that's it! You should now be able to see the portfolio running locally.