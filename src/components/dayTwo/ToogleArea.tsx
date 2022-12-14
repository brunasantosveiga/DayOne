import { Switch } from "@headlessui/react";
import { useState } from "react";

type Props = {
  texto: string;
  toogle: boolean;
};
export const ToogleArea = ({ texto, toogle }: Props) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-row mb-3 bg-white rounded p-3">
      <div className="pr-4  w-6 h-6 text-2xl pb-1 flex justify-center items-center">
        +
      </div>
      {toogle && (
        <>
          <div className="pr-4 w-96 h-auto">{texto}</div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-darker" : "bg-primary"
            } h-6 w-11 relative inline-flex  items-center rounded-full border-2`}
          >
            <span
              className={`${
                enabled ? "translate-x-5 bg-white" : "translate-x-1 bg-darker"
              } inline-block h-4 w-4 transform rounded-full transition `}
            />
          </Switch>
        </>
      )}
      {!toogle && (
        <>
          <div className="pr-4 w-80 h-auto">{texto}</div>
          <p className="h-auto w-28 opacity-50 text-end">Always Active</p>
        </>
      )}
    </div>
  );
};
