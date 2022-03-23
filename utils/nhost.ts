import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  backendUrl: 'https://htuzksoiesbppogpfihp.nhost.run',
});

export { nhost };
