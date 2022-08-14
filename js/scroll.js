const setupScrolling = () => {
    const conainter = [...document.querySelectorAll('.ImageContainer')];
    const nxtBtn = [...document.querySelectorAll('.nxtBtn')];
    const preBtn = [...document.querySelectorAll('.preBtn')];

    conainter.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}