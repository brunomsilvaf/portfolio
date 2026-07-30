import SocialData from './SocialData';

// Keys mirror the order used across the site (work-experience.jsx, education.jsx).
const JOB_KEYS = ['diconium', 'talkdesk', 'cgi', 'riskco'];
const EDUCATION_KEYS = [
  'curricular_internship',
  'summer_internship',
  'masters'
];
const LANGUAGE_KEYS = ['pt', 'en', 'de'];

// Converts the site's lightweight HTML (<br/><br/> between paragraphs) into an
// array of plain-text paragraphs suitable for the PDF renderer.
function toParagraphs(text) {
  if (!text) {
    return [];
  }
  return String(text)
    .split(/(?:<br\s*\/?>\s*){2,}/i)
    .map((part) =>
      part
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter(Boolean);
}

// Builds a normalized CV data object from the active i18n translations, so the
// generated PDF always mirrors the website content (and language).
export default function getCvData(t) {
  const arr = (key) => {
    const value = t(key, { returnObjects: true, defaultValue: [] });
    return Array.isArray(value) ? value : [];
  };

  return {
    name: 'Bruno Fernandes',
    role: t('role'),
    tagline: t('hero.tagline'),
    contact: {
      email: SocialData.email,
      location: SocialData.location,
      linkedin: SocialData.linkedin,
      github: SocialData.github,
      portfolio: SocialData.portfolio
    },
    profile: toParagraphs(t('profile')),
    experience: {
      title: t('work-experience.title'),
      jobs: JOB_KEYS.map((key) => {
        const base = `work-experience.${key}`;
        return {
          key,
          company: t(`${base}.title`),
          role: t(`${base}.role`),
          date: t(`${base}.date`),
          summary: toParagraphs(t(`${base}.summary`)),
          details: toParagraphs(t(`${base}.details`)),
          skills: arr(`${base}.skills`),
          projects: arr(`${base}.projects`)
        };
      })
    },
    education: {
      title: t('education.title'),
      entries: EDUCATION_KEYS.map((key) => {
        const base = `education.${key}`;
        return {
          key,
          title: t(`${base}.title`),
          local: t(`${base}.local`),
          date: t(`${base}.date`),
          details: arr(`${base}.details`)
        };
      }),
      languagesTitle: t('education.languagesTitle'),
      languages: LANGUAGE_KEYS.map((key) => ({
        key,
        title: t(`education.languages.${key}.title`),
        level: t(`education.languages.${key}.level`)
      }))
    },
    skills: {
      title: t('skills.title'),
      categories: arr('skills.categories')
    },
    projects: {
      title: t('projects.title'),
      items: arr('projects.items')
    },
    conferences: {
      title: t('conferences.title'),
      items: arr('conferences.items')
    },
    associativism: {
      title: t('associativism.title'),
      description: toParagraphs(t('associativism.description'))
    },
    hobbies: {
      title: t('hobbies.title'),
      items: arr('hobbies.items')
    }
  };
}
