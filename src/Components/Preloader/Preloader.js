import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false); // Set loading to false once window has loaded
    });
  }, []);

  return loading ? (
    <div className="preloader">
      {/* Add your loading spinner GIF */}
      <img src="Spin@1x-1.0s-200px-200px.gif" alt="Loading spinner" />
    </div>
  ) : null;
};

export default Preloader;
