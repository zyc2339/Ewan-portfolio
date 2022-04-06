import FadeIn from "react-fade-in";

export default function Contact() {
  return (
    <FadeIn className="contact" delay="300" transitionDuration="2000">
      <h1>CONTACT ME!</h1>
      <p>I'm looking for a new career opportunity.</p>
      <p>Drop me a line if you fancy a chat.</p>
      <h3>zyc2339@gmail.com</h3>
      <img src="/image/cat-p.png" alt="cat" />
    </FadeIn>
  );
}
