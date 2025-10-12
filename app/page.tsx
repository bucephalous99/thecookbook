'use client';

import { useState } from 'react';
import {
  ArrowRight, Heart, Sparkles, CheckCircle, Clock, Shield,
  X, User, Building, Mail, Phone, TrendingUp, Zap, Target,
  ChevronDown
} from 'lucide-react';
import Header from './components/Header';
import HeroSimple from './components/HeroSimple';
import LanguageSwitch from './components/LanguageSwitch';
import InfiniteIconScroll from './components/InfiniteIconScroll';
import CatalogSection from './components/CatalogSection';
import BookCallModal from './components/BookCallModal';

export default function Home() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [bookCallModalOpen, setBookCallModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    source: ''
  });

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    alert(`Thanks ${formData.name}! 🎉\n\nWe'll contact you within 24h.`);
    setShowLeadForm(false);
    setFormData({ name: '', email: '', phone: '', business: '', source: '' });
  };

  const openFormWithSource = (source: string) => {
    setFormData({...formData, source});
    setShowLeadForm(true);
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Clean Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray/40 to-dark"></div>
      </div>

      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        <LanguageSwitch />
        {/* HERO SECTION */}
        <HeroSimple
          icon={<Clock className="w-20 h-20" />}
          onCtaClick={() => setBookCallModalOpen(true)}
          features={[
            {
              icon: <Shield className="w-6 h-6" />,
              text: "No commitment"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              text: "24h response"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              text: "Fast setup"
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              text: "Guaranteed ROI"
            }
          ]}
          variant="gradient"
        />

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* PROBLEM/SOLUTION SECTION - Customer Journey Step 2 */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Does This Sound <span className="text-rose-400">Familiar</span>?
              </h2>
              <p className="text-xl text-gray-400">The reality of running a business without automation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { emoji: '😫', problem: 'Working 70h/week', detail: 'But your business growth doesn\'t match your effort' },
                { emoji: '📱', problem: 'Always on WhatsApp', detail: 'Including weekends and holidays' },
                { emoji: '💸', problem: 'Missing opportunities', detail: 'Because you can\'t respond to everyone in time' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-900/20 to-rose-900/20 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{item.problem}</h3>
                  <p className="text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Solution Preview */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-12 text-center">
              <h3 className="text-4xl font-display font-bold text-white mb-4">
                But there's a <span className="text-primary-light">Simple Solution</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                AI agents that replicate your best employee, work 24/7, and never take vacations
              </p>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-xl text-white font-bold transition-all hover:scale-105"
              >
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* CATALOG SECTION - Customer Journey Step 3 */}
        <div id="services">
          <CatalogSection onOpenForm={openFormWithSource} />
        </div>

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* SOCIAL PROOF - Customer Journey Step 4 */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Real{' '}
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Verified transformations from business owners like you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Maria Gonzalez',
                  business: 'Sweet Dreams Bakery',
                  result: 'From 70h to 40h/week. Same revenue.',
                  quote: 'The AI agent takes orders while I sleep. Now I have time for my family.',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                  border: 'border-purple-400/40'
                },
                {
                  name: 'Carlos Mendoza',
                  business: 'Express Auto Service',
                  result: '+150% in scheduled appointments',
                  quote: 'The chatbot responds instantly. My customers love the speed.',
                  gradient: 'from-primary/20 to-accent/20',
                  border: 'border-primary/40'
                },
                {
                  name: 'Ana Rodriguez',
                  business: 'Fashion Style Boutique',
                  result: '23h/week back for family',
                  quote: 'AI handles everything. I just approve. Total game changer.',
                  gradient: 'from-rose-500/20 to-orange-500/20',
                  border: 'border-rose-400/40'
                },
              ].map((testimonial, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border-2 ${testimonial.border} rounded-3xl p-8 hover:scale-105 transition-all`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white text-2xl font-display font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-xl">
                    <div className="text-green-300 font-bold text-sm">{testimonial.result}</div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - Customer Journey Step 5 */}
        <section className="py-32 px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border-2 border-primary/50 rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  Ready to Reclaim<br />
                  <span className="text-primary-light">Your Life</span>?
                </h2>

                <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                  Schedule your free consultation now.<br />
                  <span className="text-primary-light font-bold">
                    Zero commitment. Zero risk. Just results.
                  </span>
                </p>

                <button
                  onClick={() => setBookCallModalOpen(true)}
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent text-gray-900 font-display font-bold px-12 py-6 rounded-2xl text-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] inline-flex items-center gap-3 mb-8 shadow-2xl"
                >
                  <Heart className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  Schedule Now (Free)
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-light" />
                    <span>No commitment</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-light" />
                    <span>No credit card</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-light" />
                    <span>24h response</span>
                  </span>
                </div>

                <div className="pt-10 mt-10 border-t border-gray-700/50">
                  <p className="text-gray-400 text-lg">
                    <span className="text-yellow-300 font-bold">Guarantee:</span>{' '}
                    If after the call you decide it's not for you,
                    we'll send you a free guide with 5 automations you can implement yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* OPTIMIZED LEAD FORM MODAL */}
      {showLeadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
          <div className="bg-gradient-to-br from-dark to-gray border-2 border-primary/50 rounded-3xl p-10 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-3">
                Final Step!
              </h3>
              <p className="text-gray-300 text-lg">
                We'll contact you in{' '}
                <span className="text-primary-light font-bold">less than 24h</span>
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Your name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Smith"
                    className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Best email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 555-123-4567"
                    className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Your business *
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="E.g., Bakery, Consulting..."
                    className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent text-white font-display font-bold py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] flex items-center justify-center gap-3 mt-8 text-xl"
              >
                <Sparkles className="w-6 h-6" />
                Confirm Free Consultation
              </button>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mt-6">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary-light" />
                  100% secure data
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-primary-light" />
                  No spam
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      <BookCallModal
        isOpen={bookCallModalOpen}
        onClose={() => setBookCallModalOpen(false)}
      />
    </div>
  );
}