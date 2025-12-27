import React from 'react';
import { Transaction } from '../types';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const RecentTransactions: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-100">Recent Activity</h3>
        <button className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
          View All <ArrowRight size={14} />
        </button>
      </div>
      
      <div className="space-y-4 flex-1">
        {transactions.map((tx) => {
          const category = CATEGORIES[tx.categoryId];
          return (
            <div key={tx.id} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-zinc-800/30 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm"
                  style={{ backgroundColor: `${category?.color}20` }}
                >
                  {category?.icon || '📄'}
                </div>
                <div>
                  <p className="font-medium text-zinc-200 group-hover:text-white transition-colors">{tx.merchant}</p>
                  <p className="text-xs text-zinc-500">{category?.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-mono font-medium ${tx.type === 'income' ? 'text-emerald-400' : 'text-zinc-200'}`}>
                  {tx.type === 'income' ? '+' : ''}{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tx.amount)}
                </p>
                <p className="text-xs text-zinc-500">Today</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentTransactions;