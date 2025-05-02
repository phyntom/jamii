
import React from 'react';
import { Button } from './ui/button';
import { Shield, DollarSign, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-500 text-white">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold">CircleSave</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-brand-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-brand-600 transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium hover:text-brand-600 transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex">Log in</Button>
          <Button>Sign up free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
