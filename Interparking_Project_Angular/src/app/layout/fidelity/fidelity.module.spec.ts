import { FidelityModule } from './fidelity.module';

describe('FidelityModule', () => {
  let fidelityModule: FidelityModule;

  beforeEach(() => {
    fidelityModule = new FidelityModule();
  });

  it('should create an instance', () => {
    expect(fidelityModule).toBeTruthy();
  });
});
