import React from 'react';
import { motion } from 'framer-motion';
import { BUDGETS, CATEGORIES } from '../constants';
import { Plus } from 'lucide-react';

const BudgetsView: React.FC = () => {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-display font-bold text-white">Monthly Budgets</h2>
         <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors shadow-lg shadow-violet-500/20">
           <Plus size={18} /> Create Budget
        </button>
      </div>

      <div className="space-y-6">
        {BUDGETS.map((budget, index) => {
          const category = CATEGORIES[budget.categoryId];
          const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;
          
          return (
            <motion.div
              key={budget.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-zinc-800">
                     {category.icon}
                   </div>
                   <div>
                     <h3 className="font-medium text-zinc-100">{category.name}</h3>
                     <p className="text-xs text-zinc-500">Reset in 5 days</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-zinc-400">
                    <span className={`font-mono font-bold text-lg ${isOver ? 'text-rose-500' : 'text-zinc-100'}`}>
                      {formatCurrency(budget.spent)}
                    </span>
                    <span className="font-mono mx-1">/</span>
                    {formatCurrency(budget.limit)}
                  </p>
                </div>
              </div>

              <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${isOver ? 'bg-rose-500' : 'bg-emerald-500'}`}
                />
              </div>
              
              <div className="flex justify-between mt-3 text-xs text-zinc-500">
                 <span>{Math.round(percentage)}% used</span>
                 {isOver 
                   ? <span className="text-rose-500 font-medium">Over by {formatCurrency(budget.spent - budget.limit)}</span>
                   : <span>{formatCurrency(budget.limit - budget.spent)} remaining</span>
                 }
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default BudgetsView;