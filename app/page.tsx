import Image from "next/image";
import Link from "next/link";
import avatar from "../public/images/avatar.jpg";
import AnimatedIntro from "../components/AnimatedIntro";

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <AnimatedIntro
          title={"Hi, I’m Sachin"}
          description={
            "AI/ML Developer — I build production-ready machine learning systems and full-stack web apps using Python, FastAPI, and Next.js."
          }
        />
        <div className="mt-6 flex gap-4">
          <Link
            href="/projects"
            className="btn-primary px-4 py-2 rounded-md bg-black text-white"
          >
            View Projects
          </Link>
          <a
            href="/contact"
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg">
          <Image src={avatar} alt="avatar" width={224} height={224} />
        </div>
      </div>
    </section>
  );
}
