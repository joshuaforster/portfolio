export const projects = [
  {
    id: 1,
    url: 'https://sweeteners.netlify.app',
    name: 'Sweeteners',
    image: '/sweeteners.png',
    title: 'Sweeteners',
    description: 'There is widespread misinformation about sweeteners.\n\nThis app aims to dispel myths by presenting crucial, unbiased information on various sugar substitutes. It showcases current evidence without taking sides, offering a balanced view.\n\nBuilt using React and React Router, and styled with Tailwind CSS, the app lists each sweetener, providing detailed insights into its effectiveness, comparative effects to sugar, and safe consumption levels adjusted by weight using sliders.\n\nFuture updates will include more interactive features using additional React libraries to enhance user engagement.\n\nThis app is designed for nutritional professionals seeking an engaging alternative to traditional learning methods about sweeteners, and can also benefit the general public interested in exploring sugar alternatives.',
    buttonText: 'See Project',
    shortDescription: 'An app that clarifies misconceptions about sweeteners, presenting evidence-based data in an engaging format.',
    tech:['Tailwind', 'React', 'GitHub','Netlify','Mui']
  }
  ,
  {
    id: 2,
    url: 'https://norfolkhealthandfitness.netlify.app/',
    name: 'Norfolk Health & Fitness',
    image: '/norfolkhealth.png',
    title: 'Norfolk Health & Fitness',
    description: "Norfolk Health & Fitness, the premier fitness training provider in East Anglia, holds a special place in my heart. They were instrumental in my journey to becoming a qualified personal trainer, achieving a Level 3 teaching qualification, and embarking on a career as a frontend developer. The company aimed to transition from their existing WordPress site to a custom-coded solution to escape the limitations and vulnerabilities of the WordPress ecosystem, such as code bloat, spam messages, constant worry about updates, and susceptibility to pharma hacks.\n\nEntrusted with this project, I opted for a straightforward approach using vanilla JavaScript and CSS for the site's construction. In hindsight, incorporating a framework like Tailwind would have streamlined the development process, but at the time, I was unfamiliar with it. Key improvements to the site include a significant reduction in code complexity, enhanced color schemes for improved accessibility, and the integration of Stripe for secure course payments.\n\nUnderstanding the site owner's lack of programming knowledge and concern for easily making updates and managing blog content—capabilities easily handled in WordPress—I implemented a headless CMS. This solution empowers the owner to edit and add content, including blog posts, terms and conditions, Q&A, privacy policies, and about pages, without the risk of disrupting the site's functionality. The headless CMS strikes the perfect balance, offering a secure and editable website.\n\nCurrently, we are applying the final touches to the website's styling and preparing to redirect the domain, transitioning from its temporary hosting on Netlify to its official address at www.norfolkhealthandfitness.com.",
    buttonText: 'See Project',
    shortDescription: `A website rebuild for the largest fitness training provider in East Anglia`,
    tech:['Vanilla CSS', 'Vanilla Javascript', 'GitHub', 'Netlify', 'Contentful']
  },
  {
    id: 3,
    url: 'https://foodcruitment.netlify.app/',
    name: 'Foodcruitment',
    image: '/foodcruitment.png',
    title: 'FoodCruitment',
    description: `Inspired by leading job boards, FoodCruitment is a dedicated platform for job seekers in the food industry, from chefs to nutritionists.\n\nDeveloped with React and React Router DOM, this site uses Firestore and Firebase for data management and secure user authentication, marking my first project that extends beyond local storage. It introduced complex features such as login and sign-in components that allow recruiters and companies to post job advertisements.\n\nThe job submission page utilises React Forms; recruiters complete a form which is then sent to Google, creating a makeshift API that populates the homepage with job listings.\n\nCurrently, the application is basic, requiring candidates to email their CVs. Future enhancements will include a comprehensive job board portal for both recruiters and candidates to manage job applications and responses.\n\nAdditional planned features include a nutrition news feed using a news API and helpful advice and tips for job seekers, enhancing the site's focus on the nutritional sector.`,
    buttonText: 'See Project',
    shortDescription: `A recruitment platform for the food industry. Offering a direct line to career opportunities for chefs, nutritionists, and more with state-of-the-art web technologies.`,
    tech:['Tailwind', 'React', 'GitHub', 'Netlify', 'FireStore', 'FireBase']
  },
  {
    id: 4,
    url: 'https://www.sampsonnco.com',
    name: 'Sampson N CO',
    image: '/sampsonnco.png',
    title: 'Sampson N CO',
    description: 'Step into elegance with Sampson N CO, a premier destination for luxury bathroom designs and accessories.\n \nOur site offers an immersive experience into high-end bathroom renovations, showcasing a curated collection of fixtures, fittings, and design inspirations.\n \nDesigned for those who cherish sophistication in their sanctuary, Sampson N CO provides everything needed for a breathtaking bathroom makeover.',
    buttonText: 'See Project',
    shortDescription: `A luxury bathroom design and accessories website, offering an immersive experience into high-end renovations and sophisticated living spaces.`,
    tech:['Tailwind', 'React', 'GitHub','Netlify',]
  }
];
