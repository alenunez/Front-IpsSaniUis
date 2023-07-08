import { Time } from "@angular/common";

export interface CitaMedica {

    "idCitaMedica": number;
    "fechaCita": Date;
    "horaCita": Time;
    "idUsuario": number;
    "primerNombreUsuario": string;
    "primerNombreMedico": string;
    "primerApellidoMedico": string;
    "primerApellidoUsuario": string;
    "idMedico": number;
}