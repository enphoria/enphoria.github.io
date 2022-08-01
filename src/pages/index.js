import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.button1}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Manual de Usuario">
            <h4>Manual de Usuario</h4>
            <small>Localizador de fallas</small>

          </Link>
        </div>
      </div>

      <div className={styles.button2}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/Manual Tecnico">
          <h4>Manual Técnico</h4>
          <small>Localizador de fallas</small>
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Enphoria`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
