/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';

@Injectable()
export class CafeService {    
    constructor(
        @InjectRepository(CafeEntity)
        private readonly artworkRepository: Repository<CafeEntity>
    ){}
    
    
    async create(cafe: CafeEntity): Promise<CafeEntity> {
        return await this.artworkRepository.save(cafe);
    }
    
}