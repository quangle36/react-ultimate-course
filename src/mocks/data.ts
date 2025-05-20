import { InvoiceItem } from "../types";

export const questions = [
	{
		id: 'sign-up-form',
		name: 'Sign-Up Form',
		category: 'HTML',
	},
	{
		id: 'item-cart',
		name: 'Item Cart',
		category: 'HTML',
	},
	{
		id: 'spaghetti-recipe',
		name: 'Spaghetti Recipe',
		category: 'HTML',
	},
	{
		id: 'blog-post',
		name: 'Blog Post',
		category: 'HTML',
	},
	{
		id: 'rainbow-circles',
		name: 'Rainbow Circles',
		category: 'CSS',
	},
	{
		id: 'navbar',
		name: 'Navbar',
		category: 'CSS',
	},
	{
		id: 'pig-emoji',
		name: 'Pig Emoji',
		category: 'CSS',
	},
	{
		id: 'purchase-form',
		name: 'Purchase Form',
		category: 'CSS',
	},
	{
		id: 'algoexpert-products',
		name: 'AlgoExpert Products',
		category: 'CSS',
	},
	{
		id: 'testing-framework',
		name: 'Testing Framework',
		category: 'JavaScript',
	},
	{
		id: 'array-methods',
		name: 'Array Methods',
		category: 'JavaScript',
	},
	{
		id: 'event-target',
		name: 'Event Target',
		category: 'JavaScript',
	},
	{
		id: 'debounce',
		name: 'Debounce',
		category: 'JavaScript',
	},
	{
		id: 'this-binding',
		name: 'This Binding',
		category: 'JavaScript',
	},
	{
		id: 'promisify',
		name: 'Promisify',
		category: 'JavaScript',
	},
	{
		id: 'throttle',
		name: 'Throttle',
		category: 'JavaScript',
	},
	{
		id: 'curry',
		name: 'Curry',
		category: 'JavaScript',
	},
	{
		id: 'infinite-scroll',
		name: 'Infinite Scroll',
		category: 'DOM Manipulation',
	},
	{
		id: 'stopwatch',
		name: 'Stopwatch',
		category: 'DOM Manipulation',
	},
	{
		id: 'tic-tac-toe',
		name: 'Tic Tac Toe',
		category: 'DOM Manipulation',
	},
	{
		id: 'todo-list',
		name: 'Todo List',
		category: 'DOM Manipulation',
	},
	{
		id: 'typeahead',
		name: 'Typeahead',
		category: 'DOM Manipulation',
	},
	{
		id: 'tier-list',
		name: 'Tier List',
		category: 'DOM Manipulation',
	},
	{
		id: 'toasts',
		name: 'Toasts',
		category: 'DOM Manipulation',
	},
	{
		id: 'sudoku',
		name: 'Sudoku',
		category: 'DOM Manipulation',
	},
	{
		id: 'questions-list',
		name: 'Questions List',
		category: 'DOM Manipulation',
	},
];

export const submissions = [
	{
		questionId: 'blog-post',
		status: 'CORRECT',
	},
	{
		questionId: 'throttle',
		status: 'INCORRECT',
	},
	{
		questionId: 'stopwatch',
		status: 'PARTIALLY_CORRECT',
	},
	{
		questionId: 'pig-emoji',
		status: 'CORRECT',
	},
	{
		questionId: 'todo-list',
		status: 'CORRECT',
	},
	{
		questionId: 'testing-framework',
		status: 'CORRECT',
	},
	{
		questionId: 'array-methods',
		status: 'INCORRECT',
	},
	{
		questionId: 'spaghetti-recipe',
		status: 'PARTIALLY_CORRECT',
	},
	{
		questionId: 'algoexpert-products',
		status: 'PARTIALLY_CORRECT',
	},
	{
		questionId: 'curry',
		status: 'CORRECT',
	},
	{
		questionId: 'toasts',
		status: 'INCORRECT',
	},
	{
		questionId: 'tic-tac-toe',
		status: 'CORRECT',
	},
	{
		questionId: 'event-target',
		status: 'CORRECT',
	},
	{
		questionId: 'debounce',
		status: 'PARTIALLY_CORRECT',
	},
	{
		questionId: 'item-cart',
		status: 'CORRECT',
	},
	{
		questionId: 'typeahead',
		status: 'CORRECT',
	},
	{
		questionId: 'tier-list',
		status: 'PARTIALLY_CORRECT',
	},
	{
		questionId: 'sudoku',
		status: 'CORRECT',
	},
	{
		questionId: 'rainbow-circles',
		status: 'INCORRECT',
	},
	{
		questionId: 'infinite-scroll',
		status: 'CORRECT',
	},
	{
		questionId: 'navbar',
		status: 'PARTIALLY_CORRECT',
	},
];

export const invoiceData: InvoiceItem[] = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  }
];