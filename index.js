// Import Winston and configure the logger
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console()
  ]
});

// Log some messages
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
