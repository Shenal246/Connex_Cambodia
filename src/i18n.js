import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                herosect: {
                    greet1: "Leading Technology Distributor",
                    greet2first: "Welcome to ",
                    greet2mid: "Connex ",
                    greet2last: "Information Technologies",
                    greet3: "Value added distributor for more than 30 leading global vendors.",
                    contact: "Contact Us",
                    wtvideo: "Watch Video",
                },
                whowearesec: {
                    whotopic: "Who we are",
                    card1: "Distribution",
                    card1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    card2: "Consultancy",
                    card2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    card3: "Training",
                    card3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    card4: "TAC Support",
                    card4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    rText1: "A decade of expertise in cutting-edge technology distribution ",
                    rText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    ic1: "Found",
                    ic2: "Employees",
                    ic3: "Vendors",
                    ic4: "Partners",
                    contact: "Contact Us",
                },
                vendorsec: {
                    ventopic: "Our Vendors",
                    venText1: "Embark on technological Excellence with our Trusted ",
                    venText2: "Network of Vendors.",
                    
                },
                latestsec: {
                    lattopic: "Latest News",
                },
                // About us section
                ourstory: {
                    ourSTopic: "Our Story",
                    ourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    ourVTopic: "Our Vision",
                    ourVText: "Our vision is to deliver high-quality IT products and solutions through our extensive network of partners. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers, driving sustained growth and technological advancement.",
                    ourMTopic: "Our Mission",
                    ourMText: "Our mission is to deliver high-quality IT products and solutions by leveraging our extensive network of partners and channels. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers. Together, we strive to build a technologically advanced future and achieve sustained growth.",
                    sureshName: "Suresh Wijesinghe",
                    sureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    shamalName: "Shamal Aberathne",
                    shamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    dilshanName: "Dilshan De Silva",
                    dilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    rohanName: "Rohan Samaraweera",
                    rohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    rajivName: "Rajiv Senawirathne",
                    rajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    patricName: "Patric Yogarathnam",
                    patricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    erangaName: "Eranga Wickramasinghe",
                    erangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    jananiName: "Janani Siriwardhane",
                    jananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    romeshName: "Romesh De Silva",
                    romeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                },
                latestsec: {
                    lattopic: "Latest News",
                },
                // Sollutions section
                solutionssec: {
                    periTopic: "Perimeter and  Internal Security",
                    cyberTopic: "Cyber Security Governance & Compliance",
                    authTopic: "Authentication & Identity Management",
                    secTopic: "Security Management",
                    endTopic: "Endpoint Security",
                    netTopic: "Networking",
                    dataTopic: "Data Center Infrastructure and  Monitoring",
                    serverTopic: "Server Storage & Backup Solutions",
                },
                // Footer section
                footersec: {
                    footHeadTopic: "Head Office",
                    headLine1: "Level 35,",
                    headLine2: "The Gateway West 150 Beach Road,",
                    headLine3: "Singapore 189720 .",
                    headLine4: "Contact: +6567278910",
                    footConTopic: "Thailand Office",
                    conLine1: "184/75,",
                    conLine2: "17th Floor, Forum Tower,",
                    conLine3: "Ratchadaphisek Rd, Khwaeng Huai Khwang, Huai Khwang,",
                    conLine4: "Bangkok 10310, Thailand",
                    conLine5: "Contact: +66612700590",
                    resTopic: "Resources",
                    res1: "Event & News",
                    res2: "FAQs",
                    res3: "Careers",
                },
                // Chat
                chatsec: {
                    ques1: "Hi! I am here to help you. Can I know your name? ",
                    ques2: `Hi {previousValue}, How Can I help you?`,
                    ques3: "Sure. Can I have your phone number?",
                    ques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                navsec: {
                    tab1: "About Us",
                    tab2: "Solutions",
                    tab3: "Events",
                    tab4: "Events & News",
                    tab5: "Upcoming News",
                    tab6: "Blogs",
                    tab7: "Potal",
                    tab8: "Country",
                    tab9: "Contact Us",
                },
            },
        },
        fr: {
            translation: {
                herosect: {
                    greet1: "ผู้จัดจำหน่ายเทคโนโลยีชั้นนำ",
                    greet2first: "ยินดีต้อนรับสู่ ",
                    greet2mid: "คอนเน็กซ์ ",
                    greet2last: "เทคโนโลยีสารสนเทศ",
                    greet3: "ผู้จัดจำหน่ายมูลค่าเพิ่มสำหรับผู้ขายชั้นนำระดับโลกมากกว่า 30 ราย",
                    contact: "ติดต่อเรา",
                    wtvideo: "ดูวีดีโอ",
                },
                
            },
        }
    }
})