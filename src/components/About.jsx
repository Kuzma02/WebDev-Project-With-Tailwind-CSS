import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and cofee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut quasi autem cum at debitis adipisci porro aliquam, laboriosam,
            magni nihil fuga iste ipsam dolore voluptatibus nesciunt
            necessitatibus sapiente accusamus. Eum recusandae enim cum quasi
            mollitia quo rem asperiores impedit! Quam, suscipit amet quo vitae
            ad eius possimus vero reiciendis enim voluptatibus alias, adipisci
            exercitationem unde quidem architecto aliquam asperiores?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
