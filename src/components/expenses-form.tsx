export default function ExpensesForm() {
    return (
        <form action="" className="w-full mt-8 rounded overflow-hidden">
            <input type="text" name="description" placeholder="Description" className="w-full px-3 py-2 outline-none" />
            <input type="number" name="amount" placeholder="Amount" className="w-full px-3 py-2 outline-none" />
            <button className="w-full bg-blue-500 text-white hx-2 hy-2 ">Add Expense</button>

        </form>
    )
}
