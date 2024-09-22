import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { POST_TYPE } from "./enums/postType.enum";
import { POST_STATUS } from "./enums/status.enum";
import { CreatePostMetaOptionsDto } from "./dtos/create-post-meta-options.dto";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'nvarchar',
        length :512,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'enum',
        enum: POST_TYPE,
        nullable: false,
        default : POST_TYPE.POST
    })
    postType: POST_TYPE


    @Column({
        type: 'varchar',
        length:256,
        unique:true,
        nullable: false
    })
    slug: string;

    @Column({
        type: 'enum',
        enum: POST_STATUS,
        nullable: false,
        default : POST_STATUS.DRAFT
    })
    status: string;

    @Column({
        type: 'text',
        nullable: true
    })
    content: string;

    @Column({
        type: 'text',
        nullable: true
    })
    schema: string;

    @Column({
        type: 'varchar',
        length:1024,
        nullable: true,

    })
    featuredImageUrl: string;

    @Column({
        type: 'timestamp',        // 'datetime' in my sql
        nullable: true
    })
    publishedOn: Date

    tags:string[];
    metaOptons : CreatePostMetaOptionsDto[]
}