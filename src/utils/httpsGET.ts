import { request } from 'https';

export function httpsGET(url: string, hostname: string, email: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: hostname,
      path: url,
      method: 'GET',
      headers: {
        'User-Agent': email, // TODO: grab from settings.
        'Access-Control-Allow-Origin': '*'
      }
    };

    const req = request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}
