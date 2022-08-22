const request = require('supertest');
const { expect } = require('chai');
const app = require('../src');

describe('GET /api/whoami', () => {
  const mockLanguage = 'mockLanguage';
  const mockSoftware = 'mockUserAgent';

  const mockHeaders = {
    'accept-language': mockLanguage,
    'user-agent': mockSoftware,
  };

  it('returns headers with status code 200', async () => {
    const response = await request(app)
      .get('/api/whoami')
      .set(mockHeaders)
      .expect(200);

    expect(response.body.ipaddress).to.not.equal(null);
    expect(response.body.language).to.equals(mockLanguage);
    expect(response.body.software).to.equals(mockSoftware);
  });
});
