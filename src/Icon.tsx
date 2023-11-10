import Iconsv2 from './assets/icons/sprite.svg';

type TIcon = {
  iconName: string;
};

const Icon = ({ iconName, ...props }: TIcon) => (
  <svg {...props}>
    <use href={`${Iconsv2}#${iconName}`} />
  </svg>
);

export const TimerIcon = ({ ...props }) => (
  <Icon iconName='affiliate' {...props} />
);
export const StarIcon = ({ ...props }) => <Icon iconName='timer' {...props} />;
export const InfoIcon = ({ ...props }) => <Icon iconName='info' {...props} />;
export const DdIcon = ({ ...props }) => <Icon iconName='dd' {...props} />;
