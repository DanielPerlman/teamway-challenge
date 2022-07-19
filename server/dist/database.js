"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const db_json_1 = __importDefault(require("./db.json"));
const log = (0, debug_1.default)('app:in-memory-dao');
const questions = db_json_1.default.questions;
class Database {
    constructor() {
        this.questions = questions;
        log('Created new instance of Database');
    }
    getQuestionIndex(id) {
        return this.questions.findIndex(q => q.id === id);
    }
    createQuestion(question) {
        question.id = this.questions.length;
        this.questions.push(question);
        return question;
    }
    getQuestion(id) {
        return this.questions.find(question => question.id === id);
    }
    getQuestions() {
        return this.questions;
    }
    updateQuestion(question) {
        const index = this.getQuestionIndex(question.id);
        this.questions[index] = question;
        return question;
    }
    deleteQuestion(id) {
        const index = this.getQuestionIndex(id);
        this.questions.splice(index, 1);
        return this.questions;
    }
}
exports.default = new Database();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUUxQix3REFBMkI7QUFFM0IsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDeEQsTUFBTSxTQUFTLEdBQW9CLGlCQUFFLENBQUMsU0FBNEIsQ0FBQztBQUVuRSxNQUFNLFFBQVE7SUFHVjtRQUZBLGNBQVMsR0FBb0IsU0FBUyxDQUFDO1FBR25DLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxjQUFjLENBQUMsUUFBa0I7UUFDN0IsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFrQjtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUMsRUFBVTtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=