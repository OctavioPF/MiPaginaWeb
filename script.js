// Escuchando clics en las tarjetas
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // Simulación de información dinámica según la tarjeta
    let title, description;
    if (target === 'target-1') {
      title = 'Información de la tarjeta 1';
      description = 'Contenido detallado de la tarjeta 1...';
    } else if (target === 'target-2') {
      title = 'Información de la tarjeta 2';
      description = 'Contenido detallado de la tarjeta 2...';
    }

    // Mostrar el modal con la información correspondiente
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.remove('hidden'); // Usando clases de Tailwind
    modal.classList.add('flex'); // Usando clases de Tailwind

    // Cerrar el modal al hacer clic en el botón "Cerrar"
    document.getElementById('close-modal').addEventListener('click', () => {
      modal.classList.add('hidden'); // Usando clases de Tailwind
      modal.classList.remove('flex'); // Usando clases de Tailwind
    });
  });
});
