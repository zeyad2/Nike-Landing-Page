import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { support } from "../assets/icons";
const Services = () => {
  return (
    <section className="flex gap-6 flex-wrap justify-center">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          label={service.label}
          subtext={service.subtext}
          imgURL={service.imgURL}
        />
      ))}
    </section>
  );
};

export default Services;
