import { FormatDurationPipe } from './duration.pipe';

describe('FormatDurationPipe', () => {

    const durationPipe = new FormatDurationPipe();

    it('should convert duration in the right format. If duration 50, expect "50min"', () => {
        expect(durationPipe.transform(50)).toBe('50min');
    });

    it('should convert duration in the right format. If duration 150, expect "2h 30min"', () => {
        expect(durationPipe.transform(150)).toBe('2h 30min');
    });
})