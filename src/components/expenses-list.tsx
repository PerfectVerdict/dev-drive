"use client";
import { prisma } from '@/lib/db'
import { deleteExpense } from '@/actions/actions'
type ExpensesListProps = {
    expenses: {
        id: number;
        description: string;
        amount: number;
        createdAt: Date;
    }[]
}
export default function ExpensesList({ expenses }: expensesListProps) {

    return (
        <ul className="h-[700px] bg-white rounded mt-4 shadow-m">
            {expenses.map((expense) => (
                <li key={expense.id} className="flex items-center px-4 py-2 border-b">
                    <p>{expense.description}</p>
                    <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
                    <button className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={async () => {
                            await deleteExpense(expense.id)
                        }}
                    >X</button>
                </li>
            ))}

        </ul>
    )

}