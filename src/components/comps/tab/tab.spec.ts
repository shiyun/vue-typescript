import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../../util/component-test';
import { TabComponent } from './tab';

let loggerSpy = spy();

@Component({
  template: require('./tab.html')
})
class MockTabComponent extends TabComponent {
  constructor() {
    super();
  }
}

describe('About component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><tab></tab></div>', { 'tab': MockTabComponent });
  });

  it('should render correct contents', async () => {
    debugger;
    directiveTest.createComponent();

    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('.repo-link').getAttribute('href')).to.equal('https://github.com/ducksoupdev/vue-webpack-typescript');
      assert.calledWith(loggerSpy, 'about is ready!');
    });
  });
});
