package com.exam.examserver.service.implementation;

import com.exam.examserver.Repo.QuizRepository;
import com.exam.examserver.model.exam.Quiz;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizs() {
        return new LinkedHashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuizById(Long qid) {
        return this.quizRepository.findById(qid).get();
    }

    @Override
    public void deleteQuiz(Long qid) {

        Quiz quiz=new Quiz();
        quiz.setQid(qid);
        this.quizRepository.delete(quiz);
    //this.quizRepository.deleteById(qid);
    }
}
