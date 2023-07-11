import { DateToString, StringToDate } from './date.pipe';

describe('Format date pipes', () => {
    describe('DateToString', () => {
        const dateToString = new DateToString();

        it('for "20/12/2020" transform method should return "20/12/2020"', () => {
            expect(dateToString.transform('20/12/2020')).toBe('20/12/2020');
        });

        it('for "20-12-2020" transform method should return empty string', () => {
            expect(dateToString.transform('20-12-2020')).toBe('');
        });

        it('for "2020-12-20" transform method should return "20/12/2020"', () => {
            expect(dateToString.transform('2020-12-20')).toBe('20/12/2020');
        });
    });

    describe('StringToDate', () => {
        const stringToDate = new StringToDate();
        it('for "20/12/2020" transform method should return "2020-12-20"', () => {
            expect(stringToDate.transform('20/12/2020')).toBe('2020-12-20');
        });

        it('for null transform method should return an empty string', () => {
            expect(stringToDate.transform(null)).toBe('');
        });
    });
});
