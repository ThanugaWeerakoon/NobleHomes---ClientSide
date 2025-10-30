import kanchana from "../assests/agent/kanchana.jpg";
import gallage from "../assests/agent/gallage.jpg";
import tilak from "../assests/agent/tilak.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

const Agents = () => {
  const clients = [
    {
      id: 1,
      img: gallage,
      name: "Mr. Thilak Gallage",
      position: "Sales Manager",
      description:
      "Mr. Thilak Gallage leads our sales operations in Sri Lanka with over 10 years of experience, ensuring clients receive personalized solutions and exceptional support for their business needs.",
      reverse: false,
    },
    {
      id: 2,
      img: kanchana,
      name: "Mr. Kanchana Lakmal",
      position: "Marketing Coordinator",
      description:
      "With extensive knowledge of local markets, Mr. Kanchana Lakmal develops effective marketing strategies tailored to Sri Lankan clients, driving growth and brand awareness across the region.",
      reverse: true,
    },
    {
      id: 3,
      img: tilak,
      name: "Mr. Tilak Gawarammana",
      position: "Territory Manager (Kandy)",
      description:
      "Mr. Tilak Gawarammana manages our Kandy territory operations, ensuring seamless coordination, timely service, and strong relationships with clients across the central region of Sri Lanka.",
      reverse: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Experts Team
          </h2>
          <p className="text-gray-600">
            Our dedicated team of experts in Sri Lanka brings years of
            experience in sales, marketing, and territory management, ensuring
            personalized solutions and exceptional service for every client.
          </p>
        </div>

        {/* Agents */}
        <div className="space-y-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex flex-col md:flex-row items-center md:justify-between gap-8 ${
                client.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-3/12 w-full">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-96 rounded-3xl shadow-lg object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-6/12 w-full mt-4 md:mt-0">
                <h4 className="text-2xl font-semibold mb-2">{client.name}</h4>
                <p className="text-indigo-600 font-medium mb-4">
                  {client.position}
                </p>
                <p className="text-gray-500 mb-4">{client.description}</p>

                {/* Social Links */}
                <div className="flex gap-4 mt-4 text-gray-500">
                  <a href="#" className="hover:text-indigo-600 transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-indigo-600 transition">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="hover:text-indigo-600 transition">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-indigo-600 transition">
                    <FaBehance />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
