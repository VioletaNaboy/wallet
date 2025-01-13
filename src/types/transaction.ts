export interface Transaction {
    id: number | string;
    type: "credit" | "payment";
    amount: string;
    descr: string;
    date: string;
    time: string;
    pending: boolean;
    name?: string;
    user?: string;
}
