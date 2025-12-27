import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TRANSACTIONS, CATEGORIES } from '../constants';
import { Filter, Download, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const TransactionsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = TRANSACTIONS.filter(t => 
    t.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-display font-bold text-white">Transactions</h2>
        
        <div className="flex gap-3">
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
             <input 
               type="text" 
               placeholder="Filter..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 outline-none w-full md:w-64"
             />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800">
             <Filter size={16} /> <span className="hidden sm:inline">Filter</span>
          </button>
           <button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800">
             <Download size={16} /> <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium w-12">
                   <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500 focus:ring-0" />
                </th>
                <th className="p-4 font-medium">Merchant</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Amount</th>
                <th className="p-4 font-medium w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filteredTransactions.map((tx, i) => {
                const category = CATEGORIES[tx.categoryId];
                return (
                  <motion.tr 
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="group hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="p-4">
                      <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500 focus:ring-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">
                            {category?.icon}
                         </div>
                         <div>
                           <p className="font-medium text-zinc-200">{tx.merchant}</p>
                           <p className="text-xs text-zinc-500 lg:hidden">{category?.name}</p>
                         </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400">
                        {category?.name}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-zinc-400">
                       {format(parseISO(tx.date), 'MMM dd, yyyy')}
                    </td>
                    <td className="p-4 text-right">
                       <span className={`font-mono font-medium ${tx.type === 'income' ? 'text-emerald-400' : 'text-zinc-200'}`}>
                          {tx.type === 'expense' ? '-' : '+'}
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(tx.amount))}
                       </span>
                    </td>
                    <td className="p-4 text-right">
                       <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">•••</button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-zinc-800 flex items-center justify-between text-sm text-zinc-500">
           <span>Showing {filteredTransactions.length} items</span>
           <div className="flex gap-2">
             <button className="p-1 hover:text-white disabled:opacity-50"><ChevronLeft size={18} /></button>
             <button className="p-1 hover:text-white disabled:opacity-50"><ChevronRight size={18} /></button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionsView;