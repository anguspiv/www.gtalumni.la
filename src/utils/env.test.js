import { getHost } from './env';

describe('getHost', () => {
  let originalEnv;

  const setup = () => {
    originalEnv = process.env;
  };

  const teardown = () => {
    process.env = originalEnv;
  };

  it('should return the correct host', () => {
    expect.assertions(5);

    setup();

    expect(getHost()).toBe('http://localhost:3000');

    teardown();

    setup();

    process.env.CONTEXT = 'production';
    process.env.URL = 'https://www.example.com';

    expect(getHost()).toBe('https://www.example.com');

    teardown();

    setup();

    process.env.CONTEXT = 'deploy-preview';
    process.env.DEPLOY_PRIME_URL = 'https://deploy-preview-1--www.example.com';

    expect(getHost()).toBe('https://deploy-preview-1--www.example.com');

    teardown();

    setup();

    process.env.CONTEXT = 'branch-deploy';
    process.env.DEPLOY_PRIME_URL = 'https://deploy-preview-1--www.example.com';

    expect(getHost()).toBe('https://deploy-preview-1--www.example.com');

    teardown();

    setup();

    process.env.CONTEXT = 'dev';
    process.env.URL = 'https://www.example.com';

    expect(getHost()).toBe('https://www.example.com');

    teardown();
  });
});
