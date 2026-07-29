import { useEffect, useState } from 'react';

// Returns the id of the section currently scrolled to the top of the viewport,
// so the navigation can highlight the active link. Uses scroll position rather
// than a thin IntersectionObserver band (which can fall between sections).
export default function useActiveSection(ids, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids || ids.length === 0) {
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const current =
        ids
          .filter((id) => {
            const element = document.getElementById(id);
            return element && element.getBoundingClientRect().top <= offset;
          })
          .pop() || '';
      setActiveId(current);
    };

    // Throttle scroll work to one update per animation frame to avoid layout
    // thrashing on rapid scroll events.
    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [ids, offset]);

  return activeId;
}
