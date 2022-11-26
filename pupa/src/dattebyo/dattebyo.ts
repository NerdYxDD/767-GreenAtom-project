import { SequelizeModule } from '@nestjs/sequelize';

const dattebayo = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leto',
  password: 'password',
  database: 'pupa_za_lupu',
  autoLoadModels: true,
  synchronize: true,
});

export default dattebayo;
