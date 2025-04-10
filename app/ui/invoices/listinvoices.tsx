import { fecthListaInvoices } from "@/app/lib/data";

export default async function ListInvoices() {
    const inv = await fecthListaInvoices();
    return (<>Lista <br/> {JSON.stringify(inv)}</>);
}