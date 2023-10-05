import { FC } from 'react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

type Props = {
  rating: number;
};

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: 'meh icon', boxSize: '25px' },
  4: { src: bullsEye, alt: 'bulls eye icon', boxSize: '25px' },
  5: { src: thumbsUp, alt: 'thumbs up icon', boxSize: '35px' },
};

const Emoji: FC<Props> = ({ rating }) => {

  if (rating < 3) return null;
  
  return (
    <Image { ...emojiMap[rating] } boxSize="25px" />
  );

};

export default Emoji;
