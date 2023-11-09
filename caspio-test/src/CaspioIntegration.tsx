import React, { useEffect } from 'react';

const CaspioIntegration: React.FC = () => {
  useEffect(() => {
    // Caspio deployment script
    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://c1hbu366.caspio.com/dp/6abdb000eeb8ef752d55480bb7c3/emb';

    // Find the element with the ID "caspioContainer"
    const caspioContainer: HTMLElement | null =
      document.getElementById('caspioContainer');

    // Check if the element exists before appending the script
    if (caspioContainer) {
      caspioContainer.appendChild(script);
    }

    // Clean up the script when the component unmounts
    return () => {
      // Check again if the element exists before removing the script
      if (caspioContainer && script.parentNode === caspioContainer) {
        caspioContainer.removeChild(script);
      }
    };
  }, []);

  return <div id="caspioContainer"></div>;
};

export default CaspioIntegration;
