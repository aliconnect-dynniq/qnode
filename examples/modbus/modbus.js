console.log('MODBUS TEST');
require('@aliconnect/api');

const Modbus = require('jsmodbus');
const snmp = require('snmp-native');
const checkDiskSpace = require('check-disk-space')
const osutils = require('os-utils');
const cmd = require('node-cmd');

// const EventEmitter = require('events');
// const util = require('util');
// const net = require('net')
