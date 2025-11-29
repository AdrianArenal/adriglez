export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            gray: 'zinc'
        }
    },
    global: {
        picture: {
            src: '/images/adri.avif',
            alt: 'My profile picture'
        },
        title: 'Adriana González',
        description: 'Artista en maquillaje de caracterización y FX',
        hero: {
            images: [
                { src: '/images/16.avif' },
                { src: '/images/9.avif' },
                { src: '/images/21.avif' },
                { src: '/images/36.avif' },
                { src: '/images/37.avif' },
                { src: '/images/15.avif' },
                { src: '/images/7.avif' },
            ]
        },
        feed: [
            { id: 'about-me', icon: 'i-lucide-user', class: 'col-span-3 row-span-2 lg:row-span-1 md:col-span-2', variant: 'soft' as const },
            { icon: 'i-lucide-camera', image: '/images/22.avif', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1" },
            { icon: 'i-lucide-camera', image: '/images/21.avif'},
            { icon: 'i-lucide-camera', image: '/images/6.avif' },
            { icon: 'i-lucide-camera', image: '/images/15.avif', class: "col-span-3 md:col-span-1"},

            { id: 'materials', icon: 'i-lucide-boxes', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", variant: 'soft' as const },
            { icon: 'i-lucide-camera', image: '/images/23.avif' },
            { icon: 'i-lucide-camera', image: '/images/24.avif' },
            { icon: 'i-lucide-camera', image: '/images/25.avif' },
            { icon: 'i-lucide-camera', image: '/images/30.avif', class: "col-span-2" },
            { icon: 'i-lucide-camera', image: '/images/26.avif', class: "col-span-3 md:col-span-1"},
            { icon: 'i-lucide-camera', image: '/images/27.avif',  class: "col-span-2 md:col-span-1" },
            { icon: 'i-lucide-camera', image: '/images/28.avif' },
            { icon: 'i-lucide-camera', image: '/images/29.avif',  class: "col-span-3 md:col-span-2" },

            { id: 'modeling-techniques', icon: 'i-lucide-wand-sparkles', class: "col-span-2 md:col-span-1 md:row-span-1", variant: 'soft' as const },
            { icon: 'i-lucide-camera', image: '/images/2.avif' },
            { icon: 'i-lucide-camera', image: '/images/8.avif', class: "col-span-3 md:col-span-2" },
            { icon: 'i-lucide-camera', image: '/images/13.avif' },

            { id: 'painting-and-finishing', icon: 'i-lucide-paintbrush', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", variant: 'soft' as const },
            { icon: 'i-lucide-camera', image: '/images/31.avif' },
            { icon: 'i-lucide-camera', image: '/images/32.avif',  class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1" },
            { icon: 'i-lucide-camera', image: '/images/33.avif' },
            { icon: 'i-lucide-camera', image: '/images/17.avif' },
            { icon: 'i-lucide-camera', image: '/images/3.avif', class: "col-span-2 md:col-span-1" },
            { icon: 'i-lucide-camera', image: '/images/14.avif',  },
            { icon: 'i-lucide-camera', image: '/images/34.avif', class: "row-span-2 col-span-2 md:row-span-1 md:col-span-1" },
            { icon: 'i-lucide-camera', image: '/images/5.avif' },
            { icon: 'i-lucide-camera', image: '/images/4.avif'},
            { icon: 'i-lucide-camera', image: '/images/1.avif', class: "col-span-2 row-span-2 md:row-span-1 md:col-span-1" },
            { icon: 'i-lucide-camera', image: '/images/10.avif' },
            { icon: 'i-lucide-camera', image: '/images/11.avif' },
            { icon: 'i-lucide-camera', image: '/images/12.avif' },
            { icon: 'i-lucide-camera', image: '/images/18.avif', class: "col-span-2 md:col-span-1" },
            { id: 'work-experience', icon: 'i-lucide-paintbrush', class: "col-span-2 md:col-span-1 md:row-span-1", variant: 'soft' as const },
            { icon: 'i-lucide-camera', image: '/images/35.avif' },

        ],
        workExperience: [{
            title: 'Bachiller de Artes',
            subtitle: 'IES La Laboral (Gijón)',
            image: '/images/laboral.avif'
        },
        {
            title: 'Curso de maquillaje y caracterización FX',
            subtitle: 'Escuela KOHL (Madrid)',
            image: '/images/escuela-kohl.webp'
        }, {
            title: 'Grado superior en escultura dedicada al espectáculo',
            subtitle: 'Escuela de Artes (Oviedo)',
            image: '/images/escuela-arte.avif'
        }
        ]
    }
})