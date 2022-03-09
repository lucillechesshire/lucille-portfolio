import IMAGES from '../assets/images/images';
import whiteBlock from '../assets/svgs/color-blocks/block-white.svg';
import lightBlueBlock from '../assets/svgs/color-blocks/block-light-blue.svg';
import blackBlock from '../assets/svgs/color-blocks/block-black.svg';
import pinkBlock from '../assets/svgs/color-blocks/block-pink.svg';

export const SliderData = [
    {
        key: 1,
        title: 'Javascript Game',
        image: IMAGES.projImg1,
        slug: 'javascript-game',
        summary: 'Designed and built an interactive card matching game using jQuery, HTML and CSS.',
        year: '2021',
        skillsUsed: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Adobe'],
        components: ['Opening Screen', 'Game Over Screen', 'Reset Functionality', 'Instructions Screen', 'Name Input', 'Difficulty Selection', 'Scoring Mechanism'],
        design: 'Started out by creating a rough static design of the game using Adobe Illustrator, as well as a written game plan consisting of all the variables, features, and functionality. Designed all game cards and board using Adobe Photoshop and imported the Bootstrap library for buttons and styles. Styled with basic CSS.',
        development: 'My first experience with JavaScript programming. Used my base knowledge of vanilla JavaScript to use the jQuery library to simplify DOM manipulation. Created multiple functions containing event handlers and loops to manage overall functionality and UX of the game.',
        colorBlocks: [ 
            { block: whiteBlock,
              hex: '#ffffff' 
            },
            { block: lightBlueBlock,
              hex: '#02c5fe'  
            },
            { block: blackBlock,
              hex: '#000000'
            },
            { block: pinkBlock,
              hex: '#eb50b4', 
            },
        ],
        mockup: 'MOCKUPS',
    },
        
    {
        key: 2,
        title: 'React Movie Database',
        image: IMAGES.projImg2,
        slug: 'movie-database',
        summary: 'Collaborated with two team members to develop a fully responsive movie database application using React and SASS.',
        yearTitle: 'Year',
        year: '2021',
        skillsTitle: 'Skills Used',
        skillsUsed: 'React SASS Adobe',
        componentsTitle: 'Components',
        components: ['Storing Functionality, Rest API, Local Storage, Responisive Layout'],
        designTitle: 'Concept & Design',
        design: 'Started out by creating a high-fidelity mock-up using Adobe XD to come up with the overall design and functionality of website. Decided upon using black as the primary colour to accentuate the blue and white secondary colours and give prominence to the visual content. Styled using SASS through a mobile-first approach, making this application responsive for all screen sizes.',
        devTitle: 'Development',
        development: 'Set up files and planned components to set up a usable interface. Worked with Rest API to pull data from The Movie DB to obtain up-to-date movie data for this application, including top rated, popular, and upcoming movies. Set up localStorage to allow for saving functionality in the browser, which granted user to dynamically add movies to their favourites.',
        colorBlocks: '',
    },

    {
        key: 3,
        title: 'Capstone',
        image: IMAGES.projImg3,
        slug: 'capstone',
        summary: '',
        design: '',
        development: '',
        colorBlocks: '',
    },

    {
        key: 4,
        title: 'Personal Portfolio',
        image: IMAGES.projImg4,
        slug: 'portfolio',
        summary: '',
        design: '',
        development: '',
        colorBlocks: '',
    },
];