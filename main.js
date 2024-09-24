const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');

    const tabContentItems = document.querySelector(`#${this.id}-content`);

    tabContentItems.classList.add('show');
}
function removeBorder(){
    tabItem.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItem.forEach(item => item.classList.remove('show'));
}

tabItem.forEach(item => item.addEventListener('click', selectItem));

