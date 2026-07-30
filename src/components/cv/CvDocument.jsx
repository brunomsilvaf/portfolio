import React from 'react';
import PropTypes from 'prop-types';
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Image,
  Svg,
  Path,
  Font,
  StyleSheet
} from '@react-pdf/renderer';
import OpenSansRegular from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans-Bold.ttf';
import ProfilePhoto from '../../assets/images/profile_photo.png';
import CgiLogo from '../../assets/logos/cgi.png';
import DiconiumLogo from '../../assets/logos/diconium.png';
import RiskcoLogo from '../../assets/logos/riskco.png';
import TalkdeskLogo from '../../assets/logos/talkdesk.png';

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: OpenSansRegular, fontWeight: 400 },
    { src: OpenSansSemiBold, fontWeight: 600 },
    { src: OpenSansBold, fontWeight: 700 }
  ]
});
// Avoid awkward word breaks in justified/wrapped text.
Font.registerHyphenationCallback((word) => [word]);

const colors = {
  text: '#1F2933',
  muted: '#616E7C',
  accent: '#2563EB',
  border: '#E4E7EB'
};

const LOGOS = {
  diconium: DiconiumLogo,
  talkdesk: TalkdeskLogo,
  cgi: CgiLogo,
  riskco: RiskcoLogo
};

// Single-path icons (24x24 viewBox) used in the contact line.
const ICONS = {
  mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  location:
    'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  web: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
};

const stripUrl = (url) => url.replace(/^https?:\/\//i, '').replace(/\/+$/, '');

const styles = StyleSheet.create({
  page: {
    paddingVertical: 38,
    paddingHorizontal: 44,
    fontFamily: 'Open Sans',
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.text
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4
  },
  headerText: { flex: 1, paddingRight: 18 },
  avatarWrap: {
    width: 78,
    height: 78,
    borderRadius: 39,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#F0F2F5'
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPositionY: '100%'
  },
  name: { fontSize: 19, fontWeight: 700, lineHeight: 1.15 },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.accent,
    marginTop: 3,
    lineHeight: 1.2
  },
  contacts: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    marginTop: 3
  },
  contactIcon: { marginRight: 4 },
  contactText: { fontSize: 8, color: colors.accent, textDecoration: 'none' },
  contactTextMuted: { fontSize: 8, color: colors.muted },
  tagline: { fontSize: 9, marginTop: 12 },
  section: { marginTop: 18 },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 4,
    marginBottom: 9
  },
  item: { marginBottom: 14 },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  companyRow: { flexDirection: 'row', alignItems: 'center', flexShrink: 1 },
  inlineLogo: { height: 10, marginLeft: 6 },
  itemTitle: { fontSize: 10, fontWeight: 700 },
  itemDate: { fontSize: 8, color: colors.muted },
  itemSubtitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.accent,
    marginTop: 2,
    marginBottom: 2
  },
  itemLocal: { fontSize: 8.5, color: colors.muted, marginTop: 1 },
  paragraph: { marginTop: 5 },
  bullet: { flexDirection: 'row', marginTop: 3 },
  bulletDot: { width: 12 },
  bulletText: { flex: 1 },
  label: { fontWeight: 600 },
  muted: { color: colors.muted },
  projects: { marginTop: 7 },
  projectLine: { marginTop: 4 },
  projectName: {
    fontWeight: 700,
    color: colors.accent,
    textDecoration: 'none'
  },
  meta: { marginTop: 6, color: colors.muted },
  languages: { marginTop: 10 }
});

