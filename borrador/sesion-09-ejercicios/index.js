const winston = require('winston');

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

function showError() {
    throw new Error("showError function");

}

const error = showError
try {
    showError(error);
} catch(e) {
    logger.log("error", e.toString());//REPASAR ESTO Y FIJARSE POR INTERNET
}
