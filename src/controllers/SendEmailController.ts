import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveyRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";

class SendEmailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveyRepository = getCustomRepository(SurveysRepository);
    const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });
    if (!userAlreadyExists) {
      return response.status(400).json({
        error: "User does not exists!",
      });
    }

    const surveyAlreadyExists = await surveyRepository.findOne({
      id: survey_id,
    });
    if (!surveyAlreadyExists) {
      return response.status(400).json({
        error: "Survey does not exists!",
      });
    }
    //salvar as informacoes na tebela surveyUser
    const surveyuser = surveyUsersRepository.create({
      user_id: surveyAlreadyExists.id,
      survey_id,
    });
    await surveyUsersRepository.save(surveyuser);
    //enviar um email para o usuario

    return response.json(surveyuser);
  }
}

export { SendEmailController };
