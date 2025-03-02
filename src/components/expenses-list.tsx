"use client";
import { prisma } from '@/lib/db'
import { deleteExpense } from '@/actions/actions'
import DeleteButton from './delete-button'
type ExpensesListProps = {
    expenses: {
        id: number;
        description: string;
        amount: number;
        createdAt: Date;
    }[]
}
export default function ExpensesList({ expenses }: ExpensesListProps) {

    return (
        <ul className="flex flex-col bg-white rounded mt-4 shadow-m">
            {expenses.map((expense) => (
                <li key={expense.id} className="flex items-center px-4 py-2 border-b">
                    <p>{expense.description}</p>
                    <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
                    < DeleteButton expenseId={expense} />
                </li>
            ))}

        </ul>
    )

}