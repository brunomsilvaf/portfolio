// Shared design tokens (typography, spacing, radii, motion, layout).
const tokens = {
  font_family: "'Open Sans', 'Segoe UI', system-ui, sans-serif",
  font_size: '16px',
  font_size_mobile: '15px',

  // Fluid type scale
  fs_hero: 'clamp(2.5rem, 6vw, 4rem)',
  fs_section: 'clamp(1.4rem, 3vw, 1.9rem)',
  fs_subtitle: 'clamp(1.05rem, 2vw, 1.3rem)',
  line_height: '1.65',

  // Spacing scale
  space_xs: '0.5rem',
  space_sm: '1rem',
  space_md: '1.5rem',
  space_lg: '2.5rem',
  space_xl: '4rem',
  space_section: 'clamp(3rem, 7vw, 5rem)',

  // Radii
  radius_sm: '8px',
  radius_md: '12px',
  radius_lg: '20px',

  // Motion
  transition: '0.2s ease',
  transition_slow: '0.45s ease',

  // Layout
  content_width: '1080px',
  reading_width: '70ch',
  header_height: '64px'
};

export const lightTheme = {
  ...tokens,
  mode: 'light',
  color_primary: '#1F2933',
  color_secondary: '#FFFFFF',
  color_background: '#F7F8FA',
  color_surface: '#FFFFFF',
  color_surface_alt: '#F0F2F5',
  color_border: '#E4E7EB',
  color_muted: '#616E7C',
  color_accent: '#2563EB',
  color_accent_hover: '#1D4ED8',
  color_on_accent: '#FFFFFF',
  color_header_bg: 'rgba(247, 248, 250, 0.8)',
  color_header_border: 'rgba(0, 0, 0, 0.08)',
  color_footer_bg: '#111827',
  color_footer_text: '#E5E7EB',
  color_hero_gradient:
    'radial-gradient(1200px 500px at 50% -10%, rgba(37, 99, 235, 0.12), transparent), linear-gradient(180deg, #EEF2FF 0%, #F7F8FA 70%)',
  shadow_card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)'
};

export const darkTheme = {
  ...tokens,
  mode: 'dark',
  color_primary: '#E5E7EB',
  color_secondary: '#0F172A',
  color_background: '#0F172A',
  color_surface: '#1E293B',
  color_surface_alt: '#182235',
  color_border: '#334155',
  color_muted: '#94A3B8',
  color_accent: '#60A5FA',
  color_accent_hover: '#3B82F6',
  color_on_accent: '#0B1220',
  color_header_bg: 'rgba(15, 23, 42, 0.7)',
  color_header_border: 'rgba(255, 255, 255, 0.08)',
  color_footer_bg: '#0B1220',
  color_footer_text: '#CBD5E1',
  color_hero_gradient:
    'radial-gradient(1200px 500px at 50% -10%, rgba(96, 165, 250, 0.15), transparent), linear-gradient(180deg, #1E293B 0%, #0F172A 70%)',
  shadow_card: '0 1px 2px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.4)'
};

export const ThemeMain = lightTheme;

export default lightTheme;
