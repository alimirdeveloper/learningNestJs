import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { POST_TYPE } from "../enums/postType.enum";
import { POST_STATUS } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;

    @IsEnum(POST_TYPE)
    @IsNotEmpty()
    postType: POST_TYPE;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all small letters and uses only "-" and without spaces.For example "my-url"'
    })
    slug: string;

    @IsEnum(POST_STATUS)
    @IsNotEmpty()
    status: POST_STATUS;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsJSON()
    schema?: string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl?: string;

    @IsISO8601()
    @IsOptional()
    publishedOn: Date;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // it will check if every item of array is string
    @MinLength(3, { each: true }) //  it will check if every item of array has minimum 3 length
    tags?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptons: CreatePostMetaOptionsDto[];
}