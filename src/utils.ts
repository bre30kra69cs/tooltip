type Mods = Record<string, undefined | null | boolean>;

export const bem = (base: string) => {
  return (element?: string, mods?: Mods) => {
    if (typeof element !== 'string') {
      return base;
    }

    if (!mods) {
      if (element) {
        return `${base}--${element}`;
      }

      return base;
    }

    const _mods = Object.entries(mods)
      .filter(([, value]) => {
        return !!value;
      })
      .map(([key]) => {
        return key;
      });

    if (!_mods.length) {
      if (element) {
        return `${base}--${element}`;
      }

      return base;
    }

    const item = element !== '' ? `${base}--${element}` : base;
    const result = [item];

    _mods.forEach((mod) => {
      result.push(`${item}__${mod}`);
    });

    return result.join(' ');
  };
};

type Cn = string | null | undefined | boolean;

export const cn = (...classNames: Cn[]) => {
  return classNames
    .filter((className) => {
      return !!className;
    })
    .filter((className) => {
      return typeof className === 'string';
    })
    .join(' ');
};
