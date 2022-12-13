import { MyDialog } from "../components/dayTwo/MyDialog";

export const DayTwo = () => {
  return (
    <div className="relative w-1600 h-1200 bg-primary z-0">
      <div className="absolute top-52 left-80 bg-darker w-400 h-484 rounded-3xl z-10"></div>
      <MyDialog />
    </div>
  );
};
