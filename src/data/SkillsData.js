// Technology skills grouped by category.
// The category display names are translated in the i18n files under
// `skills.categories.<key>`. Everything here is language-independent, so it
// lives in a single place. `level` is either 'strong' or 'familiar'.
const SkillsData = [
  {
    key: 'languages',
    items: [
      { name: 'Java', level: 'strong' },
      { name: 'SQL', level: 'strong' },
      { name: 'Kotlin', level: 'familiar' },
      { name: 'Go', level: 'familiar' },
      { name: 'C#', level: 'familiar' },
      { name: 'Groovy', level: 'familiar' },
      { name: 'Ruby', level: 'familiar' },
      { name: 'JavaScript', level: 'familiar' },
      { name: 'TypeScript', level: 'familiar' }
    ]
  },
  {
    key: 'frameworks',
    items: [
      { name: 'Spring Boot', level: 'strong' },
      { name: 'Quarkus', level: 'strong' },
      { name: 'GraphQL', level: 'strong' },
      { name: 'React', level: 'familiar' },
      { name: 'Node.js', level: 'familiar' }
    ]
  },
  {
    key: 'tools',
    items: [
      { name: 'Docker', level: 'strong' },
      { name: 'Git', level: 'strong' },
      { name: 'GitHub', level: 'strong' },
      { name: 'Keycloak', level: 'strong' },
      { name: 'Kafka', level: 'strong' },
      { name: 'Maven', level: 'strong' },
      { name: 'Gradle', level: 'strong' }
    ]
  },
  {
    key: 'cloud',
    items: [
      { name: 'CI/CD', level: 'familiar' },
      { name: 'Azure', level: 'familiar' },
      { name: 'AWS', level: 'familiar' },
      { name: 'Kubernetes', level: 'familiar' }
    ]
  }
];

export default SkillsData;
