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
        </div>
        </header>
        );
}

        <div class="main-wrapper">
          <main class="container margin-vert--lg">
            <div class="text--center margin-bottom--md margin-top--md">
              <h1>SDKs</h1>
            </div><div class="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An"><div class="card__body">
                  <div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Evolve JVM SDK</h4>
                      <small class="avatar__subtitle">Java / Kotlin JVM implementation of the Evolve CIM profile and related tools for working with data models. Also contains interfaces for communicating with the Energy Workbench Network Server.</small>
                    </div>
                  </div>
                </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="jvm-sdk" target="_blank" rel="noreferrer noopener">Documentation</a>
                      <a class="button button--small button--secondary button--block" href="https://github.com/zepben/evolve-sdk-jvm" target="_blank" rel="noreferrer noopener">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">Evolve Python SDK</h4>
                        <small class="avatar__subtitle">Python implementation of the Evolve CIM profile and related tools for working with data models. Also contains interfaces for communicating with the Energy Workbench Network Server.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="python-sdk" target="_blank" rel="noreferrer noopener">Documentation</a>
                      <a class="button button--small button--secondary button--block" href="https://github.com/zepben/evolve-sdk-python" target="_blank" rel="noreferrer noopener">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                          </path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text--center margin-bottom--md margin-top--md">
              <h1>Servers</h1>
            </div>
            <div class="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body"><div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Energy Workbench Server</h4>
                      <small class="avatar__subtitle">Data server for energy networks built on top of the Evolve SDK.</small>
                    </div>
                  </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="energy-workbench-server" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">Energy Network Server</h4>
                        <small class="avatar__subtitle">Cut down version of the Energy Workbench server to provide only network models and related functions.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer"><div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="network-server" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">PoF Historian Server</h4>
                        <small class="avatar__subtitle">REST-like API access to PowerOn Fusion historical analog data.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer"><div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="pof-historian" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body"><div class="avatar">
                    <div class="avatar__intro margin-left--none">
                      <h4 class="avatar__name">Evolve App Server</h4>
                      <small class="avatar__subtitle">Server that provides authentication, user data, and other app data to an Evolve client, while acting as a gateway for other evolve services</small>
                    </div>
                  </div>
                  </div>
                  <div class="card__footer"><div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="evolve-app-server" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text--center margin-bottom--md margin-top--md">
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
                  <div class="card__footer"><div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="ewb-bundle" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text--center margin-bottom--md margin-top--md">
              <h1>Data Models</h1>
            </div>
            <div class="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">Evolve Profile</h4>
                        <small class="avatar__subtitle">Evolve profile of the CIM data model.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="cim/evolve" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">CIM100 Data Model</h4>
                        <small class="avatar__subtitle">CIM100 data model.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="cim/cim100" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg"><div class="card showcaseItem_63An"><div class="card__body">
                <div class="avatar">
                  <div class="avatar__intro margin-left--none">
                    <h4 class="avatar__name">IEEE 2030.5 Data Model</h4>
                    <small class="avatar__subtitle">The complete IEEE 2030.5 data model.</small>
                  </div>
                </div>
              </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <a class="button button--small button--secondary button--block" href="2030-5" target="_blank" rel="noreferrer noopener">Documentation</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="text--center margin-bottom--md margin-top--md">
              <h1>Tools</h1>
            </div>
            <div class="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">Feeder Load Analysis</h4>
                        <small class="avatar__subtitle">Runs load analysis of feeder segments on network models provided by the Energy Workbench.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="feeder-load-analysis" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text--center margin-bottom--md margin-top--md">
              <h1>SINCAL</h1>
            </div>
            <div class="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">SINCAL Exporter</h4>
                        <small class="avatar__subtitle">Exporter to create SINCAL models from the network models provided by the Energy Workbench.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="sincal-exporter" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcaseItem_63An">
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">SINCAL Smart Load Plugin</h4>
                        <small class="avatar__subtitle">SINCAL plugin that provides load data from the Energy Workbench when running load flow studies.</small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a class="button button--small button--secondary button--block" href="smart-load-plugin" target="_blank" rel="noreferrer noopener">Documentation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* <div class="col col--4 margin-bottom--lg">
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
    </header> */}


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
