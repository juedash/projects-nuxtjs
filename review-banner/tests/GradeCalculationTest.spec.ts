import { describe, expect, it } from 'vitest'

describe('grade computed logic', () => {
    const convertedValue = (rating: number) => {
        let grade = 0;
        let text = ''

        if (rating >= 90 && rating <= 100) {
            grade = 1 + (1 - (rating - 90) / 10);
            text = "sehr gut"
        } else if (rating >= 70 && rating < 90) {
            grade = 2 + (1 - (rating - 70) / 19);
            text = "gut";
        } else if (rating >= 50 && rating < 70) {
            grade = 3 + (1 - (rating - 50) / 19);
            text = "befriedigend";
        } else if (rating >= 30 && rating < 50) {
            grade = 4 + (1 - (rating - 30) / 19);
            text = "ausreichend"
        } else if (rating >= 20 && rating < 30) {
            grade = 5 + (1 - (rating - 20) / 9);
            text = "mangelhaft"
        } else if (rating >= 1 && rating < 20) {
            grade = 6 + (1 - (rating - 1) / 18);
            text = "ungenügend"
        }
        return {
            grade: parseFloat(grade.toFixed(1)),
            text: text
        }
    }

    it('should correctly convert 95 to grade 1.5 (sehr gut)', () => {
        const result = convertedValue(95);
        expect(result.grade).toBe(1.5);
        expect(result.text).toBe('sehr gut');
    });

    it('should correctly convert 15 to grade 6 (ungenügend)', () => {
        const result = convertedValue(95);
        expect(result.grade).toBe(6);
        expect(result.text).toBe('ungenügend');
    });
});
