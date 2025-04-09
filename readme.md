# ✨ Kiarash Bashokian - Interactive Portfolio ✨

<p align="center">
  <img src="https://github.com/SOBI-THE-GOD/portfolio-project/assets/142573869/5cdad1e5-0cc3-4522-9973-68acd39a471a" alt="Project Demo Video" width="600"/>
</p>

---

## 📖 Description

This repository contains the frontend code for Kiarash Bashokian's interactive personal portfolio website. The web application serves as a dynamic and visually engaging showcase of his skills, projects, and knowledge.

Key features include:
* **Smooth Animations:** Fluid transitions and animations enhance the user experience, including text reveals and section transitions.
* **Dynamic Background Gradients:** Clicking the central logo smoothly transitions the background through a predefined set of beautiful color gradients.
* **Interactive Navigation:** Users can navigate between different sections (Introduction, Knowledge, Project Details) using intuitive UI elements like clickable titles and scroll icons.
* **Responsive Design Principles:** Built with considerations for various screen sizes (though specific breakpoints should be tested).
* **Optimized Build Process:** Uses Gulp for efficient SCSS compilation, CSS auto-prefixing, CSS minification, and JavaScript minification.

The target audience includes visitors wishing to learn more about Kiarash, potential employers, collaborators, and developers interested in the interactive design.

---

## 🚀 Live Demo & Preview

* **Live Site:** 🌐 [https://www.kiarashbashokian.com](https://www.kiarashbashokian.com)
* **Video Preview:** 🎥 See the animation link in the description above or [click here](https://github.com/SOBI-THE-GOD/portfolio-project/assets/142573869/5cdad1e5-0cc3-4522-9973-68acd39a471a).

---

## 🛠️ Technology Stack

This project leverages modern web technologies and build tools:

* **Core:** HTML5, CSS3, JavaScript (Vanilla ES6+)
* **Styling:** SCSS (Sass) for modular and maintainable stylesheets.
* **Build System:** Node.js & npm for package management.
* **Task Runner:** Gulp for automating development tasks:
    * `gulp-sass`: Compiling SCSS to CSS.
    * `gulp-postcss` with `autoprefixer`: Adding vendor prefixes to CSS for cross-browser compatibility.
    * `cssnano`: Minifying CSS for production.
    * `gulp-uglify`: Minifying JavaScript for production.
* **Version Control:** Git & GitHub

---

## 📁 Project Structure

The repository follows a standard structure for a frontend project with a build process:

<pre>
.
│   .gitignore         # Specifies intentionally untracked files that Git should ignore
│   gulpfile.js        # Gulp configuration file defining build tasks
│   index.html         # Main HTML entry point for the application
│   package-lock.json  # Records exact versions of dependencies
│   package.json       # Project metadata and dependency list
│   readme.md          # This README file
│
├───css                # Compiled CSS output directory
│       style.css      # Compiled and potentially minified CSS
│
├───js                 # JavaScript source directory
│       main.js        # Main JavaScript file containing application logic and interactions
│
└───scss               # SCSS source directory
style.scss     # Main SCSS file, imports other partials if any

*(Note: The `uglified-js` folder mentioned in `gulpfile.js` will be created upon running the `script` task to store minified JavaScript, but it's not present in the source structure).*
</pre>

---

## ⚙️ Installation Instructions

To set up the project locally for development or modification, follow these steps:

**Prerequisites:**
* **Node.js & npm:** Ensure you have Node.js installed. npm comes bundled with it. You can download it from [nodejs.org](https://nodejs.org/). Verify installation by running `node -v` and `npm -v` in your terminal.
* **Git:** Ensure you have Git installed to clone the repository. [git-scm.com](https://git-scm.com/)

**Steps:**

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/SOBI-THE-GOD/portfolio-project.git](https://github.com/SOBI-THE-GOD/portfolio-project.git)
    ```
2.  **Navigate to Project Directory:**
    ```bash
    cd portfolio-project
    ```
3.  **Install Dependencies:**
    This command reads the `package.json` file and installs the necessary development dependencies (like Gulp and its plugins).
    ```bash
    npm install
    ```

---

## ▶️ Usage

Once the installation is complete, you can run the project:

1.  **Run the Gulp Build & Watch Task:**
    This command executes the default Gulp task defined in `gulpfile.js`. It will:
    * Compile `scss/style.scss` into `css/style.css`.
    * Apply autoprefixing and minify the CSS.
    * Minify `js/main.js` into the `uglified-js` directory (though `index.html` links to the source `js/main.js` by default - adjust `index.html` or `gulpfile.js` if needed for production builds).
    * Start watching the `scss` and `js` directories for changes, automatically recompiling/minifying when files are saved.
    ```bash
    gulp
    ```
    *Keep this terminal window open while developing.*

2.  **View the Application:**
    Open the `index.html` file in your web browser. You can usually do this by double-clicking the file or using a live server extension in your code editor (like Live Server for VS Code).

**Key Interactions:**
* 🖱️ Click the central 'K' logo to change the background gradient.
* 🖱️ Hover over the main content area and navigation titles to see subtle gradient effects.
* 🖱️ Click on project titles in the navigation to view their details (if implemented).
* 🖱️ Use the scroll down/up arrows (Chevron icons) to navigate between the Introduction and Knowledge sections.

---

## 🤝 Contributing & Reuse

This project was specifically created for Kiarash Bashokian's portfolio by Alireza Sobhanian.

**Using This Structure for Your Own Portfolio:**

You are welcome to fork this repository and adapt the structure and dynamic features for your *own* personal portfolio.

1.  **Fork the Repository:** Click the 'Fork' button on the GitHub repository page.
2.  **Clone Your Fork:** `git clone https://github.com/YOUR_USERNAME/portfolio-project.git`
3.  **Customize:**
    * Modify `index.html` with your own content, projects, and information.
    * Update `scss/style.scss` (and potentially create new `.scss` partials) to match your desired visual style.
    * Adjust `js/main.js` if you need different animations or interactions. You might want to update the `colorGradsArr` with your preferred gradients.
    * **Crucially:** Update the author information in `package.json` and any visible attributions (like the footer) to reflect your own authorship.
4.  **Install & Run:** Follow the [Installation](#️-installation-instructions) and [Usage](#️-usage) steps above.

**Contributing to *This* Repository:**

As this is a personal portfolio, direct contributions might not be the primary focus. However, if you spot a bug or have a suggestion for improving the core functionality (like the Gulp setup or animation logic), feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourImprovement` or `bugfix/IssueDescription`).
3.  Make your changes and test thoroughly.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to your branch (`git push origin feature/YourImprovement`).
6.  Open a Pull Request back to the main `SOBI-THE-GOD/portfolio-project` repository.

---

## ✍️ Author

This project was developed by **Alireza Sobhanian** (GitHub: [SOBI-THE-GOD](https://github.com/SOBI-THE-GOD)) for Kiarash Bashokian.

---

## 📜 License

This project is licensed under the **ISC License**. You can find the details in the `LICENSE` file if included, or refer to the standard ISC license terms.

---

## 📝 Additional Notes

* The project relies heavily on vanilla JavaScript for DOM manipulation and animations, showcasing proficiency without relying on heavy frameworks for this specific use case.
* The Gulp build process ensures optimized and cross-browser compatible assets.
* The dynamic gradient feature (`changeGradSmoothly` function in `main.js`) provides a unique and memorable user experience.
* The `validator()` function in `main.js` seems to perform a simple check on the footer content; ensure this doesn't cause issues if modifying the footer significantly.

---
