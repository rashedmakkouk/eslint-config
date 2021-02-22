# Changelog

> Go back to [Versions](../index.md#040-in-development)

## 0.4.0 (2021-02-22)

### Changed

- upgrade: Bump package version from `0.3.0` to `0.4.0`
- deprecated: Remove `docs` directory in favor of `README` file
- refactor: Migrate `versions` to `CHANGELOG`
- chore: Clean up `code-workspace.base.json` config file
- chore: Removed deprecated vendor plugin API
- upgrade: Package dependencies --latest

## 0.4.0 (2021-01-30)

### Changed

- chore: Migrate build script to standalone 'scripts'
- upgrade: Yarn to v2
- chore: Update package config files

## 0.3.0 (2020-12-20)

### Changed

- update: Bump package version to `0.3.0`
- chore: Update `code-workspace.base.json` config file
- upgrade: Package `devDependencies` --latest

## 0.2.0 (2020-10-06)

### Added

- feature: Add `issue-template.base` base file

### Changed

- upgrade: Package dependencies --latest

## 0.2.0 (2020-10-04)

### Added

- chore: Add `@property` modifier to `tsdoc`
- chore: Add `repository` property to `package.json`

### Changed

- refactor: Update package configuration files
- refactor: Update local build scripts

### Removed

- chore: Remove default `rootDir` & `baseUrl` values from `tsconfig.base.json`

## 0.1.0 (2020-09-30)

### Changed

- update: Separate between `compile` & `build` workflows
- update: Package will live inside 'build/dist' directory

## 0.1.0 (2020-09-29)

### Changed

- upgrade: Package dependencies --latest
- update: ESLint `@typescript/eslint` override rules
- update: TypeScript `tsconfig.base.json` lib list

## 0.1.0 (2020-09-28)

### Changed

- update: Extend `@typescript-eslint/recommended-requiring-type-checking`
- update: Base config rules

## 0.1.0 (2020-09-24)

### Added

- chore: Create VS Code `core-workspace` default config file

### Changed

- update: `tsconfig.base.json` configuration
- chore: Update local `tsconfig.json` configuration
- chore: Rename `config` to `bases`
- refactor: Build folder structure & script
- chore: Code cleanup

## 0.1.0 (2020-09-20)

### Changed

- refactor: Suffix all base config files with '*.base.*'
- chore: Move base config files to 'src/config'
- chore: Update 'build' scripts
- chore: Extend package configuration from base config files
- refactor: 'docs/versions' folder structure

## 0.1.0 (2020-09-18)

### Added

- chore: Add `.gitmessage.txt` commit template

### Changed

- Rename package back to `eslint-config` as supported by ESLint
- chore: Rename package to `dev-config` for universal tooling
- chore: Update `package.json` scripts
- update: Package docs folder structure
