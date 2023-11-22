const slideCaptions = [
  {
    main: "Phoenix Hacks",
    subtext:
      "January 6th, 2024",
  },
];

const signup = 'https://docs.google.com/forms/d/e/1FAIpQLScZWF-7twcqNmcirLapwiOdgu2yNqTi3RrzOAlQb9_17ZYoHg/viewform'; 

const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'sponsors',
		title: 'Sponsors',
	},
	{
		id: 'contact',
		title: 'Contact Us',
	},
];

const about = {
	header: {
		title: "WELCOME TO PHOENIX HACKATHON 2023-2024"
	},
	phoenix: { 
		title: 'PHOENIX HACKATHON',
		desc: "This is our second year running an in-person hackathon. We're based at Rock Ridge High School, in Ashburn, Virginia. We look forward to seeing many of you at our event!",
	},
	hackathon: {
		title: 'HACK-A-WHAT?',
		desc: "A hackathon is a short 1-2 day event where students from middle and high school create and submit a project. Projects can be anything as long as it's related to STEM and follows the theme. During the event, students can choose to attend workshops to learn specific skills. The projects are judged, with overall winners and category winners being selected and awarded with prizes.",
	},
	workshops: {
		title: 'WORKSHOPS',
		desc: 'We offer workshops for beginners, intermediate, and advanced. Some of our workshops include: Intro to Python, Natural Language Processing, Figma Design, and much more. Look in the Student Packet for more workshops and how to sign up',
	},
	prizes: {
		title: 'PRIZES',
		desc: 'We have over $1000 in prizes. Our top prizes include a 144hz Gaming Monitor, AirPods, and a drone. We have many more prizes in different categories such as Most Innovative, Best Theme, and Most Workshops Attended. Please check the student information packet for all the prizes we have.'
	}
};

const team = [
	{
		name: 'Brian Tran',
		image: 'https://i.pinimg.com/736x/17/71/39/1771399e0f2a20b3d0db06efc5799bae.jpg',
		role: 'President'
	},
	{
		name: 'Shoumik Bisoui',
		image: 'https://i.pinimg.com/736x/4f/0a/ba/4f0ababa96a522758437c52b3d48e5c5.jpg',
		role: 'Social Media Manager'
	},
	{
		name: 'William Wo',
		image: 'https://i.pinimg.com/736x/a6/91/20/a69120497f319ec6357a891ffc9452d1.jpg',
		role: 'Sponsor Management'
	},
];

const contact = {
	location: '43460 Loudoun Reserve Dr, Ashburn, VA 20148',
	email: "phoenixhacks2023@gmail.com",
	phone: "666-666-6666",
	mapid: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4625996210652!2d-77.50240125167447!3d38.97798397794696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63f61fe2dd529%3A0x49f14c31f5e7c9f3!2sRock%20Ridge%20High%20School!5e1!3m2!1sen!2sus!4v1699241607727!5m2!1sen!2sus"
}

export { navLinks, signup, slideCaptions, about, contact, team}