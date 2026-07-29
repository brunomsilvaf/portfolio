import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

// Fades and slides its children into view the first time they enter the
// viewport, using an IntersectionObserver. Respects reduced-motion settings.
export default function Reveal({ children, as = undefined }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} as={as} className={visible ? 'is-visible' : ''}>
      {children}
    </Wrapper>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType
};
