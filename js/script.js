const headerNavMenu = document.querySelector('.header-nav-list');
headerNavMenu.addEventListener('click', e => e.preventDefault());

const logo = document.querySelector('.logo-wrapper');
logo.addEventListener('click', e => e.preventDefault());

const headerText = document.querySelector('.title');
headerText.style.textTransform = 'uppercase';

/*Our services */
const ourServData = [
    {
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, 
        consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        imageUrl: "url('./image/tab-menu/web-design4.jpg')",
        dataset: "web-des",
    },
    {
        desc: `Graphic design is a form of modern art that arises in the creation of graphic objects postcards, 
        logos, business cards, websites) using various types of graphics The main idea of ​​graphic design is 
        to combine aesthetic principles and functional tasks in one execution. In modern graphics, 
        the same principles of lines and strokes are used - vector graphics, color spots - raster graphics,
        and the set of fonts is huge and the possibilities of color solutions are unlimited. 
        Digital technologies are used for implementation. This makes the process easier, and the final product is of higher quality.`,
        imageUrl: "url('./image/tab-menu/graphic-design1.jpg')",
        dataset: "graph-des",
    },
    {
        desc: `We support our customers 24/7. At any time, you can write to us or call the hotline contact number.`,
        imageUrl: "url('./image/tab-menu/online-support.jpg')",
        dataset: "online-sup",
    },
    {
        desc: `The design of the program is not just a set of bright pictures. 
        Each element of the interface reflects the essence of the product and solves a certain task: 
        attracts and keeps the user's attention, arouses interest and positive emotions, 
        provides maximum convenience for the audience and encourages them to take targeted actions.`,
        imageUrl: "url('./image/tab-menu/web-design1.jpg')",
        dataset: "app-des",
    },
    {
        desc: `Marketing is an activity aimed at generating demand and satisfying consumer needs. 
        Broadly speaking, the goal of marketing is to "identify and satisfy human and social needs."`,
        imageUrl: "url('./image/tab-menu/marketing.jpg')",
        dataset: "marketing",
    },
    {
        desc: `Search optimization - a set of internal and external optimization measures to increase the site's position 
        in the results of search engines according to certain user requests, with the aim of increasing network traffic 
        (for information resources) and potential customers (for commercial resources) and further monetization 
        (a receipt of income) of this traffic. SEO can be focused on different types of searches, including information, 
        products, services, images, videos, news, and industry search engines.`,
        imageUrl: "url('./image/tab-menu/graphic-design4.jpg')",
        dataset: "seo-serv",
    },
]

const tabButtonsCont = document.querySelector('.tab-buttons');

const tabContentWrapper = document.querySelector('.tab-content-wrapper');

tabContentWrapper.querySelector('.tab-text').innerText = ourServData[0].desc;

tabButtonsCont.addEventListener('click', e => {
    if(e.target === e.currentTarget) return

    const active = tabButtonsCont.querySelector('.active');
    if (active !== null) {
        if (active !== e.target) {
            active.classList.remove('active')
        }
    }
    e.target.classList.toggle('active');

    if (e.target.classList.contains("active")) {
        tabContentWrapper.querySelector('.tab-text').innerText = ourServData.find(elem => elem.dataset === e.target.dataset.tabBtn).desc;
        tabContentWrapper.querySelector('.tab-image').style.backgroundImage = ourServData.find(elem => elem.dataset === e.target.dataset.tabBtn).imageUrl;
    }
})

// Our amazing work

const dataCards = [
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Landing',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Graphic-Design',
    },
    {
        dataset: 'Web-Design',
    },
    {
        dataset: 'Wordpress',
    },
    {
        dataset: 'Web-Design',
    },
]

let quantity = 12;
const amazCardsArray = dataCards.map((card, index) => `
<div class="amaz-card" data-amaz-card="${card.dataset}">
<img src="./image/Our-amazing-work/image${index + 1}.jpg" alt="${card.dataset}">
<div class="amaz-content">
    <div class="amaz-logo-wrapper">
        <div class="green-line">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
            </svg>
        </div>
        <div class="green-circle">
            <div class="white-square"></div>
        </div>
    </div>
    <p>creative design</p>
    <p class="card-name">${card.dataset}</p>
</div>
</div>`)
document.querySelector(".amaz-cards").insertAdjacentHTML('beforeend', amazCardsArray.slice(0, quantity).join(''))

