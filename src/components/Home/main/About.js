export default function About() {
  return (
    <div className="about">
      {/* <h3>Who is this guy</h3> */}
      <div className="image">
        <img src="/image/cat-p2.png" alt="cat" />
        <div className="image-box">
          <p>
            My name is Ewan Zhang I'm a full stack developer based in
            <b> Auckland</b>☀️.
          </p>

          <p>
            I would describe myself as a developer who is passionate about
            <b> coding, animation, and of course chocolate</b>💖!
          </p>
        </div>
      </div>
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
    </div>
  );
}
