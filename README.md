# Portfolio: Azzidan Al'fatio Syachputra
Static site, no build step. Open `index.html`, or upload the folder to Netlify / Vercel / GitHub Pages.
Pages: index, about, projects, social, skills, experience (`.html`). On Netlify/Vercel they also open as `/about`, `/projects`, etc.

## Edit content
Everything is in `js/data.js`. Items marked `TODO` are placeholders (Instagram, email, previous education, organization, Wedding Organizer, certificates, repo links, project features).
- Replace the photo: overwrite `assets/photo.jpg` (portrait, ~900px wide).
- Add a project: copy one object in `projects` and edit it. No layout changes needed.
- Change social links: edit the `social` list (`url`, `handle`).
- Add experience or a certificate: add an object to `timeline` (remove `placeholder: true`).
- Colors: variables at the top of `css/style.css`.
