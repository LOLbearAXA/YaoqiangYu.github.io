const projectData = {
  AlphaWingEX_Remake: {
    index: 'PROJECT_001 // 2026 — PRESENT',
    name: 'AlphaWingEX-Remake',
    description: 'A collaborative 2.5D space shooter project at Humber Polytechnic.',
    contributions: [
      'Collaborating with a team to create a 2.5d space shooter game',
      'Developing and integrating audio systems to support gameplay sound effects and background music.',
      'Implementing user interface elements and menu functionality to improve player interaction.'
    ]
  },
  overwork: {
    index: 'PROJECT_002 // 2026 — PRESENT',
    name: 'OVERWORK',
    description: 'An 2 player coop puzzle solving game develop at Humber Polytechnic.',
    contributions: [
      'Developing enemy AI systems that detect and pursue the player during gameplay.',
      'Implementing reactive AI behaviors based on player interactions and in-game conditions.',
      'Testing and iterating on AI behavior during gameplay.'
    ]
  }
};

const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.project];
    document.getElementById('dialog-index').textContent = project.index;
    document.getElementById('dialog-title').textContent = project.name;
    document.getElementById('dialog-description').textContent = project.description;
    const list = document.createElement('ul');
    project.contributions.forEach(contribution => {
      const item = document.createElement('li');
      item.textContent = contribution;
      list.appendChild(item);
    });
    document.getElementById('dialog-bullets').replaceChildren(list);
    dialog.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.getElementById('year').textContent = new Date().getFullYear();


// Background click ripple: only appears when clicking the blank page background
// outside of the portfolio window and outside of the dialog.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.addEventListener('pointerdown', (event) => {
  if (prefersReducedMotion.matches || event.button !== 0 || !event.isPrimary) return;
  if (dialog.open) return;

  const clickedInsideContent = event.target.closest('.desktop-shell, .project-dialog');
  if (clickedInsideContent) return;

  const ripple = document.createElement('span');
  ripple.className = 'background-ripple';
  ripple.setAttribute('aria-hidden', 'true');
  ripple.style.left = `${event.clientX}px`;
  ripple.style.top = `${event.clientY}px`;
  document.body.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
});
