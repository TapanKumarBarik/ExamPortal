package com.exam.examserver.service;

import com.exam.examserver.model.exam.Questions;
import com.exam.examserver.model.exam.Quiz;

import java.util.Set;

public interface QuestionService {

    public Questions addQuestion(Questions questions);
    public Questions updateQuestion(Questions questions);
    public Set<Questions> getAllQuetions();
    public Questions getQuestionById(Long questionId);
    public Set<Questions>getQuestionsByQuiz(Quiz quiz);
    public void deleteQuestion(Long quesId);
}
