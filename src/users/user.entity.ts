import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 96,

    })
    firstName: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    lastName: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique :true
    })
    email: string;

    @Column({
        type: 'varchar',    
        nullable: false
    })
    password: string;
}