const amazCards = document.querySelector(".amaz-cards");

function amazCardFilter(array, activeElem) {
    array.forEach(card => {
        if (activeElem.dataset.amazWorkBtn !== card.dataset.amazCard) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }
        if(activeElem.dataset.amazWorkBtn === "All") {
            card.style.display = "";
        }
    })
    }

const amazWorkBtn = document.querySelectorAll('.amaz-work-btn');

const amazWorkButtons = document.querySelector('.amaz-work-buttons')
amazWorkButtons.addEventListener('click', e => {
    if(e.target === e.currentTarget) return

    const active = document.querySelector('.amaz-work-buttons').querySelector('.amaz-active');

    if(active && active !== e.target)  active.classList.remove('amaz-active')
    
    e.target.classList.toggle('amaz-active')

    if(e.target.classList.contains("amaz-active")) {
        amazCardFilter(Array.from(amazCards.children), e.target)
    }
})

const loadMoreButton = document.createElement('div');
loadMoreButton.classList.add('btn-container', 'js-amaz-load-more-btn')
loadMoreButton.insertAdjacentHTML('beforeend', `
<a href="#" class="load-more-btn">
    <div class="btn-decor-wrapper">  
        <div class="btn-decoration1"></div>
        <div class="btn-decoreation2"></div>
    </div>
    <p class="load-more-btn-text">load more</p>
</a>`)

const preloader = document.createElement('div');
preloader.classList.add('loader-box')
preloader.insertAdjacentHTML('beforeend', `
<div class="animation-container">
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
</div>`)

const amazContentWrapper = document.querySelector('.content-wrapper');

amazContentWrapper.append(loadMoreButton)

loadMoreButton.addEventListener("click", e => {
    e.preventDefault()
    if(e.target === e.currentTarget) return

    loadMoreButton.remove()
    amazContentWrapper.append(preloader)
 
    setTimeout(() => {
        document.querySelector(".amaz-cards").insertAdjacentHTML('beforeend', amazCardsArray.slice(quantity, quantity + 12).join(''))
        quantity += 12;

        preloader.remove()
        amazContentWrapper.append(loadMoreButton)

        if (Array.from(amazCards.children).length === dataCards.length) {
            loadMoreButton.style.display = "none"
        }
        
        const activeBtn = amazWorkButtons.querySelector('.amaz-active');
        amazCardFilter(Array.from(amazCards.children), activeBtn)
    }, 3000)
    
})

// Breaking News

const dataBreakNewsCards = [
    {
        src: 'Image1.jpg',
        alt: 'Photographer',
    },
    {
        src: 'Image2.jpg',
        alt: 'Fire',
    },
    {
        src: 'Image3.jpg',
        alt: 'Bicyclist',
    },
    {
        src: 'Image4.jpg',
        alt: 'Web designer',
    },
    {
        src: 'Image5.jpg',
        alt: 'quay',
    },
    {
        src: 'Image6.jpg',
        alt: 'Bicyclist',
    },
    {
        src: 'Image7.jpg',
        alt: 'Waterfall',
    },
    {
        src: 'Image7.jpg',
        alt: 'Calculation',
    },
]


const breakingNewsCards = document.querySelector(".breaking-news-cards");

breakingNewsCards.insertAdjacentHTML('afterbegin', dataBreakNewsCards.map(card => {
    return `
    <div class="breaking-news-card">
        <a href="#">
            <div class="image-wrapper">
                <img src="./image/Breaking-news/${card.src}" alt="${card.alt}">
                <div>
                    <p>12</p>
                    <p>Feb</p>
                </div>
            </div>
            <div class="card-title-wrapper">
                <p>Amazing Blog Post</p>
                <p><span>By admin</span><span>2 comment</span></p>
            </div>
        </a>
    </div>`
}).join(''))

