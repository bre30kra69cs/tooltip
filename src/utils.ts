type Mods = Record<string, undefined | null | boolean>;

export const bem = (base: string) => {
  return (element?: string, mods?: Mods) => {
    if (typeof element !== 'string') {
      return base;
    }

    if (!mods) {
      if (element) {
        return `${base} ${base}--${element}`;
      }

      return base;
    }

    const _mods = Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([key]) => key);

    if (!_mods.length) {
      if (element) {
        return `${base} ${base}--${element}`;
      }

      return base;
    }

    const item = element ? `${base}--${element}` : base;
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
    .filter((className) => !!className)
    .filter((className) => typeof className === 'string')
    .join(' ');
};
