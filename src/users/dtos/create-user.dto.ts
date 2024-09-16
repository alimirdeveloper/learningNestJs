import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    @ApiProperty({
        description: 'First name of the user',
        example: "Ali "
    })
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    @ApiPropertyOptional({
        description: 'Last name of the user , not mendatary',
        example: "Mirzaie"
    })
    lastName?: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: 'Email of the user',
        example: "example@example.com"
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        {
            message: 'Wrong password, minimum eight characters, at least one letter, one number and one special character'
        }
    )
    @ApiProperty({
        description: 'Password for login , minimum eight characters, at least one letter, one number and one special character',
        example: 'P@ssword123'
    })
    password: string;
}