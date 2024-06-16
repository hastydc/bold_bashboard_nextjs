import Style from './tooltip.module.scss';

type TooltipProps = {
  label: string;
  icon: string;
  left?: boolean;
};

const Tooltip = ({ label, icon, left }: TooltipProps) => {
  return (
    <>
      <i className={Style.info} aria-label={label}>
        <span className={Style.infoIcon}>{icon}</span>
        <span className={`${Style.infoText} ${left ? Style.left : ''}`}>
          {label}
        </span>
      </i>
    </>
  );
};

export default Tooltip;
