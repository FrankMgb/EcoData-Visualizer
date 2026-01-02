const metrics = [
  { label: 'Temperature', value: '+1.5°C', change: 'Since 1880', color: 'from-orange-500/20 to-red-500/20' },
  { label: 'Carbon Dioxide', value: '420 ppm', change: 'Highest in 2M years', color: 'from-gray-500/20 to-gray-700/20' },
  { label: 'Sea Level', value: '+4 inches', change: 'Since 1993', color: 'from-blue-500/20 to-cyan-500/20' },
  { label: 'Ice Sheets', value: '427 Gt', change: 'Lost per year', color: 'from-cyan-500/20 to-blue-700/20' },
];

const MetricsGrid = () => {
  return (
    <section id="data-metrics" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Core Climate Indicators
        </h2>
        <p className="text-gray-400">
          Track the vital metrics related to climate health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`group p-6 rounded-2xl glass hover:bg-gradient-to-br ${metric.color} transition-all duration-500 hover:-translate-y-1 cursor-default border border-white/5 hover:border-white/10`}
          >
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
              {metric.label}
            </h3>
            <div className="text-3xl font-bold text-white mb-1 group-hover:text-glow">
              {metric.value}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-300">
              {metric.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsGrid;
