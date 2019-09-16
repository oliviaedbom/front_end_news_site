import { milliseconds } from '../utils';

describe('utils', () => {
  describe('timer', () => {
    it('turns seconds in to miliseconds', () => {
      const seconds = 2;
      const expectedMilliseconds = 2000;
      const result = milliseconds.fromSeconds(seconds);

      expect(result).toEqual(expectedMilliseconds);
    });

    it('turns minutes into milliseconds', () => {
      const minutes = 2;
      const expectedMilliseconds = 120000;
      const result = milliseconds.fromMinutes(minutes);

      expect(result).toEqual(expectedMilliseconds);
    });
  });
});
