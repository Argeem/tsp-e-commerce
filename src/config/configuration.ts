export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3001,
  jwt: process.env.JWT_SECRET,
  pg: {
    host:process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10) || 5443,
    user:process.env.PG_USER,
    pass:process.env.PG_PASSWORD,
    database:process.env.PG_DATABASE,
  }
});
