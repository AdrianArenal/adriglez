export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            gray: 'zinc'
        }
    },
    global: {
        picture: {
            src: '/logo_2048.webp',
            alt: 'My profile picture'
        },
        title: 'Adriana González',
        description: 'Artista en maquillaje de caracterización y FX',
        hero: {
            images: [
                { src: '/images/16.avif' },
                { src: '/images/9.avif' },
                { src: '/images/21.avif' },
                { src: '/images/19.avif' },
                { src: '/images/20.avif' },
                { src: '/images/15.avif' },
                { src: '/images/7.avif' },
            ]
        },
        imagesGrid: [
            { icon: 'i-lucide-user', title: 'Sobre mí', class: 'lg:col-span-2', description: 'Desde pequeña el arte siempre ha sido una gran pasión para mí. Pintaba todos los días, aunque no sabía exactamente a qué quería dedicarme; lo único claro era que quería estar en el mundo del arte. Crear me relaja y me inspira a seguir adelante. Pasaba mucho tiempo haciendo manualidades en casa y también disfrutaba del dibujo. A medida que fui creciendo, descubrí diversas ramas del arte, especialmente la escultura. Modelar personajes desde cero y trabajar con moldes me fascina. Cuando conocí el ámbito de la escultura, también descubrí los prostéticos y las técnicas relacionadas con el cine. Ese mundo me apasiona y me encantaría dedicarme algun día a crear personajes ficticios. Siempre estoy ansiosa por aprender cosas nuevas y experimentar con diferentes técnicas.' },
            { icon: 'i-lucide-camera', image: '/images/22.avif' },
            { icon: 'i-lucide-camera', image: '/images/21.avif' },
            { icon: 'i-lucide-camera', image: '/images/6.avif' },
            { icon: 'i-lucide-camera', image: '/images/15.avif' },

            { icon: 'i-lucide-boxes', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Materiales', description: 'Mis habilidades en el manejo de materiales para la creación de personajes y prótesis incluyen el uso de diversos materiales, como siliconas, resinas, yeso, arcilla, látex y gelatina. Estas son fundamentales para obtener resultados realistas y duraderos. Además, es crucial considerar la comodidad del actor al seleccionar los materiales adecuados.', },
            { icon: 'i-lucide-camera', image: '/images/23.avif' },
            { icon: 'i-lucide-camera', image: '/images/24.avif' },
            { icon: 'i-lucide-camera', image: '/images/25.avif' },
            { icon: 'i-lucide-camera', image: '/images/30.avif' },
            { icon: 'i-lucide-camera', image: '/images/26.avif' },
            { icon: 'i-lucide-camera', image: '/images/27.avif' },
            { icon: 'i-lucide-camera', image: '/images/28.avif' },
            { icon: 'i-lucide-camera', image: '/images/29.avif' },

            { icon: 'i-lucide-wand-sparkles', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Técnicas de Modelado', description: 'Mis habilidades en la técnica de modelado son avanzadas, lo que me permite crear prótesis y personajes que destacan por su realismo y originalidad. Utilizo una variedad de herramientas de modelado, que me permiten trabajar con precisión en cada detalle.' },
            { icon: 'i-lucide-camera', image: '/images/2.avif' },
            { icon: 'i-lucide-camera', image: '/images/8.avif' },
            { icon: 'i-lucide-camera', image: '/images/13.avif' },

            { icon: 'i-lucide-paintbrush', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Pintura y Acabado ', description: 'Mis habilidades en el acabado de prótesis son fundamentales para lograr un aspecto más realista. Utilizo pinceles finos para agregar detalles que simulan texturas y sombras. Además, es crucial llevar a cabo pruebas de compatibilidad entre los materiales y las pinturas para garantizar un resultado óptimo.' },
            { icon: 'i-lucide-camera', image: '/images/31.avif' },
            { icon: 'i-lucide-camera', image: '/images/32.avif' },
            { icon: 'i-lucide-camera', image: '/images/33.avif' },
            { icon: 'i-lucide-camera', image: '/images/17.avif' },
            { icon: 'i-lucide-camera', image: '/images/3.avif' },
            { icon: 'i-lucide-camera', image: '/images/14.avif' },
            { icon: 'i-lucide-camera', image: '/images/34.avif' },
            { icon: 'i-lucide-camera', image: '/images/5.avif' },
            { icon: 'i-lucide-camera', image: '/images/4.avif' },
            { icon: 'i-lucide-camera', image: '/images/1.avif' },
            { icon: 'i-lucide-camera', image: '/images/10.avif' },
            { icon: 'i-lucide-camera', image: '/images/11.avif' },
            { icon: 'i-lucide-camera', image: '/images/12.avif' },
            { icon: 'i-lucide-camera', image: '/images/18.avif' },

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