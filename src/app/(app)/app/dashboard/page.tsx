import ExpensesList from "@/components/expenses-list"
import ExpensesForm from "@/components/expenses-form"
export default function Page() {
    return (
        <>
            <h1 className="text-3xl font-bold text-white text-center">dash</h1>

            <div className="w-full max-w-[600px] mx-auto">
                <ExpensesList />
                <ExpensesForm />
            </div>
        </>
    )
}