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
        <h1 className="hero__title"><img src='/img/Enphoria.png' ></img></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <div class="main-wrapper">
        <main class="container margin-vert--lg">
          <div class="text--center margin-bottom--md margin-top--md">
            <h1>Productos de Enphoria</h1>
            <h1>Localizador de Fallas</h1>
          </div><div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An"><div class="card__body">
                <div class="avatar">
                  <div class="avatar__intro margin-left--none">
                    <h4 class="avatar__name">Manual de Usuario</h4>
                    <small class="avatar__subtitle">Este es el Manual de Usuario para el correcto uso del Localizador de fallas</small>
                  </div>
                </div>
              </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="/docs/Manual de Usuario" target="_blank" rel="noreferrer noopener">Documentación</a>
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
                      <small class="avatar__subtitle">Este es el Manual Técnico para el uso del Localizador de fallas</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="/docs/Manual Tecnico" target="_blank" rel="noreferrer noopener">Documentación</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text--center margin-bottom--md margin-top--md">
            <h1>Productos que representamos de Zepben</h1>
          </div>
          <div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Energy Workbench</h4>
                      <small class="avatar__subtitle">Plataforma escalable de integración de redes y planificación de redes</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="/blog/energy-workbench" target="_blank" rel="noreferrer noopener">Documentación</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">EDNAR</h4>
                      <small class="avatar__subtitle">EDNAR (Electrical Distribution Network Access Register) es una aplicación diseñada desde cero para respaldar el flujo de trabajo de solicitud de acceso a la red planificado para las redes de distribución de electricidad.</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer"><div class="button-group button-group--block">
                  <a class="button button--small button--secondary button--block" href="blog/ednar" target="_blank" rel="noreferrer noopener">Documentación</a>
                </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Herramienta de Exportación y Creación de Modelos SINCAL</h4>
                      <small class="avatar__subtitle">La herramienta de creación de modelos Zeppelin Bend Sincal (exportador Sincal) proporciona una forma sencilla de crear modelos PSS/Sincal</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer"><div class="button-group button-group--block">
                  <a class="button button--small button--secondary button--block" href="/blog/SINCAL" target="_blank" rel="noreferrer noopener">Documentación</a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="text--center margin-bottom--md margin-top--md">
            <h1>User Interface</h1>
          </div><div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Energy Workbench Web Client</h4>
                      <small class="avatar__subtitle">Web app to view load profiles, load analysis and geographic views of the network hosted by the Energy Workbench.</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="ewb-web-client" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg"><div class="card showcaseItem_63An">
              <div class="card__body"><div class="avatar"><div class="avatar__intro margin-left--none">
                <h4 class="avatar__name">Evolve App Server Web Client</h4>
                <small class="avatar__subtitle">Web app for accessing Evolve App Server (EAS) functionality and features, including studies, visualisations and trend analysis.</small>
              </div>
              </div>
              </div>
              <div class="card__footer">
                <div class="button-group button-group--block">
                  <a class="button button--small button--secondary button--block" href="eas-web-client" target="_blank" rel="noreferrer noopener">Documentation</a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="text--center margin-bottom--md margin-top--md">
            <h1>Migrators</h1>
          </div>
          <div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">PoF Network Extractor</h4>
                      <small class="avatar__subtitle">PowerOn Fusion DMS adapter to extract network models into the Energy Workbench Server format.</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="pof-network-extractor" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An"><div class="card__body">
                <div class="avatar">
                  <div class="avatar__intro margin-left--none">
                    <h4 class="avatar__name">PoF Simplified Extractor</h4>
                    <small class="avatar__subtitle">Builds an Energy Workbench model from a PowerOn Fusion model simplifying lines and buses.</small>
                  </div>
                </div>
              </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="pof-simplified-extractor" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">GIS Network Extractor</h4>
                      <small class="avatar__subtitle">GIS adapter to extract network models into the Energy Workbench Server format.</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="gis-network-extractor" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text--center margin-bottom--md margin-top--md">
            <h1>Data Processors</h1>
          </div>
          <div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An"><div class="card__body"><div class="avatar">
                <div class="avatar__intro margin-left--none">
                  <h4 class="avatar__name">Load Aggregator</h4>
                  <small class="avatar__subtitle">Data processor to perform aggregations of energy usage to distribution transformers.</small>
                </div>
              </div>
              </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="load-aggregator" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body"><div class="avatar">
                  <div class="avatar__intro margin-left--none">
                    <h4 class="avatar__name">Load Processor</h4>
                    <small class="avatar__subtitle">Data processor to process CSV meter energy usage records and create a time series database.</small>
                  </div>
                </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="load-processor" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Weather Processor</h4>
                      <small class="avatar__subtitle">Data processor to process CSV weather data and create a database.</small>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="weather-processor" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text--center margin-bottom--md margin-top--md">
            <h1>Bundles</h1>
          </div>
          <div class="row">
            <div class="col col--4 margin-bottom--lg">
              <div class="card showcaseItem_63An">
                <div class="card__body"><div class="avatar">
                  <div class="avatar__intro margin-left--none">
                    <h4 class="avatar__name">Energy Workbench Bundle</h4>
                    <small class="avatar__subtitle">A bundle that contains all the tools with compatible versions needed to setup a workbench.</small>
                  </div>
                </div>
                </div>
              </div>
              <div class="card__footer"><div class="button-group button-group--block">
                <a class="button button--small button--secondary button--block" href="ewb-bundle" target="_blank" rel="noreferrer noopener">Documentation</a>
              </div>
              </div>
            </div>
          </div> */}
        </main>
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
