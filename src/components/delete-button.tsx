"use client"
import React from 'react'
import { deleteExpense } from '@/actions/actions';
import { prisma } from '@/lib/db'
export default function DeleteButton({ expenseId }) {
    return (
        <button className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600"
            onClick={async () => {
                await deleteExpense(expenseId.id)
            }}
        >X</button>
    )
}