breakingNewsCards.addEventListener('click', e => {
    if (e.target === e.currentTarget) return
    e.preventDefault()
})
breakingNewsCards.addEventListener('mousedown', e => e.preventDefault())


// slider

const dataPersons = [
    {
        name: 'Yaroslav',
        profession: 'Actor',
        id: 1,
        review: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, on dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam
        facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.`,
    },
    {
        name: 'Matthew_Mc_Conaughey',
        profession: 'Actor',
        id: 2,
        review: `Matthew David McConaughey (born November 4, 1969) is an American actor. He had his breakout role with a supporting performance in the
        coming-of-age comedy Dazed and Confused (1993). After a number of supporting roles, his first success as a leading man came in the ...`,
    },
    {
        name: 'Albert_Einstein',
        profession: 'Scientist',
        id: 3,
        review: `Albert Einstein was born at Ulm, in Württemberg, Germany, on March 14, 1879. Six weeks later the family moved to Munich, where he later on
        began his schooling at the Luitpold Gymnasium. Later, they moved to Italy and Albert continued his education at Aarau, Switzerland...`,
    },
    {
        name: 'Bradlie_Pitt',
        profession: 'Actor',
        id: 4,
        review: `William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He is the recipient of various accolades, including two
        Academy Awards, two British Academy Film Awards, two Golden Globe Awards, and a Primetime Emmy Award. As a public figure, Pitt has been... `,
    },
    {
        name: 'Jennifer_Lawrence',
        profession: 'Actress',
        id: 5,
        review: `Jennifer Shrader Lawrence (born August 15, 1990) is an American actress. The world's highest-paid actress in 2015 and 2016, her films have 
        grossed over $6 billion worldwide to date. She appeared in Time's 100 most influential people in the world list in 2013 and the Forbes Celebrity...`,
    },
    {
        name: 'Elon_Musk',
        profession: 'Businessman, Scientist',
        id: 6,
        review: `Elon Reeve Musk FRS (born June 28, 1971) is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; 
        angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of the Boring Company; co-founder of...`,
    },
    {
        name: 'Steve_Jobs',
        profession: 'Businessman',
        id: 7,
        review: `Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, media proprietor, and investor. He 
        was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's...`,
    },
    {
        name: 'Anne_Hathaway',
        profession: 'Actress',
        id: 8,
        review: `Anne Jacqueline Hathaway (born November 12, 1982) is an American actress. The recipient of various accolades, including an Academy Award, a 
        British Academy Film Award, a Golden Globe Award, and a Primetime Emmy Award, she was among the world's highest-paid actresses in 2015...`,
    },
    {
        name: 'Christopher_Nolan',
        profession: 'Film director, screenwriter',
        id: 9,
        review: `Christopher Edward Nolan (born 30 July 1970) is a British-American filmmaker. Known for his Hollywood blockbusters with complex storytelling, 
        Nolan is considered a leading filmmaker of the 21st century. His films have grossed $5 billion worldwide. The recipient of many accolades...`,
    },
]

const slider = document.querySelector('.slider');

const personImages = dataPersons.map(card => {
    return `<div class="slider-card-wrapper" data-id="${card.id}" data-prof="${card.profession}">
                <div class="slider-card">
                     <img src="./image/Review-image/${card.name}.jpg" alt="${card.name.replaceAll('_', ' ')}">
                </div>
            </div>`
    });

slider.querySelector('.slider-cards-container').insertAdjacentHTML('beforeend', personImages.join(''))

const sliderCardsCont = slider.querySelector('.slider-cards-container');
const nextBtn = slider.querySelector('.next');
const prevBtn = slider.querySelector('.previously');
const personReviewSection = document.querySelector('.review-person');

sliderCardsCont.firstElementChild.classList.add('active-image');
sliderCardsCont.firstElementChild.classList.add('start');
sliderCardsCont.querySelector('.slider-card-wrapper:nth-child(4)').classList.add('end')
let slide = 0;

