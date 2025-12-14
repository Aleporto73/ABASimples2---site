import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-royal text-white p-1 rounded-md mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-xl text-deepSlate tracking-tight">ABA Simples</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-500 hover:text-royal transition-colors font-medium">Protocolos</a>
            <a href="#" className="text-slate-500 hover:text-royal transition-colors font-medium">Recursos</a>
            <a href="#" className="text-slate-500 hover:text-royal transition-colors font-medium">Preços</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-slate-600 font-medium hover:text-royal">Login</button>
            <button className="bg-royal hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm shadow-blue-200">
              Começar
            </button>
            <button className="md:hidden text-slate-500">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};