import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="" >
        <div>
          <h1>
            We Help Businesses Pre-Qualify For Financing & Build Business Credit :
          </h1>
        </div>
      </section>

      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our <span className="text-yellow-500">Approach</span>
          </h1>
          {/* Video Placeholder Box from PDF */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video bg-zinc-900 border-2 border-yellow-600 shadow-[0_0_30px_rgba(202,138,4,0.3)] flex items-center justify-center mb-10 group cursor-pointer">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-black border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
          <button className="bg-yellow-600 text-black font-bold py-3 px-8 uppercase tracking-widest hover:bg-yellow-500 transition-colors">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* --- SERVICES SECTION (Grid of 6) --- */}
      <section id="services" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-yellow-500 mb-2">Services</h2>
            <div className="h-0.5 w-12 bg-yellow-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-8 bg-zinc-900 border border-zinc-800 hover:border-yellow-600 transition-colors group">
                <div className="w-10 h-10 mb-4 rounded-full bg-zinc-800 group-hover:bg-yellow-600 transition-colors"></div>
                <h3 className="text-lg font-bold mb-2">Service Title {item}</h3>
                <p className="text-sm text-gray-400">Comprehensive business credit structuring and compliance analysis.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION (Grid of 6) --- */}
      <section id="why-us" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center uppercase tracking-widest text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-6 border border-zinc-800 bg-zinc-900/50">
                <h3 className="text-yellow-500 font-bold mb-2">Benefit Point {item}</h3>
                <p className="text-xs text-gray-400">We leverage proprietary data points to ensure your funding success.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-12">Trusted by Elite Entrepreneurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded border-t-4 border-yellow-600">
                <div className="flex justify-center mb-4 text-yellow-500">★★★★★</div>
                <p className="italic text-gray-300 text-sm mb-6">"This service completely transformed our ability to secure capital. Highly recommended."</p>
                <p className="font-bold text-white">— Client Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PACKAGES / PRICING SECTION --- */}
      <section id="packages" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">

          {/* Capital Ready Playbook Row */}
          <h2 className="text-center text-xl font-bold mb-8 uppercase text-yellow-500">Capital Ready Playbook</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-zinc-900 p-8 border border-zinc-800 text-center">
              <h3 className="font-bold text-lg">DIY Playbook</h3>
              <button className="mt-4 px-6 py-2 border border-yellow-600 text-yellow-500 text-sm hover:bg-yellow-600 hover:text-black transition">Learn More</button>
            </div>
            <div className="bg-zinc-900 p-8 border border-zinc-800 text-center">
              <h3 className="font-bold text-lg">Full Suite</h3>
              <button className="mt-4 px-6 py-2 bg-yellow-600 text-black text-sm font-bold hover:bg-yellow-500 transition">Get Started</button>
            </div>
          </div>

          {/* Corporate 101 Main Item (Centerpiece from PDF) */}
          <div className="mb-16">
            <div className="bg-zinc-900 p-10 border border-yellow-600 text-center max-w-lg mx-auto shadow-[0_0_40px_rgba(202,138,4,0.1)]">
              <h3 className="text-2xl font-bold text-white mb-2">Corporate 101</h3>
              <div className="text-4xl font-extrabold text-yellow-500 my-4">$1,500</div>
              <ul className="text-left text-gray-400 text-sm space-y-3 mb-8 max-w-xs mx-auto">
                <li>✓ Business Entity Setup</li>
                <li>✓ EIN & DUNS Registration</li>
                <li>✓ Professional Address Setup</li>
                <li>✓ Bank Account Guidance</li>
              </ul>
              <button className="w-full py-3 bg-yellow-600 text-black font-bold uppercase tracking-wider hover:bg-yellow-500">
                Purchase Now
              </button>
            </div>
          </div>

          {/* Upgrade Packages Grid */}
          <h3 className="text-center text-lg font-bold mb-8 text-gray-400">Upgrade All Packages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-900 p-6 border border-zinc-800 text-center">
                <h4 className="font-bold text-sm mb-2">Add-on {i}</h4>
                <p className="text-yellow-500 font-bold">$297</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FUNDING / CREDIT READINESS SECTION --- */}
      <section id="funding" className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Business Funding</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to scale? Our team helps you navigate the complex world of corporate finance to secure the capital you need.
          </p>
          <div className="bg-black p-8 border border-yellow-600/30 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Credit Readiness Assessment</h3>
            <p className="text-sm text-gray-400 mb-6">
              Before applying, ensure your business meets all 20+ compliance points required by top-tier lenders.
            </p>
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest">
              Start Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}