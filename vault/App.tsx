import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  PieChart, 
  Target, 
  Landmark, 
  Settings, 
  Search, 
  Bell, 
  User, 
  Plus,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import DashboardView from './components/DashboardView';
import TransactionsView from './components/TransactionsView';
import BudgetsView from './components/BudgetsView';
import AccountsView from './components/AccountsView';

// Types
type ViewType = 'dashboard' | 'transactions' | 'budgets' | 'goals' | 'accounts' | 'settings';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />;
      case 'transactions': return <TransactionsView />;
      case 'budgets': return <BudgetsView />;
      case 'accounts': return <AccountsView />;
      default: return (
        <div className="flex items-center justify-center h-[60vh] text-zinc-500 font-display text-xl">
          Work in progress...
        </div>
      );
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewType; icon: any; label: string }) => (
    <button
      onClick={() => {
        setActiveView(view);
        setIsSidebarOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        activeView === view 
          ? 'bg-violet-500/10 text-violet-400 border-l-2 border-violet-500' 
          : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100'
      }`}
    >
      <Icon className={`w-5 h-5 ${activeView === view ? 'text-violet-400' : 'group-hover:text-white'}`} />
      <span className="font-medium text-sm tracking-wide">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-violet-500/30">
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-[#09090B]/95 border-r border-zinc-800/50 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold font-display shadow-lg shadow-violet-500/20">
              V
            </div>
            <span className="text-xl font-bold font-display tracking-tight">VAULT</span>
            <button onClick={toggleSidebar} className="ml-auto lg:hidden text-zinc-400">
                <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
            <NavItem view="transactions" icon={CreditCard} label="Transactions" />
            <NavItem view="budgets" icon={PieChart} label="Budgets" />
            <NavItem view="goals" icon={Target} label="Goals" />
            <NavItem view="accounts" icon={Landmark} label="Accounts" />
          </nav>

          <div className="pt-6 border-t border-zinc-800/50 space-y-2">
            <NavItem view="settings" icon={Settings} label="Settings" />
            
            <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <img src="https://picsum.photos/100/100" alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-zinc-800" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Alex Morgan</p>
                <p className="text-xs text-zinc-500 truncate">Pro Member</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen flex flex-col relative">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-30 px-6 py-4 bg-[#09090B]/80 backdrop-blur-xl border-b border-zinc-800/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="lg:hidden p-2 text-zinc-400 hover:bg-zinc-800 rounded-lg">
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-display font-semibold capitalize hidden sm:block">
              {activeView}
            </h1>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end max-w-2xl">
            <div className="hidden md:flex relative group flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 group-focus-within:text-violet-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search transactions... (⌘K)" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
            </div>
            
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border border-[#09090B]"></span>
            </button>
            
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-violet-500/20 active:scale-95">
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </header>

        {/* Dynamic View Content */}
        <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
            {renderView()}
        </div>

      </main>
      
      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#09090B]/90 backdrop-blur-xl border-t border-zinc-800 p-2 lg:hidden z-40 flex justify-around items-center">
        <button onClick={() => setActiveView('dashboard')} className={`p-2 rounded-lg flex flex-col items-center gap-1 ${activeView === 'dashboard' ? 'text-violet-400' : 'text-zinc-500'}`}>
          <LayoutDashboard size={20} />
          <span className="text-[10px]">Home</span>
        </button>
        <button onClick={() => setActiveView('transactions')} className={`p-2 rounded-lg flex flex-col items-center gap-1 ${activeView === 'transactions' ? 'text-violet-400' : 'text-zinc-500'}`}>
          <CreditCard size={20} />
          <span className="text-[10px]">Trans</span>
        </button>
         <button className="p-3 bg-violet-600 rounded-full text-white shadow-lg shadow-violet-500/30 -mt-6">
          <Plus size={24} />
        </button>
        <button onClick={() => setActiveView('budgets')} className={`p-2 rounded-lg flex flex-col items-center gap-1 ${activeView === 'budgets' ? 'text-violet-400' : 'text-zinc-500'}`}>
          <PieChart size={20} />
          <span className="text-[10px]">Budget</span>
        </button>
        <button onClick={() => setActiveView('accounts')} className={`p-2 rounded-lg flex flex-col items-center gap-1 ${activeView === 'accounts' ? 'text-violet-400' : 'text-zinc-500'}`}>
          <Landmark size={20} />
          <span className="text-[10px]">Accts</span>
        </button>
      </nav>

    </div>
  );
};

export default App;