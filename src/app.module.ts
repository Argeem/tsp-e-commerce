import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    CartModule,
    OrderModule,
    UserModule,
    CategoryModule,
    ReviewModule,
  ],
})
export class AppModule {}
