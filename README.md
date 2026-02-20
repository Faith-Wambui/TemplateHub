# 📁 DPro Template Library: PM & MEAL Resources

> A professional web platform for accessing Project Management, Program Management, and MEAL templates — built on PM4NGOs' DPro suite of guides.

---

## 🌐 Live Site

👉 **[View the Template Library](https://github.com/Faith-Wambui/TemplateHub)**

---

## 📌 About

This platform provides a curated library of **49 ready-to-use templates** for development professionals working across project management, programme management, and MEAL (Monitoring, Evaluation, Accountability & Learning).

All templates are developed in line with **PM4NGOs' Project DPro, Program DPro, and MEAL DPro guides** — internationally recognised standards used by development professionals worldwide.

### What's included

| Category | Templates |
|---|---|
| 📊 MEAL | 14 templates |
| 📋 Project Management | 15 templates |
| 🌐 Program Management | 20 templates |
| **Total** | **49 templates** |

---

## ✨ Features

- 🔍 **Live search** — find any template instantly by name or keyword
- 🗂️ **Category filtering** — browse by MEAL, Project, or Program Management
- ⬇️ **One-click download** — all templates in `.docx` format, ready to edit
- 📱 **Fully responsive** — works on desktop, tablet, and mobile
- ⚡ **No login required** — open access for all users

---

## 🗂️ Project Structure

```
├── index.html                  ← Main platform page
├── styles.css                  ← Styling (Royal Blue / Navy / Orange theme)
├── script.js                   ← Search, filtering, and rendering logic
├── templates.js                ← Template registry — edit this to add templates
├── logo.png                    ← Platform logo & favicon
├── README.md                   ← This file
└── DPro_Template_Library/
    ├── MEAL_Templates/         ← 14 MEAL templates
    ├── Project_Templates/      ← 15 Project Management templates
    └── Program_Templates/      ← 20 Program Management templates
```

---

## ➕ Adding a New Template

1. Place your `.docx` file in the correct subfolder inside `DPro_Template_Library/`
2. Open `templates.js` and add a new entry:

```js
{
  id: "pm-16",                          // Unique ID
  name: "My New Template",             // Display name
  description: "What it does.",        // Short description (1-2 sentences)
  category: "project-management",      // project-management | program-management | meal
  icon: "📌",                           // Any emoji — must be unique
  file: "DPro_Template_Library/Project_Templates/My_New_Template.docx"
}
```

3. Save and push to GitHub — the site updates automatically.

---

## 🚀 Deployment (GitHub Pages)

This site is hosted for free on GitHub Pages.

To deploy your own copy:

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set Source to `main` branch, root folder (`/`)
4. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

> **Note:** Always use a local server (e.g. VS Code Live Server) when developing locally — do not open `index.html` directly in the browser as a file.

---

## 🎨 Theme

| Colour | Hex |
|---|---|
| Royal Blue | `#2055C7` |
| Navy | `#0A1A3A` |
| Orange | `#F4731A` |

Fonts: **Bodoni Moda** (headings) · **Jost** (body)

To update colours or fonts, edit the CSS variables at the top of `styles.css`.

---

## 📚 Based On

- [PM4NGOs Project DPro Guide](https://www.pm4ngos.org/project-dpro/)
- [PM4NGOs Program DPro Guide](https://www.pm4ngos.org/program-dpro/)
- [PM4NGOs MEAL DPro Guide](https://www.pm4ngos.org/meal-dpro/)

---

## ✉️ Template Requests

Missing a template? Use the **Request a Template** button on the site to get in touch.

---

## 📄 License

Templates are free to use and adapt for non-commercial development work. Please credit PM4NGOs and the DPro guides where appropriate.
