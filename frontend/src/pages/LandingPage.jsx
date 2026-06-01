import React from 'react';

export default function LandingPage({ onSignIn }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <nav className="bg-slate-800/50 backdrop-blur p-6 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ServiceFlow AI</h1>
          <div className="flex gap-4">
            <button className="text-slate-300 hover:text-white">Features</button>
            <button className="text-slate-300 hover:text-white">Pricing</button>
            <button onClick={onSignIn} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Sign In</button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">AI Customer Service for Trade Businesses</h2>
        <p className="text-xl text-slate-300 mb-8">Automate appointment booking, estimate requests, and customer callbacks. Let AI handle the phone.</p>
        <button onClick={onSignIn} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded text-lg font-bold">Start Free Trial</button>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">How It Works</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg">
            <p className="text-5xl mb-4">☎️</p>
            <h4 className="text-xl font-bold mb-2">Customer Calls</h4>
            <p className="text-slate-300">Customers call your AI phone number 24/7</p>
          </div>
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg">
            <p className="text-5xl mb-4">🤖</p>
            <h4 className="text-xl font-bold mb-2">AI Handles It</h4>
            <p className="text-slate-300">Books appointments, provides estimates, qualifies leads</p>
          </div>
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg">
            <p className="text-5xl mb-4">📊</p>
            <h4 className="text-xl font-bold mb-2">You Manage</h4>
            <p className="text-slate-300">See all calls, leads, and appointments in one dashboard</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Pricing</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">Starter</h4>
            <p className="text-3xl font-bold mb-2">$299</p>
            <p className="text-slate-300 mb-6">/month</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ 500 calls/month</li>
              <li>✓ Appointment booking</li>
              <li>✓ Basic reporting</li>
            </ul>
            <button onClick={onSignIn} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Get Started</button>
          </div>
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg border-green-500/50">
            <h4 className="text-2xl font-bold mb-4">Growth</h4>
            <p className="text-3xl font-bold mb-2">$799</p>
            <p className="text-slate-300 mb-6">/month</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ 2,000 calls/month</li>
              <li>✓ Estimates + booking</li>
              <li>✓ Advanced analytics</li>
            </ul>
            <button onClick={onSignIn} className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold">Popular</button>
          </div>
          <div className="bg-slate-800 border border-blue-500/20 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
            <p className="text-3xl font-bold mb-2">Custom</p>
            <p className="text-slate-300 mb-6">Let's talk</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ Unlimited calls</li>
              <li>✓ Custom AI training</li>
              <li>✓ Dedicated support</li>
            </ul>
            <button onClick={onSignIn} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Contact</button>
          </div>
        </div>
      </section>
    </div>
  );
}
