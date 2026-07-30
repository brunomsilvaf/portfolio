import React from 'react';
import PropTypes from 'prop-types';
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet
} from '@react-pdf/renderer';
import OpenSansRegular from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans-Bold.ttf';

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

const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 42,
    fontFamily: 'Open Sans',
    fontSize: 9.5,
    lineHeight: 1.45,
    color: colors.text
  },
  name: { fontSize: 22, fontWeight: 700 },
  role: { fontSize: 12, fontWeight: 600, color: colors.accent, marginTop: 2 },
  contact: { fontSize: 8.5, color: colors.muted, marginTop: 5 },
  link: { color: colors.accent, textDecoration: 'none' },
  tagline: { fontSize: 9.5, marginTop: 8 },
  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 3,
    marginBottom: 6
  },
  item: { marginBottom: 9 },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  itemTitle: { fontSize: 10.5, fontWeight: 700 },
  itemDate: { fontSize: 8.5, color: colors.muted },
  itemSubtitle: { fontSize: 9.5, fontWeight: 600, color: colors.accent },
  itemLocal: { fontSize: 9, color: colors.muted },
  paragraph: { marginTop: 3 },
  bullet: { flexDirection: 'row', marginTop: 2 },
  bulletDot: { width: 10 },
  bulletText: { flex: 1 },
  label: { fontWeight: 600 },
  muted: { color: colors.muted },
  projects: { marginTop: 4 },
  projectLine: { marginTop: 2 },
  projectName: {
    fontWeight: 700,
    color: colors.accent,
    textDecoration: 'none'
  },
  meta: { marginTop: 3, color: colors.muted }
});

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View wrap={false}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
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
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.contact}>
            {contact.location} {'  •  '}
            <Link style={styles.link} src={`mailto:${contact.email}`}>
              {contact.email}
            </Link>
            {'  •  '}
            <Link style={styles.link} src={contact.linkedin}>
              LinkedIn
            </Link>
            {'  •  '}
            <Link style={styles.link} src={contact.github}>
              GitHub
            </Link>
            {'  •  '}
            <Link style={styles.link} src={contact.portfolio}>
              Portfolio
            </Link>
          </Text>
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
                <Text style={styles.itemTitle}>{job.company}</Text>
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
          <View wrap={false} style={{ marginTop: 2 }}>
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

        <Section title={projects.title}>
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
