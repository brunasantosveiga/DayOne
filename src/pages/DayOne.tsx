import { Brush } from "../components/icons/Brush";
import { CodeBracket } from "../components/icons/CodeBracket";
import { Gear } from "../components/icons/Gear";
import { User } from "../components/icons/Users";
import { Clipboard } from "../components/icons/Clipboard";
import { University } from "../components/icons/University";
import { Card } from "../components/Card";

export const DayOne = () => {
  return (
    <div className="bg-day-one-bg h-1200 w-1600 flex flex-col justify-center items-center">
      <div className="flex flex-col w-1054 h-779 relative">
        <h1 className="text-4xl font-bold mb-24 text-center text-button-hover">
          Open positions
        </h1>
        <div className="grid grid-cols-3 gap-gap">
          <Card icon={<Brush />} title="Design" textButton="4 open positions" />
          <Card
            icon={<CodeBracket />}
            title="Enginneering"
            textButton="8 open positions"
          />
          <Card
            icon={<Gear />}
            title="Operations"
            textButton="2 open positions"
          />
          <Card icon={<User />} title="People" textButton="6 open positions" />
          <Card
            icon={<Clipboard />}
            title="Sales"
            textButton="7 open positions"
          />
          <Card
            icon={<University />}
            title="University"
            textButton="8 open positions"
          />
        </div>
        <p className="text-base text-center absolute bottom-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dolores ut at consequatur quibusdam quod molestiae cumque officia
          excepturi in voluptas voluptates deserunt laudantium, fuga dignissimos
          nisi itaque adipisci alias!
        </p>
      </div>
    </div>
  );
};
