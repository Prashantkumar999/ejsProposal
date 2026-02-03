import { Module } from '@nestjs/common';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [ProposalModule],
})
export class AppModule {}
