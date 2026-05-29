import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Clock, DollarSign, TrendingUp, Play } from 'lucide-react';

export default function LandingPage() {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Instant Setup', desc: 'Live in 24 hours, not 14 days' },
    { icon: <Clock className="w-6 h-6" />, title: 'Real-time Automation', desc: '80% less manual work per day' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Proven ROI', desc: '3-6 month payback guaranteed' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Scale without Hiring', desc: 'Handle 3x more jobs per team' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-screen">
      <nav className="sticky top-0 z-50 bg-slate-950/95 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold">AI</div>
              <span className="text-xl font-bold">ServiceFlow</span>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-blue-400 rounded-lg text-blue-400 hover:bg-blue-400/10">Sign In</button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold">Start Free Trial</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-sm font-semibold text-blue-300 mb-4">For Trade Professionals</span>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">Stop Losing Money to Admin Work</h1>
            </div>

            <p className="text-xl text-slate-300">AI that handles calls, schedules, estimates, and follow-ups while you focus on actual jobs. Live in 24 hours. Save $30K-$100K+ per year.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No complex integrations. Works with tools you already use.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 customer support. Answers in your customer's voice.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Proven: $45K-$100K annual savings per business.</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2">
                See Live Demo <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-blue-400/50 rounded-lg font-semibold hover:bg-blue-400/10 transition">Schedule Call</button>
            </div>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-400/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Play className="w-20 h-20 mx-auto text-blue-400 opacity-50" />
                <p className="text-slate-400">Interactive Dashboard Demo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { label: 'Businesses Trusting Us', value: '200+' },
            { label: 'Avg. Monthly Savings', value: '$4.2K' },
            { label: 'Setup Time', value: '24hrs' },
            { label: 'Uptime Guarantee', value: '99.9%' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/50 border border-blue-400/20 rounded-xl p-6">
              <div className={`text-3xl font-bold text-blue-400 transition-all duration-1000 ${animateStats ? 'opacity-100' : 'opacity-0'}`}>
                {stat.value}
              </div>
              <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-20">
        {features.map((feature, i) => (
          <div key={i} className="bg-slate-800/50 border border-blue-400/20 rounded-xl p-6 text-center hover:border-blue-400/50 transition">
            <div className="flex justify-center mb-4 text-blue-400">{feature.icon}</div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      <footer className="border-t border-blue-400/20 bg-slate-950/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
          <p>&copy; 2024 ServiceFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
