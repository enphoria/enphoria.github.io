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

        <div class="col col--4 margin-bottom--lg">
          <div class="card showcaseItem_63An">
            <div class="card__body">
              <div class="avatar">
                <div class="avatar__intro margin-left--none">
                  <h4 class="avatar__name">Manual de Usuario</h4>
                  <small class="avatar__subtitle"> Este es el Manual de Usuario para el correcto uso del Localizador de fallas</small>
                </div>
              </div>
            </div>
            <div class="card__footer">
              <div class="button-group button-group--block">
                <a class="button button--small button--secondary button--block" href="/docs/Manual de Usuario" target="_blank" rel="noreferrer noopener">Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col col--4 margin-bottom--lg">
        <div class="card showcaseItem_63An">
          <div class="card__body">
            <div class="avatar">
              <div class="avatar__intro margin-left--none">
                <h4 class="avatar__name">Manual Técnico</h4>
                <small class="avatar__subtitle"> Este es el Manual Técnico para el uso del Localizador de fallas</small>
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="button-group button-group--block">
              <a class="button button--small button--secondary button--block" href="/docs/Manual Tecnico" target="_blank" rel="noreferrer noopener">Documentation</a>
            </div>
          </div>
        </div>
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
