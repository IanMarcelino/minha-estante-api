import { PartialType } from '@nestjs/mapped-types';
import { CreateGenerosDto } from './create-genero.dto';

export class UpdateGeneroDto extends PartialType(CreateGenerosDto) {}