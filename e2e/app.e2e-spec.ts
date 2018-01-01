import { AutomataPlcPage } from './app.po';

describe('automata-plc App', () => {
  let page: AutomataPlcPage;

  beforeEach(() => {
    page = new AutomataPlcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
