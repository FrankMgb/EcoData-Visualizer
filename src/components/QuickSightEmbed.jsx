"use client";
import React from 'react';
import { LineChart } from 'lucide-react';

const QuickSightEmbed = () => {
  return (
    <section className="py-24 px-6 relative" id="charts">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Climate Change Over Time
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Analyze the trends of key indicators with interactive dashboards.
            The dashboard, and a future integrated AI assistant, will translate complex climate trends into short, plain-language explanations.
          </p>
        </div>

        <div className="w-full h-[600px] glass rounded-3xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="text-center space-y-6 relative z-10 px-6">
            <div className="mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
              <LineChart size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Interactive Dashboard</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Connect to AWS QuickSight to view real-time climate data visualization.
            </p>
            <button className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary rounded-full transition-all duration-300">
              Load Demo Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSightEmbed;
