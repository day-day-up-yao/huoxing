import pino, { Logger } from 'pino';
import { logLevelData } from './log-level';

const logLevels = new Map<string, string>(Object.entries(logLevelData));

export function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get('*') || 'info';
}

// learn: https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/
// const transport = pino.transport({
//   targets: [
//     {
//       target: 'pino/file',
//       options: { destination: `${__dirname}/logs` },
//     },
//     {
//       target: 'pino-pretty',
//     },
//   ],
// } as any);
export function getLogger(name: string): Logger {
  return pino({ name, level: getLogLevel(name) });
}
