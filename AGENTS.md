# Portfolio Website Project Instructions

## Project Overview

This repository contains a personal portfolio website for a first-year college student interested in Electrical & Computer Engineering, AutoCAD, Circut Design, and technology.

The purpose of the website is to present personal information, education, technical skills, projects, and contact information in a professional and accessible portfolio.

The website must remain a static website that can be opened locally by opening `index.html`.

## Required Pages

The website must contain five separate pages:

1. `index.html` — Home
2. `about.html` — About Me
3. `projects.html` — Projects
4. `skills.html` — Skills
5. `contact.html` — Contact

Every page must contain navigation links to all five pages.

## Design and Style

Use a modern, clean, technology-focused design.

### Colors

- Main background: dark charcoal or near-black
- Secondary background: slightly lighter dark gray
- Main text: off-white or very light gray
- Secondary text: medium-light gray
- Accent color: blue
- Use sufficient color contrast for accessibility

### Typography

Use a clean sans-serif font stack using system fonts so the website does not depend on external font services.

Example:

`Arial, Helvetica, sans-serif`

### Visual Style

The website should have:

- A clean and professional appearance
- Consistent spacing and typography
- Simple project and skill cards where appropriate
- Subtle hover and focus effects
- Rounded corners used sparingly
- Clear visual hierarchy
- No unnecessary or overly complicated animations
- Consistent header, navigation, and footer styling across all pages

## Technical Rules

Use only:

- HTML5
- CSS
- Vanilla JavaScript

Do not use:

- React
- Vue
- Angular
- Bootstrap
- Tailwind
- npm
- Node.js
- Frameworks
- Build tools
- Backend/server code
- Databases
- Logins
- API keys
- Passwords
- Tokens

Use relative file paths throughout the project.

Do not use inline CSS styles.

All CSS should be stored in:

`css/styles.css`

All JavaScript should be stored in:

`js/script.js`

Images should be stored in:

`images/`

The website must work when `index.html` is opened locally without requiring a server or build process.

## HTML Requirements

Use semantic HTML5 elements where appropriate, including:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

Each page must contain exactly one `<h1>`.

Use headings in logical order.

Do not skip heading levels unnecessarily.

All navigation should remain consistent across all five pages.

## Responsive Design

The website must work correctly on both laptop and phone-sized screens.

Requirements:

- No horizontal scrolling
- Text must remain readable
- Images must resize appropriately
- Navigation must adapt to smaller screens
- Layouts should stack when necessary
- Use CSS media queries for responsive layouts

The mobile navigation must use a JavaScript-controlled hamburger menu.

## JavaScript Requirements

Keep JavaScript simple, readable, and easy to explain.

The website must include at least two interactive features:

1. Responsive hamburger navigation menu
2. Light/dark theme toggle

JavaScript should:

- Use clear variable and function names
- Include useful comments
- Avoid unnecessary complexity
- Produce no browser console errors
- Support keyboard interaction where appropriate

## Accessibility Requirements

Accessibility must be considered during every task.

Requirements:

- Every meaningful image must have descriptive `alt` text
- Decorative images should use appropriate empty alt text when needed
- All links, buttons, and form fields must be keyboard accessible
- Interactive elements must have visible focus states
- Use sufficient text/background contrast
- Use semantic HTML
- Use proper labels for form fields
- Navigation must work using Tab and Enter
- Aim for a Lighthouse Accessibility score of 90 or higher on every page

## Content Rules

Do not create fake personal information.

Do not include:

- Home address
- Phone number
- Private information
- Placeholder text such as Lorem Ipsum

If information is not provided, leave the section for the student to supply content rather than inventing personal facts.

The Projects page must eventually contain at least three real projects.

Each project should contain:

- Project title
- Description
- Image or screenshot
- Link when applicable

## Contact Page

Because this is a static website, do not create a backend contact system.

If a contact form is used:

- Validate it with JavaScript
- Clearly explain that the form does not directly send data
- Provide an appropriate email contact method

Do not expose private information.

## Code Quality

Keep the code:

- Clean
- Organized
- Readable
- Properly indented
- Easy for a beginner to understand and explain

Avoid unnecessary abstraction or overly advanced techniques.

Add useful comments where they help explain important logic, especially JavaScript.

Do not add large amounts of generated code when a simpler solution works.

## Workflow for Codex

Work on only one requested task at a time.

Before modifying files:

1. Read this `AGENTS.md`.
2. Review the existing repository structure.
3. Follow all rules in this file.

For each task:

1. Make only the changes needed for that task.
2. Do not redesign unrelated parts of the website.
3. Check that relative paths still work.
4. Check for obvious HTML, CSS, and JavaScript errors.
5. Briefly summarize what was changed.
6. Explain anything the student should manually test.

Do not begin additional tasks unless explicitly requested.

## Git Workflow

After a completed and reviewed task:

1. Create a small Git commit for that task.
2. Use a short, descriptive commit message.
3. Push the commit to the `main` branch on GitHub.

Examples of acceptable commit messages:

- `Add initial home page`
- `Add About page content`
- `Add responsive site styling`
- `Add mobile navigation`
- `Add theme toggle`
- `Fix keyboard navigation`
- `Add website test plan`

Do not:

- Combine many unrelated changes into one commit
- Use force push
- Rewrite Git history
- Reset previous commits unless specifically instructed

If a previous change must be undone, revert the appropriate commit instead.

## Testing

Changes should be tested after each task.

When applicable, check:

- Laptop layout
- Phone-sized layout
- Navigation links
- Keyboard navigation
- JavaScript functionality
- Browser console errors
- Image paths
- Accessibility

Final formal testing will be documented separately in `TESTING.md`.