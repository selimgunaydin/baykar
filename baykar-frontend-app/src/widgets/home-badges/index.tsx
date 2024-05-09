type BadgeProps = {
  title: string;
  description: string;
  image: string;
  rectangle: string;
};

const badges = [
  {
    title: "Nibh viverra",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    image: "/cup.png",
    rectangle: "/shape-1.png",
  },
  {
    title: "Cursus amet",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    image: "/image2.png",
    rectangle: "/shape-2.png",
  },
  {
    title: "Ipsum fermentum",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    image: "/tv.png",
    rectangle: "/shape-3.png",
  },
];

function Badge(props: BadgeProps) {
  return (
    <div className="grid-col-1 grid place-items-center gap-4 text-center md:place-items-start md:gap-2.5 md:text-start">
      <div className="relative">
        <img src={props.image} alt="icon" />
        <div className="absolute top-0 z-10 ms-7 size-[60px]">
          <img src={props.rectangle} alt="shape" />
        </div>
      </div>
      <p className="flex items-center text-xl font-medium text-primary-100">
        {props.title}
      </p>
      <div>
        <p className="text-lg font-normal text-primary-100">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default function HomeBadges() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 py-12 lg:pt-20 md:grid-cols-3 md:gap-10">
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </div>
  );
}
