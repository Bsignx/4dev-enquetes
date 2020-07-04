interface HttpPostClient {
  post(url: string): Promise<void>;
}

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any_url';
    const httpPostClient = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClient);
    await sut.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
