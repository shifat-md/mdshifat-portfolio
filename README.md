<!-- # Md Shifat - Junior Front-End Developer Portfolio

A modern, responsive, and data-driven developer portfolio built with React.js, React Router, React Icons, and modern glassmorphic CSS styling with space theme background.

---

## 🚀 How to Run the Project Locally

### 1. Install Dependencies
Open your terminal in this project folder and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open the browser at `http://localhost:5173` (or the URL shown in your terminal).

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
src/
├── assets/
│   ├── profile.svg       # Default developer avatar placeholder
│   ├── profile.jpg       # (Drop your real photo here)
│   └── profile.js        # Easy image switcher helper
├── components/
│   ├── AnimatedSpaceBackground.jsx  # Space-themed starry canvas background
│   ├── Navbar.jsx                   # Responsive navigation bar with mobile menu
│   ├── Footer.jsx                   # Footer with social links & copyright
│   ├── ProjectCard.jsx              # Reusable project showcase card
│   ├── SkillCard.jsx                # Reusable skill progress card with icons
│   └── Pagination.jsx               # Reusable project pagination controls
├── data/
│   ├── personalInfo.js   # Name, bio, email, social links, stats & goals
│   ├── skills.js         # Technical skills, categories, percentages & icons
│   ├── experience.js     # Job titles, companies, dates & responsibilities
│   ├── education.js      # CSE degree, institute, status & highlights
│   └── projects.js       # Projects list, categories, links & tech stack
├── pages/
│   ├── Home.jsx          # Hero section, quick highlights, featured work & CTAs
│   ├── About.jsx         # Detailed journey, CSE background, career goals
│   ├── Skills.jsx        # Categorized skills grid with interactive filter tabs
│   ├── Experience.jsx    # Professional timeline & responsibilities
│   ├── Projects.jsx      # Paginated projects catalog with filter buttons
│   ├── Education.jsx     # CSE degree & academic milestones
│   └── Contact.jsx       # Contact information, interactive form & social handles
├── App.jsx               # Routes setup & layout wrapper
├── main.jsx              # React DOM entry point wrapped in BrowserRouter
└── index.css             # Theme design tokens, typography & glassmorphism
```

---

## 🛠️ How to Customize Your Portfolio

All your content is decoupled from UI components. You do **not** have to edit JSX or CSS to update your personal data!

### 1. Changing Your Profile Photo
- Place your photo inside `src/assets/` named `profile.jpg` (or any image).
- In `src/assets/profile.js`, change:
  ```javascript
  import profileImage from './profile.jpg'; // Point to your photo
  ```

### 2. Changing Personal Details & Bio
Open `src/data/personalInfo.js`:
- Edit `name`, `role`, `tagline`, `bio`, `journey`, `careerGoals`.
- Edit `email`, `location`, `phone`.
- Update `socialLinks` (GitHub URL, LinkedIn URL, and CV download URL).

### 3. Adding or Updating Projects
Open `src/data/projects.js`:
- Add a new project object to the `projects` array:
  ```javascript
  {
    id: 9,
    title: "My New Web App",
    category: "React", // or "JavaScript", "Full Stack / API", "UI/UX"
    description: "Short summary...",
    image: "https://your-screenshot-url.com/image.jpg",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/yourusername/project",
    liveDemo: "https://your-project.vercel.app",
    featured: true
  }
  ```
- The **Pagination** on the Projects page automatically updates based on how many projects you have!

### 4. Updating Skills
Open `src/data/skills.js`:
- Add, edit, or adjust proficiency levels (`level: 90`), categories, and icon names.

### 5. Updating Experience
Open `src/data/experience.js`:
- Update `company`, `role`, `duration`, `responsibilities`, and `technologies`.

### 6. Updating Education
Open `src/data/education.js`:
- Change your university name, graduation status, and academic highlights.

---

## ⚡ Libraries & Technologies Used
- **React.js & JSX**: Modern component architecture with React Hooks.
- **Vite**: Fast development server and optimized production bundler.
- **React Router (`react-router-dom`)**: Seamless client-side navigation.
- **React Icons (`react-icons`)**: Rich SVG icon set for developer tools and social media.
- **HTML5 Canvas Animation**: Lightweight space & starry nebula background without performance overhead. -->
