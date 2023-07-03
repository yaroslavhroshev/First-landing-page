
    const grid = document.querySelector('.grid');
    const msnry = new Masonry( grid, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 370,
        gutter: 7,
      });

      const bestImagesFirstGroup = [
        {
            src: 'download_image1.jpg',
            alt: 'A man on a ladder',
        },
        {
            src: 'download_image2.jpg',
            alt: 'The world in white tones',
        },
        {
            src: 'download_image3.jpg',
            alt: 'Two in a boat',
        },
        {
            src: 'download_image4.jpg',
            alt: 'A ladder',
        },
        {
            src: 'download_image5.jpg',
            alt: 'A man with an inflatable ball',
        },
        {
            src: 'download_image6.jpg',
            alt: 'A man on the tree',
        },
        {
            src: 'download_image7.jpg',
            alt: 'Arch',
        },
        {
            src: 'download_image8.jpg',
            alt: 'Movement',
        },
        {
            src: 'download_image9.jpg',
            alt: 'I\'m real',
        },
        {
            src: 'download_image10.jpg',
            alt: 'The bridge',
        },
        {
            src: 'download_image11.jpg',
            alt: 'Fire in man',
        },
        {
            src: 'download_image12.jpg',
            alt: 'A water mill in the ocean',
        },
        {
            src: 'download_image13.jpg',
            alt: 'A ladder between realities',
        },
        {
            src: 'download_image14.jpg',
            alt: 'Flowers in the house',
        },
        {
            src: 'download_image15.jpg',
            alt: 'Ferry for dreams',
        },
        {
            src: 'download_image16.jpg',
            alt: 'The horror is within us',
        },
    ]

    const downloadImages = bestImagesFirstGroup.map(img => {
      return `
      <div class="grid-item">
          <img src="./image/Gallery/${img.src}" alt="${img.alt}">
      </div>`
  })
const downloadImagesWrapper = document.createElement('div');
downloadImagesWrapper.insertAdjacentHTML('beforeend', downloadImages.join(''))
const gridImagesCont = document .querySelector('.grid');

let counter = 0;
const galleryLoadMoreBtn = document.querySelector('.js-gallery-btn');

galleryLoadMoreBtn.addEventListener("click", e => {
    e.preventDefault()
    if(e.target === e.currentTarget) return
    galleryLoadMoreBtn.querySelector('.loader-box').classList.remove('hidden')
          
    const fragment = document.createDocumentFragment();
    const elems = []
    Array.from(downloadImagesWrapper.children).forEach(img => {
        if (counter === 8) return
        fragment.append(img)
        elems.push(img)
        counter++
    })
    setTimeout(() => {
        grid.appendChild(fragment)
        msnry.appended(elems)
        counter += 1;
        galleryLoadMoreBtn.querySelector('.loader-box').classList.add('hidden')
              
        if (grid.children.length === bestImagesFirstGroup.length + 8) {
            galleryLoadMoreBtn.style.display = "none"
        }
    }, 3000)
})

galleryLoadMoreBtn.addEventListener('dblclick', e => e.preventDefault());