function Section({ title, children, breakBefore = false }) {
  return (
    <View style={styles.section} break={breakBefore}>
      <View wrap={false}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  breakBefore: PropTypes.bool
};

function Bullet({ children }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

Bullet.propTypes = {
  children: PropTypes.node.isRequired
};

function ContactItem({ icon, label, href = undefined, muted = false }) {
  const textStyle = muted ? styles.contactTextMuted : styles.contactText;
  return (
    <View style={styles.contactItem}>
      <Svg viewBox="0 0 24 24" width={9} height={9} style={styles.contactIcon}>
        <Path d={icon} fill={colors.muted} />
      </Svg>
      {href ? (
        <Link style={textStyle} src={href}>
          {label}
        </Link>
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </View>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  muted: PropTypes.bool
};

export default function CvDocument({ data }) {
  const {
    name,
    role,
    tagline,
    contact,
    profile,
    experience,
    education,
    skills,
    projects,
    conferences,
    associativism,
    hobbies
  } = data;

  return (
    <Document title={`${name} - CV`} author={name} subject={role}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <View style={styles.contacts}>
              <ContactItem
                icon={ICONS.location}
                label={contact.location}
                muted
              />
              <ContactItem
                icon={ICONS.mail}
                label={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactItem
                icon={ICONS.linkedin}
                label={stripUrl(contact.linkedin)}
                href={contact.linkedin}
              />
              <ContactItem
                icon={ICONS.github}
                label={stripUrl(contact.github)}
                href={contact.github}
              />
              <ContactItem
                icon={ICONS.web}
                label={stripUrl(contact.portfolio)}
                href={contact.portfolio}
              />
            </View>
          </View>
          <View style={styles.avatarWrap}>
            <Image src={ProfilePhoto} style={styles.avatar} />
          </View>
        </View>
        <View>
          {tagline ? <Text style={styles.tagline}>{tagline}</Text> : null}
          {profile.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <Section title={experience.title}>
          {experience.jobs.map((job) => (
            <View key={job.key} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.companyRow}>
                  <Text style={styles.itemTitle}>{job.company}</Text>
                  {LOGOS[job.key] ? (
                    <Image src={LOGOS[job.key]} style={styles.inlineLogo} />
                  ) : null}
                </View>
                <Text style={styles.itemDate}>{job.date}</Text>
              </View>
              <Text style={styles.itemSubtitle}>{job.role}</Text>
              {job.summary.map((paragraph, index) => (
                <Text key={index} style={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
              {job.details.map((paragraph, index) => (
                <Text key={index} style={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
              {job.projects.length > 0 && (
                <View style={styles.projects}>
                  {job.projects.map((project) => (
                    <Text key={project.name} style={styles.projectLine}>
                      <Link style={styles.projectName} src={project.url}>
                        {project.name}
                      </Link>
                      <Text style={styles.muted}> — {project.description}</Text>
                    </Text>
                  ))}
                </View>
              )}
              {job.skills.length > 0 && (
                <Text style={styles.meta}>{job.skills.join('  •  ')}</Text>
              )}
            </View>
          ))}
        </Section>

        <Section title={education.title}>
          {education.entries.map((entry) => (
            <View key={entry.key} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{entry.title}</Text>
                <Text style={styles.itemDate}>{entry.date}</Text>
              </View>
              <Text style={styles.itemLocal}>{entry.local}</Text>
              {entry.details.map((detail, index) => (
                <Bullet key={index}>{detail}</Bullet>
              ))}
            </View>
          ))}
          <View wrap={false} style={styles.languages}>
            <Text style={styles.label}>{education.languagesTitle}</Text>
            <Text style={styles.muted}>
              {education.languages
                .map((language) => `${language.title} — ${language.level}`)
                .join('  •  ')}
            </Text>
          </View>
        </Section>

        <Section title={skills.title}>
          {skills.categories.map((category) => (
            <Text key={category.name} style={styles.paragraph}>
              <Text style={styles.label}>{category.name}: </Text>
              <Text style={styles.muted}>{category.items.join(', ')}</Text>
            </Text>
          ))}
        </Section>

        <Section title={projects.title} breakBefore>
          {projects.items.map((project) => (
            <View key={project.title} style={styles.item} wrap={false}>
              <Text>
                {project.demo || project.repo ? (
                  <Link
                    style={styles.projectName}
                    src={project.demo || project.repo}
                  >
                    {project.title}
                  </Link>
                ) : (
                  <Text style={styles.itemTitle}>{project.title}</Text>
                )}
              </Text>
              <Text style={styles.paragraph}>{project.description}</Text>
              {Array.isArray(project.tags) && project.tags.length > 0 && (
                <Text style={styles.meta}>{project.tags.join('  •  ')}</Text>
              )}
            </View>
          ))}
        </Section>

        <Section title={conferences.title}>
          {conferences.items.map((conference) => (
            <View key={conference.name} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{conference.name}</Text>
                <Text style={styles.itemDate}>{conference.date}</Text>
              </View>
              {conference.description ? (
                <Text style={styles.paragraph}>{conference.description}</Text>
              ) : null}
            </View>
          ))}
        </Section>

        <Section title={associativism.title}>
          {associativism.description.map((paragraph, index) => (
            <Text
              key={index}
              style={index === 0 ? undefined : styles.paragraph}
            >
              {paragraph}
            </Text>
          ))}
        </Section>

        <Section title={hobbies.title}>
          {hobbies.items.map((hobby) => (
            <Text key={hobby.name} style={styles.paragraph}>
              <Text style={styles.label}>{hobby.name}: </Text>
              <Text style={styles.muted}>{hobby.description}</Text>
            </Text>
          ))}
        </Section>
      </Page>
    </Document>
  );
}

CvDocument.propTypes = {
  data: PropTypes.object.isRequired
};
