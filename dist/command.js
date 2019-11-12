"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const vaudeville_1 = require("./vaudeville");
const withInfo = (program) => {
    program.command('info', { isDefault: true })
        .description('list hooks for current repository')
        .action(() => {
        require('./commands/info').default(new vaudeville_1.Vaudeville());
    });
};
const withRun = (program) => {
    program.command('run <phase>')
        .option('-i --stdin', 'expects the command to be passed information on stdin')
        .description('run the hooks of the given phase')
        .action((phase, opts) => {
        require('./commands/run').default(new vaudeville_1.Vaudeville(), phase, opts);
    });
};
const withInstall = (program) => {
    program.command('install')
        .description('install git-vaudeville shims locally')
        .action((phase, opts) => {
        require('./commands/install').default(new vaudeville_1.Vaudeville(), phase, opts);
    });
};
withInfo(commander_1.default);
withRun(commander_1.default);
withInstall(commander_1.default);
exports.default = commander_1.default;
