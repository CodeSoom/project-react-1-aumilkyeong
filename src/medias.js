// medias.js

const mq = (width) => `@media (min-width: ${width}px)`;

export const medias = {
  desktop: mq(1024),
  tablet: mq(768),
  phone: mq(320),
};

export default medias;
