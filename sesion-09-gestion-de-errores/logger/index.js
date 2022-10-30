const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',//Podemos definir los niveles de error
  format: winston.format.json(), //.json es el formato mas utilizado, pero tenemos muchos formatos personalizados.
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.console(), //Podemos tener una gran variedad de logs
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;