---
title: 'General Software Development'
description: ''
date-created: 2021/03/15 14:19:17
last-modified: '2022/10/23'
isdraft: false
categories: ['general', 'notes']
tags: []
type: 'note'
---

## Documentation

[Software requirements document - template - Bit.ai](https://bit.ai/templates/software-requirements-document-template)

[Software Specification - Perforce](https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document)

## Description

This document is a general catch from concepts and features that I feel should be referenced during the development of an application so as to ensure quality.

## Virtual Machines

### Why:

Due to the diverse nature of operating systems in the digital ecosystem. It is imperative to test the digital product developed on as many configurations as possible thereby ensuring consistent functionality and user experience.

Install common machine configs on a VM(virtual machine). This allows the testing and thereby a degree of quality control across OS's.

Virtual Machines allow a development teams to all run the same configuration, thereby ensuring consistent development.
_The code runs the same where ever the code is executed_
[Virtual Box](https://www.virtualbox.org/)
[Vagrant](https://www.vagrantup.com/)
[Docker]()

## [Linting](https://en.wikipedia.org/wiki/Lint_(software)

Goal:

- read-ability
- consistency
- Syntax

Function/Method/How:
Checks code against a given set of rules.
Options:

- lint code manually via CLI
- text editor plugin -> lints as code is produced

## [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)

_The process of checking small chunks of code to see if they work as expected_

- function
- objects
- methods

### Frameworks for Unit testing

[Jasmine](https://jasmine.github.io/)
[Karma](https://karma-runner.github.io/2.0/index.html)

### [End to End Test]()

_Testing the program by emulating a user behavior_

[Protractor](http://www.protractortest.org/#/)

## Building

[Gulp](https://gulpjs.com/)
[Grunt](https://gruntjs.com/)
[yarn](https://yarnpkg.com/en/)
[webpack](https://webpack.js.org)

## Continuous Integration (CI)

_Build and test code in an automated way_
[Travis CI](https://travis-ci.org/)
[Circle CI](https://circleci.com/)
[Code ship](https://codeship.com/)
[Jenkins](https://jenkins.io/)

## Continuous Delivery (CD)

_Keeping code in a state of readiness to be pushed into delivery_

- Choose when to deploy new features

## Continuous Deployment (CD)

- Deploy features as soon as they are ready
