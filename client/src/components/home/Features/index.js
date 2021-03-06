import React from 'react';

import Feature from './Feature';
import features from './dummyFeatures';

const Features = () => {
  return (
    <section id="features ">
      <div className="container box text-center px-4 py-5">
        <h1 className="py-5">Features</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {features.map((feature) => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
