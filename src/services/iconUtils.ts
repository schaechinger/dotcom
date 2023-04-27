const glyphicons: { [type: string]: { [name: string]: number | string } } = {
  basic: {
    position: '0 0 32 32',
    heart: 13,
    'heart-empty': 20,
    'circle-empty-remove': 193,
    'circle-empty-check': 194,
    'circle-empty-question': 195,
    'circle-empty-info': 196,
    'circle-empty-alert': 197,
    'circle-empty': 298,
    banknotes: 220,
    'chevron-down': 221,
    'chevron-up': 222,
    'chevron-left': 223,
    'chevron-right': 224,
    moon: 231,
    sun: 232,
    'coffee-to-go': 281,
    certificate: 320,
    'scissors-cutting': 354,
    medal: 393,
    globe: 417,
    'world-west': 418,
    'world-east': 419,
    send: 461,
    call: 465,
    'hand-heart': 553,
    handshake: 554,
    'map-marker': 591,
    scissors: 612,
    'circle-remove': 633,
    'circle-check': 634,
    'circle-question': 635,
    'circle-info': 636,
    'circle-alert': 637,
    knight: 655,
    backpack: 685,
    email: 792,
    'buildings-city': 942,
    'switch-off': 987,
    'switch-on': 988,
  },
  halflings: {
    position: '0 0 20 20',
    scissors: 28,
    'chevron-down': 128,
    'chevron-up': 129,
    'chevron-left': 130,
    'chevron-right': 131,
    'chevron-thin-down': 217,
    'chevron-thin-up': 218,
    'chevron-thin-left': 219,
    'chevron-thin-right': 220,
  },
};

// eslint-disable-next-line consistent-return
export const iconMapFn = (iconName: string): { cls: string; icon?: string } | void => {
  const glyphiconsMatch = /^gl-(?<type>basic|halflings|social) gl-(?<name>[a-z]+(-[a-z]+)*$)/i.exec(iconName);
  if (glyphiconsMatch) {
    const { type, name } = glyphiconsMatch.groups || {};
    const id = glyphicons[type] && glyphicons[type][name];
    const { position } = glyphicons[type] && glyphicons[type];

    return (id && {
      cls: iconName,
      icon: `svguse:/icons/glyphicons/${type}/glyphicons-${type}-${id}-${name}.svg#${name}|${position}`,
    }) || { cls: '', icon: '' };
  }

  switch (iconName) {
    case 'medalmonday':
      return {
        cls: 'mm-icon-medalmonday',
        icon: 'svguse:/icons/medalmonday.svg#medalmonday|0 0 200 250',
      };

    default:
      break;
  }

  // take over other iconsets if no match
};
