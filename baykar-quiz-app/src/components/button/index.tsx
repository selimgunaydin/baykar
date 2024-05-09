import clsx from "clsx";

type ButtonProps = {
  action?: () => void;
  title: string;
  buttonClass?: string;
  isDisabled?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.action}
      className={clsx(
        "bg-gray-300 px-12 py-4 transition duration-200 ease-in hover:bg-gray-200",
        props.buttonClass,
      )}
      disabled={props.isDisabled}
    >
      {props.title}
    </button>
  );
}
