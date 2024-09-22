import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag{

    @PrimaryGeneratedColumn()
    id : number;
   
    @Column({
        type:'varchar',
        length:128,
        nullable:false
    })
    title:string;
}