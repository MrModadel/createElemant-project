let doc = document;
let body = doc.querySelector('.box');
const map = {
   1: '109',
   2: '3,9',
   3: '120'
}

for (let i of [1, 2, 3, 4, 5, 6, 7]) {
   //create
   let mainItem = doc.createElement('div');
   let up = doc.createElement('div');
   let down = doc.createElement('div');
   let img = doc.createElement('img');
   let title = doc.createElement('h1');
   let suptitle = doc.createElement('p');
   let menu = doc.createElement('div');
   for (let i of [1, 2, 3]) {
      //create
      let menuItem = doc.createElement('div');

      let itemImg = doc.createElement('img');
      let menuTitle = doc.createElement('div');

      //styleClass
      menuItem.classList.add('menu__item');
      itemImg.src = './img/Group 7.png';
      menuTitle.classList.add('menu__title');
      menuTitle.innerText = map[i]
      //app
      menu.append(menuItem);
      menuItem.append(itemImg, menuTitle)
   }
   //styleClass
   mainItem.classList.add('item');

   up.classList.add('up');
   img.src = './img/81fPKd-2AYL 1.png';

   down.classList.add('down');
   title.classList.add('title');
   title.innerText = 'MEN’S CLOTHING (120)';
   suptitle.classList.add('suptitle');
   suptitle.innerText = ' Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';
   menu.classList.add('menu');

   let btn = doc.createElement('button');
   btn.classList.add('down__btn')
   btn.innerText = 'В избранное';

   //app
   mainItem.append(up, down);
   up.append(img);
   down.append(title, suptitle, menu, btn);
   body.append(mainItem)
}
let btns = doc.querySelectorAll('.down__btn');
btns.forEach(btn=>{
   btn.onclick=()=>{
      if (btn.classList.contains('active')){
         btn.classList.remove('active');
         btn.innerText = 'В избранное'
      }else{
         btn.classList.add('active');
         btn.innerText = 'Добавлено'
      }
   }
})