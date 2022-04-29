import Image from "next/image";

const ProjectPreview = () => {
  const title: string = "E-commerce Kalunga.com";
  const description: string =
    "Creating the largest e-commerce of school supplies and stationery in Brazil.";

  return (
    <div className="flex gap-4">
      <div className="relative w-full h-26">
        <Image src={"/kalunga.webp"} alt="Kalunga.com" layout="fill" />
      </div>
      <div className="my-auto">
        <a href={"/"} className="font-bold underline hover:text-indigo-600">
          {title}
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectPreview;
