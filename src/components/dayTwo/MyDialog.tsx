import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ToogleArea } from "./ToogleArea";

export const MyDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="absolute left-96 top-64"
    >
      <Dialog.Panel className="absolute w-571 h-742 bg-secondary border-2 p-12 rounded-3xl">
        <Dialog.Title className="text-lg leading-5 mb-2 font-semibold">
          About Your Privacity
        </Dialog.Title>
        <Dialog.Description className="text-sm">
          We process your data to deliver content or advertisements and measure
          the delivery of such content or advertisements to extract insights
          about our website. We share this information with our partners on the
          basis of consent and legitimate interest. You may exercise your right
          to consent or object to a legitimate interest, based on a specific
          purpose below or at a partner level in the link under each purpose.
          These choices will be signaled to our vendors.
        </Dialog.Description>
        <button className="w-103 h-49 rounded-3xl bg-darker text-white mt-3 mb-5">
          Allow all
        </button>
        <h1 className="text-base font-medium mb-3">
          Manage Consent Preferences
        </h1>
        <ToogleArea texto={"Strictly Necessary Cookies"} toogle={false} />
        <ToogleArea texto={"Funcional Cookies"} toogle={true} />
        <ToogleArea texto={"Performance Cookies"} toogle={true} />
        <ToogleArea
          texto={
            "Personalised ads and content measurement, audience insights and product development Cookies"
          }
          toogle={true}
        />
        <button className="w-108 h-49 rounded-3xl bg-darker text-white mt-5 mb-10 mr-2">
          Reject all
        </button>
        <button className="w-176 h-49 rounded-3xl bg-darker text-white mt-5 mb-10">
          Submit My Choices
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};
