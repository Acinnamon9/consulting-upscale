export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-white tracking-tighter">
            UPSCALE <span className="text-yellow-500">CONSULTING</span>
          </h4>
          <p className="text-xs text-gray-500 mt-2">© 2025 Upscale Consulting. All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}