import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../../util/component-test';
import { TabComponent } from './tab';

describe('Tab component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><tab></tab></div>', { 'tab': TabComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('.list-tab').classList.contains('list-tab')).to.be.true;
      expect(vm.$el.querySelector('.content').classList.contains('col-md-4')).to.be.true;
      expect(vm.$el.querySelector('.content').textContent).to.equal('ssss');
    });
  });
});
