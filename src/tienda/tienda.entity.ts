/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
 
    @Column()
    direccion: string;
 
    @Column()
    telefono: string;


}

