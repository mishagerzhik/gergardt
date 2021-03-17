let img = document.querySelectorAll('.portfolio__item'),
    imgBox = document.querySelectorAll('.img__box-hidden'),
    leftBtn = document.querySelector('.button__left'),
    rightBtn = document.querySelector('.button__right'),
    imgWrapper = document.querySelector('.img__wrapper'),
    arr = Array.from(imgWrapper.children),
    slideArr = arr.splice(5),
    mainClass = 'img__box img__box_main',
    leftClass = 'img__box img__box_submain img__box_submain_left',
    subLeftClass = 'img__box img__box_subsubmain img__box_subsubmain_left',
    rightClass = 'img__box img__box_submain img__box_submain_right',
    subRightClass = 'img__box img__box_subsubmain img__box_subsubmain_right',
    slideArrMove = [leftClass, mainClass, rightClass, subRightClass, subLeftClass],
    opacityMain = document.querySelector('.opacity_main'),
    modal = document.querySelector('.open-modal');

leftBtn.addEventListener('click', () => {
    slideArr[0].classList = slideArrMove[0];
    slideArr[1].classList = slideArrMove[1];
    slideArr[2].classList = slideArrMove[2];
    slideArr[3].classList = slideArrMove[3];
    slideArr[4].classList = slideArrMove[4];
    slideArrMove.push(slideArrMove.shift())
});
rightBtn.addEventListener('click', () => {
    slideArrMove.unshift(slideArrMove.pop())
    slideArr[0].classList = slideArrMove[4];
    slideArr[1].classList = slideArrMove[0];
    slideArr[2].classList = slideArrMove[1];
    slideArr[3].classList = slideArrMove[2];
    slideArr[4].classList = slideArrMove[3];
    
});

slideArr.forEach(item => {
    item.addEventListener('mouseover', () => {
        opacityMain.classList.add('hide');
    });
    item.addEventListener('mouseout', () => {
        opacityMain.classList.remove('hide');
    });
});

slideArr.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.remove('hide');
        let clone = item.firstElementChild.firstElementChild.cloneNode(true);
        modal.appendChild(clone)
    });
});

modal.addEventListener('click', () => {
    modal.removeChild(modal.firstElementChild);
    modal.classList.add('hide');
}); 










