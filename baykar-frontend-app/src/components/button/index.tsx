import clsx from "clsx";

type ButtonProps = {
  title: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pathElement = e.currentTarget.querySelector("path");
    if (pathElement) {
      (pathElement as SVGElement).setAttribute("fill", "#0F172A");
    }
  };

  return (
    <button
      className={clsx(
        "rounded-lg px-7 py-3 text-base font-medium leading-6 tracking-[0.5px] text-secondary ring-[2px] transition",
        props.className,
      )}
      onMouseOver={handleMouseOver}
      onMouseOut={(e) => {
        const pathElement = e.currentTarget.querySelector("path");
        if (pathElement) {
          (pathElement as SVGElement).setAttribute("fill", "white");
        }
      }}
    >
      {props.icon && <div className="pr-4">{props.icon}</div>}
      {props.title}
    </button>
  );
}
