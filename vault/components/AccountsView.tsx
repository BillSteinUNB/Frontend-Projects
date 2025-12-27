import React from 'react';
import { motion } from 'framer-motion';
import { ACCOUNTS } from '../constants';
import { RefreshCw, Plus } from 'lucide-react';

const AccountsView: React.FC = () => {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-display font-bold text-white">Accounts</h2>
          <p className="text-zinc-400 mt-1">Net Worth: <span className="text-emerald-400 font-mono font-bold">$52,341.87</span></p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors border border-zinc-700">
           <Plus size={18} /> Link Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACCOUNTS.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-all shadow-lg"
          >
             <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: account.color }}></div>
             
             <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-lg text-white">
                 {account.institution.substring(0, 2).toUpperCase()}
               </div>
               <button className="p-2 text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                 <RefreshCw size={16} />
               </button>
             </div>

             <div>
               <h3 className="text-zinc-400 font-medium text-sm mb-1">{account.name}</h3>
               <p className={`text-2xl font-mono font-bold ${account.balance < 0 ? 'text-zinc-100' : 'text-white'}`}>
                 {formatCurrency(account.balance)}
               </p>
               <div className="flex justify-between items-center mt-6 text-xs text-zinc-500">
                  <span>**** {account.lastFour}</span>
                  <span>Synced {account.lastSynced}</span>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AccountsView;