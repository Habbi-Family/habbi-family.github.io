export default {
    data() {
        return {
            photoCount: 22,
            photoUrls: [],
            loadedPhotoCount: 0
        }
    },
    methods: {
        navbar(id) {
            document.querySelector('.section-' + id).scrollIntoView({ 
                behavior: 'smooth' 
              });
        },
        photoLoaded() {
            this.loadedPhotoCount++;
            if (this.loadedPhotoCount == this.photoCount) {
                fetch('https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js').then(response => response.text().then(text => {
                    eval(text);
                }));
            }
        }
    },
    mounted() {
        this.photoUrls = Array.from(Array(this.photoCount).keys())
            .map(i => `/media/photolist/${(i + 1).toString().padStart(2, '0')}.jpg`);
    }
}
