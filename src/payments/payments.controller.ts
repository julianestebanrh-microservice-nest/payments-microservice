import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateSessionDto } from './dto';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-session')
  createSession(@Body() createSessionDto: CreateSessionDto) {
    return this.paymentsService.createSession(createSessionDto);
  }

  @Get('success')
  success() {
    return {
      status: 200,
      message: 'Payment success',
    };
  }

  @Get('cancel')
  cancel() {
    return {
      status: 200,
      message: 'Payment cancel',
    };
  }

  @Post('webhook')
  async webhook(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebhook(req, res);
  }
}
