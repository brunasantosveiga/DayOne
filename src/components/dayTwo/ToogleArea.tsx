import { Switch } from "@headlessui/react";
import { useState } from "react";

export const ToogleArea = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="pr-4  w-6 h-6 text-xl pb-1">+</div>
      <div className="pr-4">Strictly Necessary Cookies</div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } h-8 w-8 inline-block `}
      ></Switch>
    </div>
  );
};
