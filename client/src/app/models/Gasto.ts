export interface Gasto{
    id?: number;
    descripcion?: string;
    categoria?: string,
    monto?: number,
    fechaTransaccion?: Date;
    metodoPago?: string
}