import { describe, PropTypes } from 'react-desc';

import { genericProps, getAvailableAtBadge } from '../../utils';

export const doc = Clock => {
  const DocumentedClock = describe(Clock)
    .availableAt(getAvailableAtBadge('Clock'))
    .description('A clock with timezone awareness.')
    .usage(
      `import { Clock } from 'grommet';
<Clock />`,
    )
    .intrinsicElement(['div', 'svg']);

  DocumentedClock.propTypes = {
    ...genericProps,
    hourLimit: PropTypes.oneOf([12, 24, '12', '24'])
      .description('Whether to roll over the hours after 12 or after 24.')
      .defaultValue(24),
    onChange: PropTypes.func.description(
      `If the clock is running, this function will be called with the
      current time value each time it changes.`,
    ),
    precision: PropTypes.oneOf(['hours', 'minutes', 'seconds'])
      .description('How precise a time to represent.')
      .defaultValue('seconds'),
    run: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['backward', 'forward']),
    ])
      .description(
        `Whether the clock should actively adjust time or be fixed to the
      time specified. 'backward' could be used as a countdown timer.`,
      )
      .defaultValue('forward'),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ])
      .description('Clock size')
      .defaultValue('medium'),
    time: PropTypes.string.description(
      `ISO8601 time or duration. For example: 'PT8H12M23S',
      'T08:12:23', or '2015-02-22T08:12:23'. Any included date
      portion will be ignored for an analog clock. If not provided, the
      current browser time will be used.`,
    ),
    type: PropTypes.oneOf(['analog', 'digital'])
      .description('What type of visualization to show.')
      .defaultValue('analog'),
  };

  return DocumentedClock;
};
