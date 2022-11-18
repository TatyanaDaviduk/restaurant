const burger = document.querySelector('.burgerMenu');
const menu = document.querySelector('.header__navigation');
if(burger&&menu){
    burger.addEventListener('click', () =>{
        //burger.classList.toggle('_active');
        menu.classList.toggle('__active');
       //body.classList.toggle('_lock');
    })
}

//header menu
const header = document.querySelector('.header');

window.onscroll = () => {
    if(window.pageYOffset > 50){
        header.classList.add('__active');
    }
    else{
        header.classList.remove('__active');
    }
}


//select
document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown__list-visible');
        this.classList.add('dropdown__button-active');
    });

    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click',function(e){
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownList.classList.remove('dropdown__list-visible');
            dropDownBtn.classList.add('dropdown__button-choose');
            dropDownInput.value = this.dataset.value;
        })
    })
    //клик снаружи закрываем список
    document.addEventListener('click', function(e){
        console.log('document.click');
        if(e.target !== dropDownBtn){
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.remove('dropdown__list-visible');
        }
        
    })
    
    //скрыть по нажанию на кнопки
    document.addEventListener('keydown', function(e){
        if(e.key === 'Tab' || e.key == 'Escape' ){
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.remove('dropdown__list-visible');
        }
    })
})

document.querySelectorAll('.input').forEach(function(input){
    input.addEventListener('click',function(){
        this.classList.toggle('input-active');
    })
})

//Tab

document.querySelectorAll('.tabs').forEach(function(tabs){
    const tabNav = tabs.querySelectorAll('.tabs-nav__item');
    const tabContent = tabs.querySelectorAll('.tab');
    tabNav.forEach(item =>{
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav(){
        tabNav.forEach(item =>{
            item.classList.remove('active');
        });
        this.classList.add('active');
        let tabName = this.getAttribute('data-tab-name');
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tab-active') : item.classList.remove('tab-active')
        })
    }
})