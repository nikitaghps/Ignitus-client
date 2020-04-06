import React from 'react';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

const VideoLibraryIcon = ({title = 'Video Library Icon', ...rest }: Props) => {
  return (
    <svg
      aria-label={title}
      viewBox="-5 -5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest }
    >
      <title>{title}</title>
      <path d="M1.12533 3.25008C0.735742 3.25008 0.416992 3.56883 0.416992 3.95842V13.1667C0.416992 13.9459 1.05449 14.5834 1.83366 14.5834H11.042C11.4316 14.5834 11.7503 14.2647 11.7503 13.8751C11.7503 13.4855 11.4316 13.1667 11.042 13.1667H2.54199C2.15241 13.1667 1.83366 12.848 1.83366 12.4584V3.95842C1.83366 3.56883 1.51491 3.25008 1.12533 3.25008ZM13.167 0.416748H4.66699C3.88783 0.416748 3.25033 1.05425 3.25033 1.83341V10.3334C3.25033 11.1126 3.88783 11.7501 4.66699 11.7501H13.167C13.9462 11.7501 14.5837 11.1126 14.5837 10.3334V1.83341C14.5837 1.05425 13.9462 0.416748 13.167 0.416748ZM7.50033 9.27092V2.89591L11.3749 5.80008C11.5662 5.94175 11.5662 6.22508 11.3749 6.36675L7.50033 9.27092Z" fill="#000066"/>    </svg>
  );
};

export default VideoLibraryIcon;




