import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-2">ABA Simples</h4>
          <p className="text-sm text-slate-500 max-w-xs">
            Tecnologia para análise do comportamento aplicada com rigor científico e acessibilidade.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Login</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>

        {/* Security Badges */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <div className="flex items-center text-xs text-emerald-500 font-medium">
              <ShieldCheck className="w-3 h-3 mr-1" />
              LGPD Compliant
            </div>
            <div className="flex items-center text-xs text-slate-400 font-medium">
              <Lock className="w-3 h-3 mr-1" />
              SSL Secure
            </div>
          </div>
          <span className="text-xs text-slate-600">© 2024 ABA Simples Healthtech.</span>
        </div>
      </div>
    </footer>
  );
};