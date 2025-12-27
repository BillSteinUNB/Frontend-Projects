export interface Category {
  id: string;
  name: string;
  icon: string; // Emoji or icon name
  color: string;
  type: 'income' | 'expense';
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  description: string;
  merchant: string;
  categoryId: string;
  accountId: string;
  date: string; // ISO String
  notes?: string;
}

export interface Account {
  id: string;
  name: string;
  institution: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  lastFour: string;
  lastSynced: string;
  color: string;
}

export interface Budget {
  id: string;
  categoryId: string;
  limit: number;
  spent: number;
  period: 'monthly';
}

export interface Goal {
  id: string;
  name: string;
  icon: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  color: string;
}

export interface ChartDataPoint {
  date: string;
  income: number;
  expense: number;
}