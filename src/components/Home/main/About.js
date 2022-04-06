import FadeIn from "react-fade-in";

export default function About() {
  return (
    <FadeIn className="about" delay="400" transitionDuration="1000">
      {/* <h3>Who is this guy</h3> */}
      <FadeIn className="image" delay="100" transitionDuration="1500">
        <img src="/image/cat-p2.png" alt="cat" />
        <FadeIn className="image-box" delay="300" transitionDuration="1500">
          <p>
            My name is Ewan Zhang I'm a full stack developer based in
            <b> Auckland</b>☀️.
          </p>

          <p>
            I would describe myself as a developer who is passionate about
            <b> coding, animation, and of course chocolate</b>💖!
          </p>
        </FadeIn>
      </FadeIn>
      <p>
        In 2021 I began my journey to become a world-class developer, through
        extensive hours of learning, I gained hands-on experience. I now have a
        portfolio of web applications I have created. These projects are a
        product of my continuous development within design and programming.
      </p>
      <p>A little bit about me:</p>
      <p>
        {" "}
        I am addicted to cats😻. If you see me looking zoned out - yes, I am
        thinking of cats. In my free time, you can find me at the gym🏋🏻‍♂️, at the
        beach🌊 or on the way to some explore nature on some bush tracks🌳.
      </p>
      <h1>Top skills</h1>
      <h3>TEAM WORK & CONFLICT MANAGEMENT</h3>
      <p>
        Throughout my work experience and studies at Mission Ready HQ I
        completed a variety of group projects, of which most were one week
        projects using the Agile framework. I colaborated extremely well with my
        teammates (3-4 people) and I was always checking up on other members
        making sure they were OK and that we were all on the same page in terms
        of the task and application MVP. <br />
        <br />
        In my customer facing role at Spark conflict management is key. I
        believe most conflicts are misunderstandings that can be managed with
        good communication. My experience has helped me become a great listener
        with empathy and compassion for others.
      </p>

      <h3>PROBLEM SOLVER & WILLING TO LEARN</h3>
      <p>
        Since embarking on my journey to a career in web development I have been
        introduced to new ways of problem-solving. My Google skills have been
        refined and I have learned to research and read technical documentation.
        During the reserch, I always find something interesting: new tools, new
        library, new concepts. I love to try them out by applying them in my
        project and mark them in my Notion and Typora.
      </p>
      <h1>Technical Skills</h1>
      <h3>HTML & CSS</h3>
      <p>
        As the building blocks of web applications I was able to design, build
        and style a personal blog. This was made responsive using CSS media
        queries. What I found most rewarding was the end to end process -
        ideation to creation.
      </p>
      <h3>React JS & JavaScript</h3>
      <p>
        The majority of my projects have been built using React JS and I am most
        comfortable using this library to create clean functional applications.
        My React projects are described in further detail in my portfolio page.
      </p>
      <h3>REST API & MongoDB</h3>
      <p>
        Working with Rest API's was a particularly fun project at Developers
        Institute. I created a restaurant booking web app which can be found{" "}
        <a href="https://p2-reservation.netlify.app">here</a>.
      </p>
    </FadeIn>
  );
}
