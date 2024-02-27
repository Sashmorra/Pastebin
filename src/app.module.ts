import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TextModule } from './text/text.module';
import { LinksModule } from './links/links.module';



@Module({
  imports: [PrismaModule, TextModule, LinksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
