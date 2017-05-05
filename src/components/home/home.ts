import Vue from 'vue';
import Component from 'vue-class-component';
import { TabComponent } from '../comps/tab';

@Component({
    template: require('./home.html'),
    components: {
        tabEl: TabComponent,
    },
})
export class HomeComponent extends Vue {

    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;

    tabdata: Object = {
        x: 'x1',
        y: 'y2',
        z: 'z3',
    };

    mounted() {
        this.$nextTick(() => { 
            console.log(this.mode);
        });
   
    }

    test(obj) {
        this.tabdata = obj;
    }
}
