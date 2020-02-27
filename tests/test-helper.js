import Application from '../app';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import 'qunit-dom';

setApplication(Application.create({ autoboot: false }));

start();
