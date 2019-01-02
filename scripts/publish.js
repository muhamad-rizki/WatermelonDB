#!/usr/bin/env node

// inspired by `np` – https://github.com/sindresorhus/np

const Listr = require('listr')
const listrInput = require('listr-input')
const execa = require('execa')
const timeout = require('p-timeout')
const inquirer = require('inquirer')
const semver = require('semver')
const fs = require('fs-extra')

const { when, includes, flip, both, add, contains } = require('rambdax')

const pkg = require('../package.json')

const flippedIncludes = flip(includes)
const increments = ['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease']
// const prerelease = ['prepatch', 'preminor', 'premajor', 'prerelease']

const belongsToIncrements = flippedIncludes(increments)
const isValidVersion = input => Boolean(semver.valid(input))
const isVersionGreater = input => semver.gt(input, pkg.version)
const getNewVersion = input => semver.inc(pkg.version, input)
const isValidAndGreaterVersion = both(isValidVersion, isVersionGreater)

const throwError = () => str => {
  throw new Error(str)
}

const buildTasks = () => {
  return [
          {
            title: 'check current branch',
            task: () =>
              execa
                .stdout('git', ['symbolic-ref', '--short', 'HEAD'])
                .then(when(branch => branch !== 'master', throwError('not on `master` branch'))),
          },
          {
            title: 'check local working tree',
            task: () =>
              execa
                .stdout('git', ['status', '--porcelain'])
                .then(when(status => status !== '', throwError('commit or stash changes first'))),
          },
          {
            title: 'check remote history',
            task: () =>
              execa
                .stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD'])
                .then(when(result => result !== '0', throwError('please pull changes first'))),
          },
    {
      title: 'check tests',
      task: () => execa('yarn', ['test']),
    },
    {
      title: 'check flow',
      task: () => execa('yarn', ['flow']),
    },
    {
      title: 'check eslint',
      task: () => execa('yarn', ['eslint']),
    },
    // TODO: Bring those back when metro config is fixed
    // {
    //   title: 'check iOS tests',
    //   task: () => execa('yarn', ['test:ios']),
    // },
    // {
    //   title: 'check Android tests',
    //   task: () => execa('yarn', ['test:android']),
    // },
    {
      title: 'build package',
      task: () => execa('yarn', ['build']),
    },
    {
      title: 'pack tgz',
      task: () =>
        execa('yarn', ['pack'], { cwd: './dist' })
          .then(() => fs.remove(`./dm-watermelondb-v${pkg.version}.tgz`))
          .then(() => {
            fs.move(
              `./dist/dm-watermelondb-v${pkg.version}.tgz`,
              `./dm-watermelondb-v${pkg.version}.tgz`,
            )
          }),
    },
  ]
}

const tasks = buildTasks()
const listr = new Listr(tasks)
listr.run()
