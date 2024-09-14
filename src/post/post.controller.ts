import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostController {

    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto);
    }
}

