import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer | MERN | Java Spring Boot | AI/ML | Mobile Apps
            </h3>

            <p className="text-muted-foreground">
              I develop modern, fast, and scalable applications using MERN Stack,
              Java Spring Boot, AI/ML technologies, and mobile applications using
              React Native & Expo. I focus on building real-world solutions with
              clean architecture and best development practices.
            </p>

            <p className="text-muted-foreground">
              I frequently use tools like Git, GitHub, VS Code, Google Colab, and
              other cloud services to build efficient and production-ready
              applications. I love learning and implementing advanced technologies
              to deliver innovative digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

             <a
  href="/projects/Kanaka_Durga_8328512419.pdf"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable apps using MERN, Java Spring Boot, and AI/ML integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile App Development</h4>
                  <p className="text-muted-foreground">
                    Creating modern mobile apps using React Native and Expo with real-time features.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI / ML & Project Delivery</h4>
                  <p className="text-muted-foreground">
                    Delivering end-to-end software, web apps, and AI-powered solutions with proper deployment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
