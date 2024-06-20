import { CircularText } from "./Icons";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-foreground animate-spin-slow" />
      </div>
    </div>
  );
}

export default HireMe;
