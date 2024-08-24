import {
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

export class UserDto {
  uid: string;

  name: string;

  email: string;

  @IsArray()
  elective_section: string[];

  photoUrl: string;

  @IsNotEmpty()
  @IsString()
  section: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(8)
  semester: number;
}
