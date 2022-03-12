package com.exam.examserver.service;

import com.exam.examserver.model.exam.Quiz;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizs();

    public Quiz getQuizById(Long qid);
    public void deleteQuiz(Long qid);
}
