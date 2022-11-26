import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Quiz } from '../models/quiz.model';

import { FullQuiz, QuizWtId } from '../dtos/quiz.dto';
import { RoomEvent } from '../models/event.model';
import { FullEvent } from '../dtos/event.dto';
import { GuestQuiz } from '../models/guest_quize.model';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz)
    private readonly quiz: typeof Quiz,
    @InjectModel(RoomEvent)
    private readonly event: typeof RoomEvent,
    @InjectModel(GuestQuiz)
    private readonly guestQuiz: typeof GuestQuiz,
  ) {}

  async getAllQuizes(eventId: string): Promise<FullQuiz[]> {
    return await this.quiz.findAll({ where: { eventId } });
  }

  async createQuiz(quiz: QuizWtId) {
    const { title, eventId } = quiz;
    await this.quiz.create({ id: uuidv4(), title, eventId });

    return await this.getAllQuizes(eventId);
  }

  async findEvent(id: string): Promise<FullQuiz | null> {
    return await this.quiz.findOne({ where: { id } });
  }

  async getQuizes(id: string): Promise<FullQuiz[]> {
    return await this.quiz.findAll({ where: { eventId: id } });
  }

  async findQuiz(id: string): Promise<FullQuiz | null> {
    return await this.quiz.findOne({ where: { id } });
  }

  async addQuizToPassed(questId, quizId) {
    return await this.guestQuiz.create({ questId, quizId });
  }

  async getAllPassedByGuest(userId: string) {
    return await this.guestQuiz.findAll({
      where: { userId },
      include: { model: Quiz },
    });
  }
}
