<template>
    <div>
        <UTable :data="transactions" :columns="transactionsColumns" class="flex-1" type="" />
    </div>
</template>
<script setup lang="ts">
const UBadge = resolveComponent("UBadge");

type Transaction = {
    date: string;
    amount: number;
    paymentName: string;
    method: string;
    category: string;
    status?: string;
};

type Payment = {
    date: string;
    amount: number;
    paymentName: string;
    method: string;
    category: string;
    status?: "pending" | "success" | "failed";
};

type TableColumn<T> = {
    accessorKey: keyof T;
    header: string;
    cell?: (props: { row: { getValue: (key: keyof T) => any } }) => any;
};

defineProps({
    transactions: {
        type: Array as PropType<Transaction[]>,
        required: true,
    },
});
const transactionsColumns: TableColumn<Payment>[] = [
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            return new Date(row.getValue("date")).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
        },
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            return row.getValue("amount");
        },
    },
    {
        accessorKey: "paymentName",
        header: "Payment Name",
        cell: ({ row }) => {
            return row.getValue("paymentName");
        },
    },
    {
        accessorKey: "method",
        header: "Method",
        cell: ({ row }) => {
            return row.getValue("method");
        },
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
            return row.getValue("category");
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const color = {
                success: "success" as const,
                failed: "error" as const,
                pending: "neutral" as const,
            }[row.getValue("status") as string];

            return h(
                UBadge,
                { class: "capitalize", variant: "subtle", color },
                () => row.getValue("status"),
            );
        },
    },
];
</script>
