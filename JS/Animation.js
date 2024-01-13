function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        // change.target.classList.remove('element-show');
        
      }
    });
  }
  
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.ContentContainer');
  let newElements = document.querySelectorAll('.ContentMyWorks');
  let newElements2 = document.querySelectorAll('.WorksHeader');
  let newElements3 = document.querySelectorAll('.ContentName');
  let newElements4 = document.querySelectorAll('.ContentAboutContainer');
  let newElements5 = document.querySelectorAll('.Foother');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  elements = [...elements, ...newElements, ...newElements2, ...newElements3, ...newElements4, ...newElements5];

// Теперь наблюдаем за всеми элементами
elements.forEach(elm => observer.observe(elm));





document.querySelector('.NameWork').addEventListener('mouseover', function() {
  // Дополнительные действия при наведении на .NameWork
  // Например, можно добавить/удалить класс для .MyWork img
  document.querySelector('.MyWork img').classList.add('hovered');
});

document.querySelector('.NameWork').addEventListener('mouseout', function() {
  // Дополнительные действия при уходе с .NameWork
  // Например, можно удалить/добавить класс для .MyWork img
  document.querySelector('.MyWork img').classList.remove('hovered');
});





