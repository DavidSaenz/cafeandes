/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CafeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
 
    @Column()
    descripcion: string;
 
    @Column()
    precio: number;

}

