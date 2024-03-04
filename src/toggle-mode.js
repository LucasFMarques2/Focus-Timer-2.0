import * as el from './FocusTimer/elements.js'

function toggleSelected(button) {
  const buttons = [el.buttonTree, el.buttonCloud, el.buttonFire, el.buttonStore];
  buttons.forEach(btn => {
    if (btn !== button && btn.classList.contains('selected')) {
      btn.classList.remove('selected');
    }
  });
}

// Adiciona evento de clique para cada botão
el.buttonTree.addEventListener('click', (event) => {
  el.buttonTree.classList.toggle('selected');
  toggleSelected(el.buttonTree);
});

el.buttonCloud.addEventListener('click', (event) => {
  el.buttonCloud.classList.toggle('selected');
  toggleSelected(el.buttonCloud);
});

el.buttonFire.addEventListener('click', (event) => {
  el.buttonFire.classList.toggle('selected');
  toggleSelected(el.buttonFire);
});

el.buttonStore.addEventListener('click', (event) => {
  el.buttonStore.classList.toggle('selected');
  toggleSelected(el.buttonStore);
});