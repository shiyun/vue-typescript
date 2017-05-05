import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../../util/log';

@Component({
    template: require('./tab.html'),
    props: ['tabdatas', 'aa'],
})
export class TabComponent extends Vue {

    protected logger: Logger;

    private items: Object = {
        a: '1aa',
        b: '2bb',
        c: '3cc'
    };

    mounted() {
        this.$nextTick(() => console.info('tab is ready!'));
    }

    a(n: string) {
        if (!this.logger) this.logger = new Logger();
        this.logger.info(n);
    }
}
