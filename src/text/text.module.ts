import { Module } from '@nestjs/common';
import { TextController } from './text.controller';
import { TextService } from './text.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TextRepository } from './repository/text.repository';
import { LinksService } from 'src/links/links.service';
import { LinksRepository } from 'src/links/repository/links.repository';
@Module({
  imports: [],
  controllers: [TextController],
  providers: [TextService, TextRepository, PrismaService, LinksService, LinksRepository],
})
export class TextModule {}
