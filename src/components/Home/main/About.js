import FadeIn from "react-fade-in";

export default function About() {
  return (
    <FadeIn className="about" delay="1200" transitionDuration="3000">
      {/* <h3>Who is this guy</h3> */}
      <FadeIn className="image" delay="200" transitionDuration="2000">
        <img src="/image/cat-p2.png" alt="cat" />
        <FadeIn className="image-box" delay="800" transitionDuration="3000">
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
    </FadeIn>
  );
}
