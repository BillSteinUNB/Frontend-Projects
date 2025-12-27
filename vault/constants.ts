import { Account, Budget, Category, Goal, Transaction, ChartDataPoint } from './types';
import { subDays, format } from 'date-fns';

export const CATEGORIES: Record<string, Category> = {
  'cat_1': { id: 'cat_1', name: 'Housing', icon: '🏠', color: '#8B5CF6', type: 'expense' },
  'cat_2': { id: 'cat_2', name: 'Food & Dining', icon: '🍔', color: '#F59E0B', type: 'expense' },
  'cat_3': { id: 'cat_3', name: 'Transportation', icon: '🚗', color: '#0EA5E9', type: 'expense' },
  'cat_4': { id: 'cat_4', name: 'Entertainment', icon: '🎮', color: '#F43F5E', type: 'expense' },
  'cat_5': { id: 'cat_5', name: 'Shopping', icon: '📦', color: '#10B981', type: 'expense' },
  'cat_6': { id: 'cat_6', name: 'Income', icon: '💼', color: '#10B981', type: 'income' },
  'cat_7': { id: 'cat_7', name: 'Subscriptions', icon: '📺', color: '#6366F1', type: 'expense' },
  'cat_8': { id: 'cat_8', name: 'Utilities', icon: '⚡', color: '#EAB308', type: 'expense' },
};

export const ACCOUNTS: Account[] = [
  { id: 'acc_1', name: 'Chase Checking', institution: 'Chase', type: 'checking', balance: 8432.54, lastFour: '4521', lastSynced: '2 min ago', color: '#1E40AF' },
  { id: 'acc_2', name: 'Ally Savings', institution: 'Ally', type: 'savings', balance: 24500.00, lastFour: '8832', lastSynced: '1 hr ago', color: '#7C3AED' },
  { id: 'acc_3', name: 'Chase Sapphire', institution: 'Chase', type: 'credit', balance: -1432.00, lastFour: '2847', lastSynced: '5 min ago', color: '#1E3A8A' },
  { id: 'acc_4', name: 'Amex Gold', institution: 'Amex', type: 'credit', balance: -876.32, lastFour: '1122', lastSynced: '30 min ago', color: '#F59E0B' },
  { id: 'acc_5', name: 'Fidelity 401(k)', institution: 'Fidelity', type: 'investment', balance: 21717.65, lastFour: '9901', lastSynced: '1 day ago', color: '#10B981' },
];

export const GOALS: Goal[] = [
  { id: 'goal_1', name: 'Hawaii Vacation', icon: '🏖️', targetAmount: 5000, currentAmount: 3900, targetDate: '2025-07-01', color: '#06B6D4' },
  { id: 'goal_2', name: 'New Car', icon: '🚗', targetAmount: 25000, currentAmount: 8500, targetDate: '2026-01-01', color: '#8B5CF6' },
  { id: 'goal_3', name: 'Emergency Fund', icon: '🛡️', targetAmount: 10000, currentAmount: 8000, targetDate: '2025-12-31', color: '#10B981' },
];

export const BUDGETS: Budget[] = [
  { id: 'bud_1', categoryId: 'cat_2', limit: 500, spent: 420, period: 'monthly' }, // Food
  { id: 'bud_2', categoryId: 'cat_3', limit: 300, spent: 180, period: 'monthly' }, // Transport
  { id: 'bud_3', categoryId: 'cat_4', limit: 250, spent: 290, period: 'monthly' }, // Entertainment (Over)
  { id: 'bud_4', categoryId: 'cat_5', limit: 400, spent: 150, period: 'monthly' }, // Shopping
];

// Generate 50 realistic transactions
const MERCHANTS = ['Whole Foods', 'Starbucks', 'Uber', 'Netflix', 'Amazon', 'Shell', 'Apple', 'Spotify', 'Trader Joe\'s', 'Target'];
export const TRANSACTIONS: Transaction[] = Array.from({ length: 50 }).map((_, i) => {
  const isIncome = i % 10 === 0;
  const merchant = isIncome ? 'Acme Corp' : MERCHANTS[Math.floor(Math.random() * MERCHANTS.length)];
  const amount = isIncome ? 4200 : parseFloat((Math.random() * 150 + 5).toFixed(2));
  const categoryId = isIncome ? 'cat_6' : Object.keys(CATEGORIES).filter(k => k !== 'cat_6')[Math.floor(Math.random() * 7)];
  
  return {
    id: `tx_${i}`,
    amount: isIncome ? amount : -amount,
    type: isIncome ? 'income' : 'expense',
    description: isIncome ? 'Salary' : 'Purchase',
    merchant,
    categoryId,
    accountId: ACCOUNTS[Math.floor(Math.random() * ACCOUNTS.length)].id,
    date: subDays(new Date(), i * 2).toISOString(),
  };
});

// Chart Data (Mock 6 months)
export const CHART_DATA: ChartDataPoint[] = [
  { date: 'Jul', income: 7800, expense: 5200 },
  { date: 'Aug', income: 8100, expense: 4900 },
  { date: 'Sep', income: 7900, expense: 6100 },
  { date: 'Oct', income: 8400, expense: 5300 },
  { date: 'Nov', income: 8200, expense: 5800 },
  { date: 'Dec', income: 8450, expense: 5230 },
];