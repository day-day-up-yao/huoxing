import { type NextRequest, NextResponse } from 'next/server';
import { getLogger } from './log-util';

// postman: body->raw->json
// const res = await fetcher({
//   url: "http://localhost:8084/apis/logs",
//   method: "POST",
//   data,
// });

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    // const res = await request.text();

    const logger = getLogger('logs');
    // logger.fatal('fatal');
    // logger.error('error');
    // logger.warn('warn');
    // logger.info('info');
    // logger.debug('debug');
    // logger.trace('trace');
    logger.info(res);

    return NextResponse.json({ code: 0, message: 'success' });
  } catch (error) {
    return NextResponse.json({ code: 1, message: error.message });
  }
}
