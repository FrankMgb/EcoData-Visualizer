import React from 'react';
import { Globe, Database, ShieldCheck } from 'lucide-react';

const DataProviders = () => {
    const providers = [
        {
            name: "NASA GISTEMP",
            desc: "Global Surface Temperature Analysis providing comprehensive climate data.",
            icon: <Globe size={32} />
        },
        {
            name: "NOAA",
            desc: "National Oceanic and Atmospheric Administration's climate monitoring.",
            icon: <Database size={32} />
        },
        {
            name: "Climate Trace",
            desc: "Independent tracking of greenhouse gas emissions with high precision.",
            icon: <ShieldCheck size={32} />
        }
    ];

    return (
        <section className="providers-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why These Data Sources Matter</h2>
                    <p>We rely on the most trusted and verified global datasets.</p>
                </div>

                <div className="providers-grid">
                    {providers.map((provider, index) => (
                        <div key={index} className="provider-item">
                            <div className="provider-icon">{provider.icon}</div>
                            <h3>{provider.name}</h3>
                            <p>{provider.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .providers-section {
          padding: 4rem 0;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }
        .providers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          text-align: center;
          margin-top: 3rem;
        }
        .provider-item {
          padding: 1rem;
        }
        .provider-icon {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          transition: color 0.2s;
        }
        .provider-item:hover .provider-icon {
          color: var(--primary);
        }
        .provider-item h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .provider-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default DataProviders;
