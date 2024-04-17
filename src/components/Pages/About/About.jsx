import { Helmet } from "react-helmet";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="space-y-4 pt-2" data-aos="slide-up">
      <Helmet>
        <title>Cozy-Life-Style | About </title>
      </Helmet>
      <p>
        <span className="text-3xl font-semibold">
          Welcome to Cozy-Life-Style,
        </span>
        <br />
        where we guide you through the exciting journey of homeownership!
        Finding your ideal residential route involves a blend of exploration,
        research, and personal preferences. Whether you're a first-time buyer,
        upgrading to your dream home, or seeking investment opportunities, we've
        got you covered. Let's embark on this enriching expedition together!
      </p>
      <p>
        <span className="text-xl font-semibold">
          Starting Point: Define Your Goals:
        </span>
        <br />
        Before embarking on your residential journey, it's essential to define
        your objectives clearly. Are you looking for a cozy nest for your
        family? Or perhaps you're seeking a property with great investment
        potential? Understanding your goals will serve as the compass guiding
        you towards the perfect destination.
      </p>
      <p>
        <span className="text-xl font-semibold">Continuous Exploration: </span> <br />Community Engagement As you settle into your new
        abode, continue to explore and engage with your community. Attend local
        events, join neighborhood associations, and foster meaningful
        connections with your neighbors. Our website features community profiles
        and event calendars to help you stay connected and make the most of your
        residential experience.
      </p>
      <p>
      At <span className="text-xl">Cozy-Life-Style</span>, we're dedicated to
        guiding you through every step of your residential journey. Whether
        you're searching for your dream home, investment opportunities, or
        simply seeking inspiration, let us be your trusted companion on this
        exciting route to homeownership bliss. Start exploring today and unlock
        the door to your residential dreams!
      </p>
    </div>
  );
};

export default About;
