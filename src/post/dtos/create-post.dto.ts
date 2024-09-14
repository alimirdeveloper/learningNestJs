import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { POST_TYPE } from "../enums/postType.enum";
import { POST_STATUS } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @ApiProperty({
        description: "This is the title for the blog post",
        example: "What's new in your code?"
    })
    title: string;

    @IsEnum(POST_TYPE)
    @IsNotEmpty()
    @ApiProperty({
        enum: POST_TYPE,
        description: "Possible values :[post,page,story,series]"
    })
    postType: POST_TYPE;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "for example - 'my-url'",
        example: "new-with-nestjs"
    })
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all small letters and uses only "-" and without spaces.For example "my-url"'
    })
    slug: string;

    @IsEnum(POST_STATUS)
    @IsNotEmpty()
    @ApiProperty({
        enum: POST_STATUS,
        description: "should be select from POST_STATUS enum"
    })
    status: POST_STATUS;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({
        description: "this is the content of the post",
        example: "post content"
    })
    content?: string;

    @IsOptional()
    @IsJSON()
    @ApiPropertyOptional({
        description: "Serialize your JSON object else a validation error raises",
        example: "{\r\n \"@content\": \"https:\/\/schema.org\", \r\n \"@type\":\"Person\" \r\n }"
    })
    schema?: string;

    @IsOptional()
    @IsUrl()
    @ApiPropertyOptional({
        description: "featured image for your blog post",
        example: "http://localhost.com/images/image1.jpg"
    })
    featuredImageUrl?: string;

    @IsISO8601()
    @IsOptional()
    @ApiProperty({
        description: "an ISO 8601 Date",
        example: "2024-03-16T07:46:32+0000"
    })
    publishedOn: Date;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // it will check if every item of array is string
    @MinLength(3, { each: true }) //  it will check if every item of array has minimum 3 length
    @ApiPropertyOptional({
        description: 'Array of tags',
        example: ['nestjs', 'typescript']
    })
    tags?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    @ApiPropertyOptional({
        type: 'array',
        required: false,
        items: {
            type: 'object',
            properties: {
                key: {
                    type: 'string',
                    description: "The key can be string identifire ",
                    example: "sidebarEnabled"
                },

                value: {
                    type: 'any',
                    description: "The any value ",
                    example: "20"
                }

            }
        }

    })
    metaOptons?: CreatePostMetaOptionsDto[];
}