import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
]

function Feature({ }) {
  return (
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
