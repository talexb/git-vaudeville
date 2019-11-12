import vaudeville, {CommanderStatic} from 'commander';
import { Vaudeville } from './vaudeville';

const withInfo = (program :CommanderStatic ) => {
    program.command('info',{ isDefault: true })
        .description('list hooks for current repository')
        .action( () => {
            require('./commands/info').default(new Vaudeville());
        })
};

const withRun = (program :CommanderStatic ) => {
    program.command('run <phase>')
        .option( '-i --stdin', 'expects the command to be passed information on stdin')
        .description('run the hooks of the given phase')
        .action( (phase,opts) => {
            require('./commands/run').default(new Vaudeville(),phase,opts);
        })
};

const withInstall = (program :CommanderStatic ) => {
    program.command('install')
        .description('install git-vaudeville shims locally')
        .action( (phase,opts) => {
            require('./commands/install').default(new Vaudeville(),phase,opts);
        })
};

withInfo(vaudeville);

withRun(vaudeville);

withInstall(vaudeville);

export default vaudeville;

