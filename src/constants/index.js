const slideCaptions = [
  {
    main: "Phoenix Hacks",
    subtext:
      "January 6-7th, 2024",
  },
];

const signup = 'https://docs.google.com/forms/d/e/1FAIpQLScZWF-7twcqNmcirLapwiOdgu2yNqTi3RrzOAlQb9_17ZYoHg/viewform'; 
const planning = "https://docs.google.com/document/d/1U44gAgG0d3-_8ZP-FuaK8-SrjbYKU_nOjiaKbHxNaHQ/view";

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
    title: "WELCOME TO PHOENIX HACKATHON 2023-2024",
  },
  phoenix: {
    title: "PHOENIX HACKATHON",
    desc: "This is our second year running an in-person hackathon. We're based at Rock Ridge High School, in Ashburn, Virginia. We look forward to seeing many of you at our event! For full schedule and more information: ",
  },
  hackathon: {
    title: "HACK-A-WHAT?",
    desc: "A hackathon is a short 1-2 day event where students from middle and high school create and submit a project. Projects can be anything as long as it's related to STEM and follows the theme. During the event, students can choose to attend workshops to learn specific skills. The projects are judged, with overall winners and category winners being selected and awarded with prizes.",
  },
  workshops: {
    title: "WORKSHOPS",
    desc: "We offer workshops for beginners, intermediate, and advanced. Some of our workshops include: Intro to Python, Natural Language Processing, Figma Design, and much more. Look in the Student Packet for more workshops and how to sign up",
  },
  prizes: {
    title: "PRIZES",
    desc: "We have over $1000 in prizes. Our top prizes include a 144hz Gaming Monitor, AirPods, and a drone. We have many more prizes in different categories such as Most Innovative, Best Theme, and Most Workshops Attended. Please check the student information packet for all the prizes we have.",
  },
  ctf: {
    title:"CTF",
    desc: "Engage in our Capture the Flag Tournament, where participants must outsmart opponents to capture virtual flags strategically placed within vulnerable systems. This hands-on experience will test your hacking skills, problem-solving, and cybersecurity knowledge. Keep in mind that this is a seperate section of the event with different prizes.",
  }
};

const aboutimgs = {
	welcome: 'https://i.pinimg.com/originals/75/46/e4/7546e4e5263716550263f41c703471d4.png',
  ctf: 'https://i.pinimg.com/originals/67/c5/c6/67c5c6a934a31268c3d5603b44806a3b.png'
}

const sponsor = {
  text: "Interested in sponsoring? Email us at rockridge@phxhax.com and check out our "
}

const team = [
  {
    name: "Brian Tran",
    image:
      "https://i.pinimg.com/736x/17/71/39/1771399e0f2a20b3d0db06efc5799bae.jpg",
    role: "President",
  },
  {
    name: "Taran Kamireddy",
    image:
      "https://i.pinimg.com/originals/8f/90/23/8f9023aacc465863537a1dd20bcc0e15.png",
    role: "Vice President",
  },
  {
    name: "William Wo",
    image:
      "https://i.pinimg.com/736x/a6/91/20/a69120497f319ec6357a891ffc9452d1.jpg",
    role: "Sponsor Management",
  },
  {
    name: "Shoumik Bisoui",
    image:
      "https://i.pinimg.com/736x/09/52/3c/09523cbd4c21d9c5b70131b683bc3b30.jpg",
    role: "Web Developer",
  },
  {
    name: "Rohan Matta",
    image:
      "https://i.pinimg.com/originals/e9/88/a4/e988a465fa3a990568f98a4804b1e9c3.png",
    role: "Treasurer",
  },
];

const contact = {
	location: '43460 Loudoun Reserve Dr, Ashburn, VA 20148',
	email: "rockridge@phxhax.com",
	phone: "666-666-6666",
	mapid: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4625996210652!2d-77.50240125167447!3d38.97798397794696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63f61fe2dd529%3A0x49f14c31f5e7c9f3!2sRock%20Ridge%20High%20School!5e1!3m2!1sen!2sus!4v1699241607727!5m2!1sen!2sus"
}

export { navLinks, signup, slideCaptions, about, contact, team, planning, aboutimgs, sponsor}