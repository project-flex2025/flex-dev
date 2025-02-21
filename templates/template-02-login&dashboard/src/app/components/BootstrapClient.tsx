'use client'; // Ensures this runs only in the browser

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
    import('jquery').then(($) => {
      window.$ = window.jQuery = $;
      import('jquery.scrollbar').then(() => {
        $('.scroll-container').scrollbar();
      });
    });
  }, []);

  return null; // This component does not render anything
}
