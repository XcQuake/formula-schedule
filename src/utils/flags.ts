const reqSvgs = require.context('../images/flags', true, /\.svg$/);

const flags = reqSvgs
  .keys()
  .reduce<Record<string, string>>((images, path) => {
    // eslint-disable-next-line no-param-reassign
    images[path.replace(/(svg)|([./])/g, '')] = reqSvgs(path);
    return images;
  }, {});

export default flags;
