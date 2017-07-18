const throttle = (method, context) => {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
        method.call(context);
    }, 100);
}

class Carousel {
    constructor(data) {
        this.data = data;
        this.init(data);
    }
    init() {
        this.wrapper = document.getElementById('app');
        this.wrapper.innerHTML = '';
        this.width = this.wrapper.getBoundingClientRect().width;
        this.height = this.width * 9 / 16;
        this.wrapper.style.height = this.height + 'px';
        this.active = '0';
        this.dataToNode();
    }
    bindDots() {
        const slickDots = document.getElementsByClassName('slick-dots')[0];
        slickDots.children[this.active].classList.add('slick-active');
        slickDots.addEventListener('click', (e) => {
            if(e.target.nodeName == 'BUTTON'){
                slickDots.children[this.active].classList.remove('slick-active');
                this.active = e.target.innerText-1;
                e.target.parentNode.classList.add('slick-active');
                this.handleClickButton(this.active);
            }
        });

        window.addEventListener('resize', () => {
            throttle(this.init, this);
        })
    }
    handleClickButton(id) {
        const slickList = document.getElementsByClassName('slick-list')[0];
        slickList.style.transform = `translate3d(${-this.width * 4 / 5 * this.active}px, 0px, 0px)`;
        console.log(this.active)
    }
    dataToNode() {
        let fragment = document.createDocumentFragment();
        let slickList = document.createElement('div');
        let slickTrack = document.createElement('div');
        let slickDots = document.createElement('ul');
        let wrapper = this.wrapper;

        slickTrack.className = 'slick-track slide';
        slickTrack.style.width = `${this.width * 4 / 5}px`;

        slickList.className = 'slick-list';
        slickList.style.width = `${this.width * 4 / 5 * this.data.length}px`;
        slickList.style.height = `${this.height * 4 / 5}px`;
        slickList.style.transform = 'translate3d(0px, 0px, 0px)';

        slickDots.className = 'slick-dots slide';

        this.data.forEach((item) => {
            const slickSlide = document.createElement('div');
            const slickButton = document.createElement('li');
            slickSlide.classList.add('slick-slide');
            slickSlide.style.width = `${this.width * 4 / 5}px`;
            const height = `${this.width * 4 / 5 * 9 / 16}px`;
            slickSlide.innerHTML = `
                <h3 style='${height}; line-height:${height};'>${item.content}</h3>
            `;
            slickButton.innerHTML = `
            <button>${item.name}</button>
            `;

            slickList.appendChild(slickSlide);
            slickDots.appendChild(slickButton);

        });
        slickTrack.appendChild(slickList);
        fragment.appendChild(slickTrack);
        fragment.appendChild(slickDots);
        wrapper.appendChild(fragment);
        this.bindDots();
    }
}

new Carousel([
    {name: '1', content: '1', bgUrl: ''},
    {name: '2', content: '2', bgUrl: ''},
    {name: '3', content: '3', bgUrl: ''},
    {name: '4', content: '4', bgUrl: ''},
    {name: '5', content: '5', bgUrl: ''}
]);