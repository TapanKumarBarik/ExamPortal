package com.exam.examserver.service.implementation;

import com.exam.examserver.Repo.QuestionRepository;
import com.exam.examserver.model.exam.Questions;
import com.exam.examserver.model.exam.Quiz;
import com.exam.examserver.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Questions addQuestion(Questions questions) {
        return this.questionRepository.save(questions);
    }

    @Override
    public Questions updateQuestion(Questions questions) {
        return this.questionRepository.save(questions);
    }

    @Override
    public Set<Questions> getAllQuetions() {
        return new LinkedHashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Questions getQuestionById(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public Set<Questions> getQuestionsByQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long quesId) {
        Questions questions=new Questions();
        questions.setQuestionid(quesId);
        this.questionRepository.delete(questions);
    }
}
