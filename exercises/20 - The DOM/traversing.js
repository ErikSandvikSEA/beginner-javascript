const wes = document.querySelector('.wes');

console.log(wes.children);
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// console.log(wes.childNodes);

const p = document.createElement('p');
p.textContent = 'Iwill be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
