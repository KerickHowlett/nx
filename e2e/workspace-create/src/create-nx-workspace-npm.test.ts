import {
  checkFilesDoNotExist,
  checkFilesExist,
  cleanupProject,
  newProject,
  runCLI,
  uniq,
} from '@nrwl/e2e/utils';

describe('create-nx-workspace --preset=npm', () => {
  process.env.SELECTED_PM = 'npm';
  beforeEach(() => newProject({ preset: 'npm', packageManager: 'npm' }));

  afterEach(() => cleanupProject());

  it('should add workspace library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/workspace:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add js library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/js:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add web library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/web:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add angular application and library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const appName = uniq('my-app');
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/angular:app ${appName} --no-interactive`);
      runCLI(`generate @nrwl/angular:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react application and library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const appName = uniq('my-app');
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react:app ${appName} --no-interactive`);
      runCLI(`generate @nrwl/react:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react-native application and library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const appName = uniq('my-app');
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react-native:app ${appName} --no-interactive`);
      runCLI(`generate @nrwl/react-native:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add node application and library', () => {
    checkFilesDoNotExist('tsconfig.base.json');

    const appName = uniq('my-app');
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/node:app ${appName} --no-interactive`);
      runCLI(`generate @nrwl/node:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });
});
