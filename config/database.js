module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://admin:CoWorkAdmin@cowork-cluster-shard-00-00.4s7xv.mongodb.net:27017,cowork-cluster-shard-00-01.4s7xv.mongodb.net:27017,cowork-cluster-shard-00-02.4s7xv.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-i6my47-shard-0&authSource=admin&retryWrites=true&w=majority",
        host: env('DATABASE_HOST', 'cowork-cluster-shard-00-00.4s7xv.mongodb.net'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'CoWorkDB'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'CoWorkAdmin'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
