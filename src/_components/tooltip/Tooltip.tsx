import Style from './tooltip.module.scss';

type TooltipProps = {
  label: string;
  icon: string;
};

const Tooltip = ({ label, icon }: TooltipProps) => {
  return (
    <>
      <i className={Style.info} aria-label={label}>
        <span className={Style.infoIcon}>{icon}</span>
        <span className={Style.infoText}>{label}</span>
      </i>
    </>
  );
};

export default Tooltip;
