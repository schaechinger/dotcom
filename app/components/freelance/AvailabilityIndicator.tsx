import Clock from "../icons/Clock";

const AvailabilityIndicator = () => {
  const availibility = 2;

  return (
    <div className="text-primary-500 bg-primary-100 border border-primary-100 rounded-sm px-2 py-1 font-bold inline-block">
      { availibility
        ? <span>
            <Clock className="text-primary-300 -mt-1 mr-2 text-lg" />
            <span className="text-xl mr-0.5">{availibility}</span>d / Woche
          </span>
        : 'Keine Kapazität' }
    </div>
  );
};

export default AvailabilityIndicator;
