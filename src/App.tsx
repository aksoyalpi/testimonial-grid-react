import imgDaniel from "./assets/image-daniel.jpg";
import imgJonathan from "./assets/image-jonathan.jpg";
import imgJeanette from "./assets/image-jeanette.jpg";
import imgPatrick from "./assets/image-patrick.jpg";
import imgKira from "./assets/image-kira.jpg";

import './App.css'
import Card from './Card';

function App() {

  const testimonials = [
    {
      name: "Daniel Clifford",
      pic: imgDaniel,
      description: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      quote: "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    },
    {
      name: "Jonathan Walters",
      pic: imgJonathan,
      description: "The team was very supportive and kept me motivated",
      quote: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
      className: "grey"
    },
    {
      name: "Jeanette Harmon",
      pic: imgJeanette,
      description: "An overall wonderful and rewarding experience",
      quote: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
      className: "white"
    },
    {
      name: "Patrick Abrams",
      pic: imgPatrick,
      description: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      quote: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
      className: "dark-blue"
    },
    {
      name: "Kira Whittle",
      pic: imgKira,
      description: "Such a life-changing experience. Highly recommended!",
      quote: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
      className: "white"
    },
  ]

  const testimonialsElements = testimonials.map(testimonial =>
    <Card 
      name={testimonial.name}
      pic={testimonial.pic}
      description={testimonial.description}
      quote={testimonial.quote}
      className={testimonial.className}
    />
  );

  return (
    <div className="container">
    {testimonialsElements}
    </div>
  )
}

export default App

/*
const mono = () => {
<div class="container" id="root">
<div class="card">
  <div class="profile-info">
    <img alt="profile picture" src="./images/image-daniel.jpg"/>
    <div class="name-container">
      <p class="name">Daniel Clifford</p>
      <p class="subtitle">Verified Graduate</p>
    </div>
  </div>

  <p class="description">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
  <p class="citation"></p>
  
</div>

</div>
Daniel Clifford
Verified Graduate

I received a job offer mid-course, and the subjects I learned were current, if not more so, 
in the company I joined. I honestly feel I got every penny’s worth.

“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
transition and have heard some people who had an amazing experience here. I signed up 
for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
The next 12 weeks was the best - and most grueling - time of my life. Since completing 
the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”

Jonathan Walters
Verified Graduate

The team was very supportive and kept me motivated

“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
for a big company. This was one of the best investments I’ve made in myself. ”

Jeanette Harmon
Verified Graduate

An overall wonderful and rewarding experience

“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
while doing something I love. ”

Patrick Abrams
Verified Graduate

Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
learning from their experiences was easy.

“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
gave me the confidence necessary to be able to go out in the world and present myself as a capable 
junior developer. The standard is above the rest. You will get the personal attention you need from 
an incredible community of smart and amazing people. ”

Kira Whittle
Verified Graduate

Such a life-changing experience. Highly recommended!

“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
100% recommend! ”

<div class="attribution">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
Coded by <a href="#">Your Name Here</a>.
</div>
</body>
</html>
*/