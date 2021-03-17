const mq = (width) => `@media (max-width: ${width}px)`;

export const medias = {
  tablet: mq(1024),
  phone: mq(812),
};

export default medias;
