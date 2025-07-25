export const CertificatesSection = () => {
  const certifications = [
    {
      title: "Design Thinking - Simplilearn ",
      link: "https://simpli-web.app.link/e/xhfznOHEaUb",
    },
    {
      title: "MERN Stack (Node.js) - IBM ",
      link: "https://courses.etrain.skillsnetwork.site/certificates/9022f93c5ba14551af088dde249f60d7",
    },
    {
      title: "Google Cloud Computing GCP - Google (In Progress)",
      link: "", // No direct link available
    },
    {
      title: "Java Programming for Beginners - Udemy ",
      link: "https://www.udemy.com/certificate/UC-01ac2816-8efc-4cdc-96c6-b5a85dd883c2/",
    },
    {
      title: "Introduction to Cyber Security - Cisco Networking Academy",
      link: "/CyberSecurity.pdf",
    },
    {
      title: "MySQL Basics - Great Learning",
      link: "https://www.mygreatlearning.com/certificate/SZIEIDVJ",
    },
    {
      title: "C & DSA Certificate - IntelliPaat Academy",
      link: "https://intellipaat.com/academy/certificate-link/?Yz0xMjQ0JnU9MjUyMDI2JmV4dD0x",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-0 inline-block text-primary text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
