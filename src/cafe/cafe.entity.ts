/* eslint-disable prettier/prettier */

import { TiendaEntity } from "../tienda/tienda.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => TiendaEntity, tienda => tienda.cafes)
    tienda: TiendaEntity;
}

