import { Curriculum } from './curriculum.model';

// tslint:disable: max-line-length
export const CURRICULUM: Curriculum = {
    profile: {
        title: 'About Me',
        description: 'Electronic Engineer of the Universidad Nacional de Colombia and ex-student of Computer System Engineering at the same university. I am a person with excellent relationships and the ability to work both in a team or individually. I have high standards of responsibility, confidence, and determination, with experience in staff management.</p><p>I have been working in the telecommunications industry for more than 4 years, being part of all size teams and working in different projects related to IP radio, IPTV and MNO/MVNO/MVNA platforms.</p><p>I\'m an enthusiastic of software development with emphasis on web and mobile technologies, I am particularly interested in areas related with customer service, platform management and development.'
    },
    personalData: {
        firstName: 'Sergio Daniel',
        lastName: 'Torres Linares',
        bornDate: '1990/11/22',
        phone: '+573154427962',
        photo: 'assets/img/photo.jpg',
        civilStatus: 'single',
        availableToTravel: true,
        email: 'sdtorresl@unal.edu.co'
    },
    education: {
        title: 'Education',
        studies: [
            {
                type: 'College studies',
                place: 'Universidad Nacional de Colombia',
                title: 'Electronic Engineer',
                from: '2008',
                to: '2014',
                graduated: true
            },
            {
                type: 'College studies',
                place: 'Universidad Nacional de Colombia',
                title: 'Computer System Engineering',
                from: '2013',
                to: '2015',
                graduated: false,
                level: 'VI semester'
            },
            {
                type: 'High School',
                place: 'Colegio Agustiniano Suba',
                title: 'High School Graduate',
                from: '2002',
                to: '2007',
                graduated: true
            },
            {
                type: 'Languages',
                place: 'Adademia de Idiomas Smart',
                title: 'English',
                level: 'B2',
                to: '2019'
            },
            {
                type: '',
                title: 'Spanish',
                level: 'Native'
            },
        ]
    },
    experience: {
        title: 'Work experience',
        informationDetails: [
            {
                title: 'Operations Engineer (I New Unified Mobile Solutions)',
                text: 'Support and keep running all the components of the MVNO platform in operation, as well as carry out corrective and preventive maintenance tasks on it.',
                date: 'November 2017 - Currently'
            },
            {
                title: 'Solutions Service Responsible (Huawei Technologies Co.)',
                text: 'Analyze customer technical requirements to provide quotations and offer appropriate solutions based on company engineering services.',
                date: 'May 2017 - October 2017'
            },
            {
                title: 'Solutions Architect (Huawei Technologies Co.)',
                text: 'Guide the process of the analysis, development and implementation of customer requirements over the IPTV platform from a technical point of view.',
                date: 'September 2015 - May 2017'
            },
            {
                title: 'Technology Director (Exea SAS)',
                text: 'Plan, direct and implement the operation and installation of new points of reception of Internet radio. Manage the development and maintenance of servers, devices and applications that are required for the proper functioning of the company services.',
                date: 'February 2014 – August 2015'
            },
            {
                title: 'Support Engineer (Exea SAS)',
                text: 'Offer support and maintenance of the infraestructure of the company, including servers, databases and streaming applications.',
                date: 'September 2013 - February 2014'
            },
            {
                title: 'Web Developer (Moving Web)',
                text: 'Develop and implement web pages and applications using content management systems.',
                date: 'January 2013 - September 2013'
            }
        ]
    },
    achievements: {
        title: 'Achievements',
        informationDetails: [
            {
                title: 'I New Unified Mobile Solutions',
                text: 'Design, and develop a complete set of tools in one single UI to provide fast issue resolution and deliver customized reports to the users.'
            },
            {
                title: 'I New Unified Mobile Solutions',
                text: 'Design and develop a software that solves more than 15 common CRM cases per day automatically (more than 1350 cases until now), increasing the productivity of the operations team and improving SLA.'
            },
            {
                title: 'I New Unified Mobile Solutions',
                text : 'Develop automation scripts which helped to solve common tasks faster and more effectively, increasing team productivity.'
            },
            {
                title: 'Huawei Technologies Co.',
                text : 'Deliver opportunely phases 3, 4 and 5 of IPTV platform for ETB project.'
            },
            {
                title: 'Huawei Technologies Co.',
                text : 'Decrease delivery times of the phases of the project by filtering requirements in a technical level, creating better functional requirements specifications and implementing a local development team in order to deliver simple changes faster.'
            },
            {
                title: 'Exea SAS',
                text: 'Reduce operational and maintenance costs of the main servers of the company by optimizing the infrastructure and resources.'
            },
            {
                title: 'Exea SAS',
                text: 'Develop an Internet radio receiver device known as EMP, replacing old technologies with the goal of decreasing support cases and allow remote assistance.'
            },
            {
                title: 'Exea SAS',
                text: 'Reduce time of support for all enterprise customers through more efficient communication channels (implementation of an OTRS system).'
            },
            {
                title: 'Exea SAS',
                text: 'Modernize the website of the company introducing a new service (www.exeamedia.com).'
            },
            {
                title: 'Exea SAS',
                text: 'Implement policies for research and development in order to expand into new services.'
            },
            {
                title: 'Moving Web',
                text: 'Development and adaptation of several projects of the company'
            }
        ]
    },
    skills: {
        title: 'Skills',
        skills: [
            {
                icon: 'fab fa-linux',
                level: 90,
                values: ['Debian', 'Red Hat', 'Suse', 'Ubuntu', 'Fedora', 'Andorid', 'CentOS']
            },
            {
                icon: 'fab fa-apple',
                level: 70,
                values: ['MacOS', 'iOS']
            },
            {
                icon: 'fab fa-windows',
                level: 90,
                values: ['Windows', 'Windows Server']
            },
            {
                icon: 'fab fa-java',
                level: 70,
                values: ['Java', 'Java EE', 'Spring framework']
            },
            {
                icon: 'fab fa-php',
                level: 80,
                values: ['PHP', 'CakePHP']
            },
            {
                icon: 'fab fa-html5',
                level: 90,
                values: ['Javascript', 'HTML', 'CSS', 'Sass', 'Scss', 'TypeScript']
            },
            {
                icon: 'fas fa-database',
                level: 90,
                values: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'Sybase/SAP', 'Mongo']
            },
            {
                icon: 'fas fa-code',
                level: 70,
                values: ['C', 'C++', 'Bash']
            },
            {
                icon: 'fab fa-python',
                level: 65,
                values: ['Python']
            },
            {
                icon: 'fas fa-podcast',
                level: 90,
                values: ['IP Radio']
            },
            {
                icon: 'fas fa-tv',
                level: 75,
                values: ['IPTV/OTT']
            },
            {
                icon: 'fas fa-sim-card',
                level: 70,
                values: ['MNO/MVNO/MVNA']
            },
        ]
    }
};
