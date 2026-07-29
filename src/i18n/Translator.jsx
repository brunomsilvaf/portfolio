import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';

function Translator({ path }) {
  useTranslation();
  return (
    <Trans i18nKey={path} components={{ bold: <strong />, italic: <i /> }} />
  );
}

Translator.propTypes = {
  path: PropTypes.string.isRequired
};

export default Translator;
