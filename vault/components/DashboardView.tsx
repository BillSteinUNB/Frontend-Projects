import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { CHART_DATA, CATEGORIES, BUDGETS, GOALS, TRANSACTIONS } from '../constants';
import RecentTransactions from './RecentTransactions';
import CountUp from './CountUp';

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

const DashboardView: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalBalance = 47832.54;
  const income = 8450.00;
  const expenses = 5230.00;

  // Donut Chart Data preparation
  const categoryData = BUDGETS.map(b => ({
    name: CATEGORIES[b.categoryId].name,
    value: b.spent,
    color: CATEGORIES[b.categoryId].color
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-7xl mx-auto space-y-6"
    >
      {/* Greeting Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white">Good morning, Alex</h2>
          <p className="text-zinc-400 mt-1">Thursday, December 26, 2024</p>
        </div>
        <select className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-lg p-2.5 focus:ring-violet-500 focus:border-violet-500 outline-none">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Balance - Hero Card */}
        <motion.div 
          className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-3xl p-8 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl group"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 bg-wealth-gradient opacity-5 md:opacity-10 group-hover:opacity-15 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p className="text-zinc-400 font-medium mb-2">Total Balance</p>
              <h3 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
                <CountUp end={totalBalance} prefix="$" decimals={2} />
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <TrendingUp size={12} /> +12.5%
                </span>
                <span className="text-zinc-500 text-xs py-1">vs last month</span>
              </div>
              
              <div className="flex gap-3">
                 {['Main', 'Savings', 'Crypto'].map((acc, i) => (
                   <div key={i} className="px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-sm text-zinc-300">
                     {acc}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Income Card */}
        <motion.div 
          className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md"
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
              <ArrowUpRight size={20} />
            </div>
            <span className="text-emerald-500 text-sm font-medium">+8.2%</span>
          </div>
          <p className="text-zinc-400 text-sm">Total Income</p>
          <p className="text-2xl font-mono font-bold text-white mt-1">{formatCurrency(income)}</p>
          <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-emerald-500" 
            />
          </div>
        </motion.div>

        {/* Expenses Card */}
        <motion.div 
          className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md"
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500">
              <ArrowDownRight size={20} />
            </div>
            <span className="text-emerald-500 text-sm font-medium">-2.4%</span>
          </div>
          <p className="text-zinc-400 text-sm">Total Expenses</p>
          <p className="text-2xl font-mono font-bold text-white mt-1">{formatCurrency(expenses)}</p>
          <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '45%' }}
               transition={{ duration: 1, delay: 0.6 }}
               className="h-full bg-rose-500" 
            />
          </div>
        </motion.div>

        {/* Main Chart Area */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 backdrop-blur-md min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-zinc-100">Cash Flow</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-zinc-400">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <span className="text-zinc-400">Expenses</span>
              </div>
            </div>
          </div>
          
          <div className="h-[250px] w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#71717A', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717A', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181B', borderColor: '#3F3F46', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#FAFAFA' }}
                  />
                  <Area type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" animationDuration={1500} />
                  <Area type="monotone" dataKey="expense" stroke="#F43F5E" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorExpense)" animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Category Donut */}
        <div className="col-span-1 lg:col-span-1 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 backdrop-blur-md flex flex-col">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Spending</h3>
          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[200px]">
             {mounted && (
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#18181B', borderColor: '#3F3F46', borderRadius: '8px' }}
                     itemStyle={{ color: '#FAFAFA' }}
                     formatter={(value: number) => formatCurrency(value)}
                  />
                </PieChart>
               </ResponsiveContainer>
             )}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-xs text-zinc-500">Total</p>
                  <p className="text-lg font-bold text-white">$1,040</p>
                </div>
             </div>
          </div>
          <div className="mt-4 space-y-2">
             {categoryData.slice(0, 3).map((item, i) => (
               <div key={i} className="flex items-center justify-between text-sm">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                   <span className="text-zinc-400">{item.name}</span>
                 </div>
                 <span className="text-zinc-200 font-mono">{formatCurrency(item.value)}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 backdrop-blur-md">
           <RecentTransactions transactions={TRANSACTIONS.slice(0, 5)} />
        </div>

        {/* Goals / Widgets */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-4">
             {GOALS.slice(0, 2).map((goal) => (
               <div key={goal.id} className="p-5 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-2xl">{goal.icon}</span>
                     <span className="text-xs font-mono text-zinc-500">{goal.targetDate}</span>
                  </div>
                  <h4 className="font-medium text-zinc-200">{goal.name}</h4>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400">{Math.round((goal.currentAmount / goal.targetAmount) * 100)}%</span>
                      <span className="text-zinc-300 font-mono">{formatCurrency(goal.currentAmount)}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="h-full rounded-full"
                         style={{ backgroundColor: goal.color }}
                       />
                    </div>
                  </div>
               </div>
             ))}
        </div>

      </div>
    </motion.div>
  );
};

export default DashboardView;