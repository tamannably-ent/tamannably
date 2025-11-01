export const CompanyName = {
    fullName:"Tamanna Enterprises", 
    tagLine: "Experience lightning-fast internet.",
    logo:"/images/logo.png",
    address:"",
    email:"tamannaenterprises@gmail.com",
    city:"Bellary",
}

export const ContactDetails = [
    {
        name:"Ghouse", 
        mobile: "9900642888", 
        href: "http://wa.me/919900642888", 
        faceBook: "https://facebook.com/tamannaenterprises",
        instagram: "https://instagahttps://instagram.com/tamannaenterprises" ,
        email:"mailto:tamannably@gmail.com"
    },
    {
        name:"Imtiyaz", 
        mobile: "9900642333", 
        href: "http://wa.me/919900642333", 
        faceBook: "null", 
        instagram: "https://instagahttps://instagram.com/tamannaenterprises" ,
        email:"mailto:tamannaenterprises@gmail.com"
    },
  ]

export const HeaderContent = {
        headerText:`${CompanyName.fullName}`, 
        tagLine:`${CompanyName.tagLine}`,
        description:"The internet of tomorrow is here today. Our Fiber to the Home (FTTH) service, in partnership with BSNL, is a future-proof solution built to handle the growing demands of modern life. With massive bandwidth and symmetric upload/download speeds, our fiber network can effortlessly power multiple devices, from smart TVs and security systems to work-from-home setups and online learning. As your BSNL franchisee in Bellary Urban Area, Ballari, Karnataka, we offer a scalable, next-generation network that will evolve with your needs.",
        imgSrc:"/images/Fibre.jpg",
        vidSrc:"/videos/video.mp4"
    }


export const imageScroll = [
    {
        name:"FTTH", 
        href:"/images/image.png",
        heading:"Fiber To The Home",
        description: "Fiber to the Home (FTTH) is the fastest and most advanced broadband connection available. It delivers superior speeds and rock-solid reliability by using a direct fiber optic line to your home, unlike traditional networks. It’s the perfect solution for modern, connected living."
    },
    {
        name:"FTTH - Broadband", 
        href:"/images/image2.jpg",
        heading:"High Speed internet services via Optical Fiber",
        description: "Experience the difference of pure fiber with FTTH. This technology runs fiber optic cables directly to your premises, offering lightning-fast speeds and incredibly low latency. Enjoy smoother video calls, buffer-free entertainment, and faster downloads for all your family's devices."
    },
    {
        name:"Leased Line", 
        href:"/images/image3.jpg",
        heading:" Internet Leased Line ",
        description: "A dedicated, private, and symmetrical internet connection that guarantees fixed bandwidth. Unlike standard broadband, it is not shared with other users, ensuring consistent speeds and superior reliability, which is essential for businesses with high data demands. This service provides a continuous data flow between two points with maximum uptime."
    },
    {
        name:"Bank / KSWAN Leased Line", 
        href:"/images/image4.jpg",
        heading:"Bank Circuits / KSWAN Circuit",
        description: "A secure, high-speed network connecting all government offices in the state. Part of the national e-governance plan, it provides reliable voice, video, and data communication between state, district, and block-level offices."
    },

]

export const teamMembers = [
    {
        name:"Ghouse", src:"/images/profile/profile-default.jpg", 
        role:"Prop."
    },
    {
        name:"Imtiaz", 
        src:"/images/profile/profile-default.jpg", 
        role:"tech. lead"
    },

]

export const mainServices = () => [
    {
        title:"Fibre to the Home (FTTH)",
        image:"/images/Fibre-Hero.jpg",
        description:"A high-speed internet access technology that uses fiber-optic cables to deliver broadband services directly to individual homes or buildings", 
        link:"/services/ftth"
    },
    {
        title:"ILL Services", 
        image:"/images/Leased-Line.jpg",
        description:"A premium internet connectivity service that provides a dedicated, fixed-bandwidth data connection exclusively for a single business", 
        link:"/services/leasedline"
    },

]


export const HeroProp = () => [ 
    {
      serviceName: "FTTH",
      src:"/images/hero-bg.jpg",
      heading: "Experience the Future of Internet",
      content: "Connect with ultra-fast FTTH service today.",
      hrefId:"#availability",
      linkTxt: "Check Availability",
      vidSrc:"/videos/video_ftth.webm"
    },
   
];

export const HeroPropLL = () => [
     {
      serviceName: "Leased Line",
      src:"/images/leased-line-hero.png",
      heading:"Dedicated Internet for Your Business",
      content:" Experience uncompromising speed, reliability, and security with our internet leased line services.",
      hrefId:"#pricing",
      linkTxt:"Explore Our Plans",
      vidSrc:"/videos/video.mp4"
    },
]