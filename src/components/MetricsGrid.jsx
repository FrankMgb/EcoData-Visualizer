import React from 'react';
import { Thermometer, Cloud, Droplets, Wind } from 'lucide-react';

const MetricsGrid = () => {
    const metrics = [
        {
            icon: <Thermometer size={24} />,
            title: "Global Temperature",
            value: "+1.1°C",
            desc: "Rise in global average temperature since pre-industrial levels."
        },
        {
            icon: <Cloud size={24} />,
            title: "CO2 Levels",
            value: "419 ppm",
            desc: "Current concentration of carbon dioxide in the atmosphere."
        },
        {
            icon: <Droplets size={24} />,
            title: "Sea Level Rise",
            value: "3.4 mm/yr",
            desc: "Average rate of global sea level rise over the past decade."
        },
        {
            icon: <Wind size={24} />,
            title: "Methane Emissions",
            value: "1900 ppb",
            desc: "Atmospheric methane levels reaching record highs."
        }
    ];

    return (
        <section className="metrics-section" id="metrics">
            <div className="container">
                <div className="section-header">
                    <h2>Understand Your Metrics</h2>
                    <p>Track the vital signs of our planet with real-time data updates.</p>
                </div>

                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <div key={index} className="card metric-card">
                            <div className="metric-icon">{metric.icon}</div>
                            <div className="metric-content">
                                <h3>{metric.title}</h3>
                                <div className="metric-value">{metric.value}</div>
                                <p>{metric.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .metrics-section {
          padding: 4rem 0;
          background-color: var(--bg-primary);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .metric-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
        }
        .metric-icon {
          color: var(--accent);
          background: rgba(20, 184, 166, 0.1);
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .metric-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .metric-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
        </section>
    );
};

export default MetricsGrid;
