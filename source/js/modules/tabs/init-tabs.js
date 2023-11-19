import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  window.tabs = tabs;
};

export {initTabs, tabs};
