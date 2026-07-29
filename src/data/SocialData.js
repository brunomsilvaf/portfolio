// Central place for contact / social links.
// Replace the placeholder values (email, cv) with the real ones when ready.
const SocialData = {
  email: 'brunomsilvaf@gmail.com',
  linkedin: 'https://linkedin.com/in/brunomsilvaf',
  github: 'https://github.com/brunomsilvaf',
  portfolio: 'https://brunomsilvaf.github.io/portfolio/',
  location: 'Coimbra, Portugal',
  // File served from the public/ folder. Replace public/cv.pdf with the real CV.
  cv: 'cv.pdf'
};

// Fully-resolved URL to the CV, accounting for the app's base path
// (e.g. `/portfolio/cv.pdf` on GitHub Pages).
export const cvHref = `${import.meta.env.BASE_URL}${SocialData.cv}`;

export default SocialData;
