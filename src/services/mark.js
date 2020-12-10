const MarkRepository = require('../repositories/mark')

class MarkService {

    static async setMark(body) {
        const mark = MarkRepository.setMark(body)
        return mark
    }

    static async getMark(body) {
        const mark = MarkRepository.getMark(body)
        return mark
    }

    static async deleteMark(body) {
        const deletedMark = MarkRepository.deleteMark(body)
        return deletedMark
    }

    static async getAllProductMarks(body) {
        const marks = MarkRepository.getAllProductMarks(body)
        return marks
    }

    static async getProductMarksAverage(body) {
        const average = MarkRepository.getProductMarksAverage(body)
        return average
    }

}

module.exports = MarkService