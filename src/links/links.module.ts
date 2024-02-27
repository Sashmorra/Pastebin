import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LinksRepository } from './repository/links.repository';

@Module({
  providers: [LinksService, PrismaService, LinksRepository],
  exports: [LinksService]
})
export class LinksModule {}
