export interface Ingreso {
    id?: number;
    tipoIngreso?: string;
    origenIngreso?: string;
    categoria?: string;
    monto?: number;
    fechaIngreso?: Date
}