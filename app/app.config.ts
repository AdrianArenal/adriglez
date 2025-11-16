export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            gray: 'neutral'
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
                { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
            ]
        },
        imagesGrid: [{ icon: 'i-lucide-camera', image: '/images/1.avif' },
        { icon: 'i-lucide-camera', image: '/images/2.avif' },
        { icon: 'i-lucide-camera', image: '/images/3.avif' },
        { icon: 'i-lucide-user', title: 'Sobre mí', class: 'lg:col-span-2' },
        { icon: 'i-lucide-camera', image: '/images/4.avif' },
        { icon: 'i-lucide-camera', image: '/images/5.avif' },
        { icon: 'i-lucide-camera', image: '/images/6.avif' },
        { icon: 'i-lucide-camera', image: '/images/7.avif' },
        { icon: 'i-lucide-camera', image: '/images/8.avif' },
        { icon: 'i-lucide-wand-sparkles', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Técnicas de Modelado', description: 'Mis habilidades en la técnica de modelado son avanzadas, lo que me permite crear prótesis y personajes que destacan por su realismo y originalidad. Utilizo una variedad de herramientas de modelado, que me permiten trabajar con precisión en cada detalle.' },
        { icon: 'i-lucide-camera', image: '/images/9.avif' },
        { icon: 'i-lucide-camera', image: '/images/10.avif' },
        { icon: 'i-lucide-camera', image: '/images/11.avif' },
        { icon: 'i-lucide-camera', image: '/images/12.avif' },
        { icon: 'i-lucide-camera', image: '/images/13.avif' },
        { icon: 'i-lucide-camera', image: '/images/14.avif' },
        { icon: 'i-lucide-camera', image: '/images/15.avif' },
        { icon: 'i-lucide-camera', image: '/images/16.avif' },
        { icon: 'i-lucide-camera', image: '/images/17.avif' },
        { icon: 'i-lucide-camera', image: '/images/18.avif' },
        { icon: 'i-lucide-camera', image: '/images/19.avif' },
        { icon: 'i-lucide-boxes', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Materiales', description: 'Mis habilidades en el manejo de materiales para la creación de personajes y prótesis incluyen el uso de diversos materiales, como siliconas, resinas, yeso, arcilla, látex y gelatina. Estas son fundamentales para obtener resultados realistas y duraderos. Además, es crucial considerar la comodidad del actor al seleccionar los materiales adecuados.', },
        { icon: 'i-lucide-camera', image: '/images/20.avif' },
        { icon: 'i-lucide-camera', image: '/images/21.avif' },
        { icon: 'i-lucide-camera', image: '/images/22.avif' },
        { icon: 'i-lucide-camera', image: '/images/23.avif' },
        { icon: 'i-lucide-camera', image: '/images/24.avif' },
        { icon: 'i-lucide-camera', image: '/images/25.avif' },
        { icon: 'i-lucide-camera', image: '/images/26.avif' },
        { icon: 'i-lucide-camera', image: '/images/27.avif' },
        { icon: 'i-lucide-camera', image: '/images/28.avif' },
        { icon: 'i-lucide-camera', image: '/images/29.avif' },
        { icon: 'i-lucide-camera', image: '/images/30.avif' },
        { icon: 'i-lucide-paintbrush', class: "col-span-2 row-span-2 md:col-span-1 md:row-span-1", title: 'Pintura y Acabado ', description: 'Mis habilidades en el acabado de prótesis son fundamentales para lograr un aspecto más realista. Utilizo pinceles finos para agregar detalles que simulan texturas y sombras. Además, es crucial llevar a cabo pruebas de compatibilidad entre los materiales y las pinturas para garantizar un resultado óptimo.' },
        { icon: 'i-lucide-camera', image: '/images/31.avif' },
        { icon: 'i-lucide-camera', image: '/images/32.avif' },
        { icon: 'i-lucide-camera', image: '/images/33.avif' },
        { icon: 'i-lucide-camera', image: '/images/34.avif' },
        { icon: 'i-lucide-camera', image: '/images/35.avif' },
        { icon: 'i-lucide-camera', image: '/images/36.avif' },
        { icon: 'i-lucide-camera', image: '/images/37.avif' },
        { icon: 'i-lucide-camera', image: '/images/38.avif' }],
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