import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { facebook, instagram, twitter } from "../assets/icons";

const Footer = () => {
  return (
    <section className="padding bg-black padding-x padding-t pb-8 text-white-400">
      <footer className="max-container flex justify-evenly">
        <div className="flex gap-14">
          <div className="left-side">
            <div className="logo">
              <img src={footerLogo} width={150} height={150} alt="nike logo" />
              <p className="text-slate-gray sm:max-w-sm mt-7">
                Get Shoes Ready for the new term at your nearest Nike store find
                your perfect size in store and get rewards.
              </p>
            </div>
            <div className="icons flex gap-5">
              {socialMedia.map((icon) => (
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="bg-white rounded-full w-[40px] p-2 mt-7"
                />
              ))}
            </div>
          </div>
          <div className="flex gap-16">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl">{section.title}</h2>

                <div className="flex flex-col gap-3 mt-4">
                  {section.links.map((link) => (
                    <a href={link.link} className="text-slate-gray">  {link.name}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
