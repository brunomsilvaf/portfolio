import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import getCvData from '../../data/cvData';

// Builds the CV from the current translations and downloads it as a PDF.
// The PDF renderer is code-split and only fetched when the user clicks.
export default function useDownloadCv() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  const downloadCv = useCallback(async () => {
    setLoading(true);
    try {
      const data = getCvData(t);
      const lang = (i18n.resolvedLanguage || i18n.language || 'en').split(
        '-'
      )[0];
      const { default: generateAndDownloadCv } = await import('./generateCv');
      await generateAndDownloadCv(data, `Bruno-Fernandes-CV-${lang}.pdf`);
    } finally {
      setLoading(false);
    }
  }, [t, i18n]);

  return { downloadCv, loading };
}
