/* eslint-disable prettier/prettier */

import { CafeEntity } from "../cafe/cafe.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => CafeEntity, cafe => cafe.tienda)
    cafes: CafeEntity[];
}