function changePersonReviewSection(element) {

    const id = element.dataset.id
    personReviewSection.querySelector('.person-feedback > p').innerText = dataPersons[+id - 1].review;
    
    const personInfo = personReviewSection.querySelector('.person-info');
    const image = element.querySelector('img');

    personInfo.firstElementChild.innerText = image.alt;
    personInfo.lastElementChild.textContent = element.dataset.prof;
    personReviewSection.querySelector('.person-image').style.backgroundImage = `url("${image.src}")`
}

nextBtn.addEventListener('click', e => {
    const active = sliderCardsCont.querySelector('.active-image');
    const nextActive = active.nextElementSibling;
    
    if (!prevBtn.classList.contains('prev-hov')) {
        prevBtn.classList.add('prev-hov')
        prevBtn.style.cursor = 'pointer';
    }

    if (nextActive === sliderCardsCont.lastElementChild) {
        e.target.classList.remove('next-hov')
        e.target.style.cursor = 'auto';
    }

    if (active === sliderCardsCont.lastElementChild) {
        return
    }

    const endElement = document.querySelector('.end');
    const startElement = document.querySelector('.start')
 
    if(endElement.classList.contains('active-image')) {
        slide++;  
        startElement.nextElementSibling.classList.add('start');
        startElement.classList.remove('start');
        endElement.nextElementSibling.classList.add('end');
        endElement.classList.remove('end')
        sliderCardsCont.style.transform = `translateX(-${101 * slide}px)`;
    }

    nextActive.classList.add('active-image')
    active.classList.remove('active-image')

    changePersonReviewSection(nextActive)
})

prevBtn.addEventListener('click', e => {
    const active = sliderCardsCont.querySelector('.active-image');
    const prevActive = active.previousElementSibling;
    
    if (!nextBtn.classList.contains('next-hov')) {
        nextBtn.classList.add('next-hov')
        nextBtn.style.cursor = 'pointer';
    }

    if (prevActive === sliderCardsCont.firstElementChild) {
        e.target.classList.remove('prev-hov')
        e.target.style.cursor = 'auto';
    }
    
    if (active === sliderCardsCont.firstElementChild) {
        return
    }
   
    const endElement = document.querySelector('.end');
    const startElement = document.querySelector('.start')

    if (startElement.classList.contains('active-image')) {
        slide--;
        startElement.previousElementSibling.classList.add('start');
        startElement.classList.remove('start');
        endElement.previousElementSibling.classList.add('end');
        endElement.classList.remove('end')
        sliderCardsCont.style.transform = `translateX(-${101 * slide}px)`
    }
    
    prevActive.classList.add('active-image')
    active.classList.remove('active-image')
    changePersonReviewSection(prevActive)

})

function changeSliderButtons(firstBtn = null, firstClass = null, secondBtn = null, secondClass = null) {
    if (firstBtn) {
        firstBtn.classList.remove(`${firstClass}`)
        firstBtn.style.cursor = 'auto';
    }
    if (secondBtn) {
        if (!secondBtn.classList.contains(`${secondClass}`)) {
            secondBtn.classList.add(`${secondClass}`)
            secondBtn.style.cursor = 'pointer'; 
        }
    }
}

sliderCardsCont.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;
    
    slider.querySelector('.active-image').classList.remove('active-image')
    
    const activeImage = e.target.closest('.slider-card-wrapper');
    activeImage.classList.add('active-image')
    
    changePersonReviewSection(activeImage)

    if (activeImage === sliderCardsCont.firstElementChild) {
        changeSliderButtons(prevBtn, 'prev-hov', nextBtn, 'next-hov')
    } else {
        changeSliderButtons(null, null, prevBtn, 'prev-hov')
    } 
    if (activeImage === sliderCardsCont.lastElementChild) {
        changeSliderButtons(nextBtn, 'next-hov', prevBtn, 'prev-hov')
    } else {
        changeSliderButtons(null, null, nextBtn, 'next-hov')
    }
})

sliderCardsCont.addEventListener('mousedown', e => e.preventDefault())
