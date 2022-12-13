type Props = {
  icon: React.ReactElement;
  title: string;
  textButton: string;
};
export const Card = ({ icon, title, textButton }: Props) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-10 w-336 shadow-lg">
      <div className="flex flex-row justify-center pt-4 mb-8">
        {icon}
        <h2 className="text-2xl">{title}</h2>
      </div>
      <button className="border-2 border-day-one-bg rounded-md py-2.5 px-5 text-lg hover:bg-button-hover hover:text-white">
        {textButton}
      </button>
    </div>
  );
};
