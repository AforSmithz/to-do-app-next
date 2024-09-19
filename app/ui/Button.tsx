interface ButtonProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (i: any) => void;
  className?: string;
}

export default function Button({ text, handler, className }: ButtonProps) {
  return (
    <div
      onClick={handler}
      className={`font-semibold cursor-pointer rounded-lg px-4 py-2 flex items-center justify-center ${className} `}
    >
      {text}
    </div>
  );
}
