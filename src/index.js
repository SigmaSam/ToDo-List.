import page from './modules/page';
import { modal, modalGroup } from './modules/modal';
import {
  project, sortPrio, sortTime, filter, cleanGrid,
} from './modules/list';
import {
  addNewChore, addNewGroup, groups,
} from './modules/functions';

const addEvents = () => {
  const addButton = document.getElementById('Add Chore');
  const groupButton = document.getElementById('Add Group');
  const modCont = document.querySelector('#modal');
  const modGroup = document.querySelector('#modalGroup');
  const spanOne = document.querySelector('#cancel');
  const spanTwo = document.querySelector('#cancelG');
  const addNew = document.querySelector('#newChore');
  const addNewG = document.querySelector('#newGroup');
  const sortBtn = document.querySelector('#sort');
  const sortTimeBtn = document.querySelector('#sortTime');
  const grouplessBtn = document.getElementById('Groupless');
  const allChoresBtn = document.getElementById('See All');
  const winOne = (event) => {
    if (event.target === modCont) {
      modCont.style.display = 'none';
    }
  };

  const winTwo = (event) => {
    if (event.target === modGroup) {
      modGroup.style.display = 'none';
    }
  };

  addButton.addEventListener('click', () => {
    modCont.style.display = 'block';
  });

  spanOne.addEventListener('click', () => {
    modCont.style.display = 'none';
  });

  window.addEventListener('click', winOne);

  addNew.addEventListener('click', (e) => {
    e.preventDefault;
    addNewChore();
  });

  groupButton.addEventListener('click', () => {
    modGroup.style.display = 'block';
  });

  spanTwo.addEventListener('click', () => {
    modGroup.style.display = 'none';
  });

  window.addEventListener('click', winTwo);

  addNewG.addEventListener('click', (e) => {
    e.preventDefault;
    addNewGroup();
  });

  sortBtn.addEventListener('click', (e) => {
    e.preventDefault;
    sortPrio();
  });

  sortTimeBtn.addEventListener('click', (e) => {
    e.preventDefault;
    sortTime();
  });


  grouplessBtn.addEventListener('click', (e) => {
    e.preventDefault;
    filter('');
  });


  allChoresBtn.addEventListener('click', (e) => {
    e.preventDefault;
    cleanGrid();
    project();
  });

  for (let i = 0; i < groups.length; i += 1) {
    const groupBtn = document.getElementById(groups[i]);
    groupBtn.addEventListener('click', (e) => {
      e.preventDefault;
      filter(groupBtn.id);
    });
  }
};


const body = () => {
  page();
  project();
  modal();
  modalGroup();
  addEvents();
};

body();