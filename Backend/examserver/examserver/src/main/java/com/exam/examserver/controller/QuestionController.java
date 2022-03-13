package com.exam.examserver.controller;

import com.exam.examserver.model.exam.Questions;
import com.exam.examserver.model.exam.Quiz;
import com.exam.examserver.service.QuestionService;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;


    //add Questions

    @PostMapping("/")
    public ResponseEntity<Questions>add(@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.addQuestion(questions));
    }

    //update Question
    @PutMapping("/")
    public ResponseEntity<Questions>update(@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.updateQuestion(questions));
    }


    //get question by quiz

    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?>getQuestionsByQuiz(@PathVariable("qid") Long qid){
//        Quiz quiz=new Quiz();
//        quiz.setQid(qid);
//        Set<Questions>questionsSet= this.questionService.getQuestionsByQuiz(quiz);
//        return ResponseEntity.ok(questionsSet);

        Quiz quiz=this.quizService.getQuizById(qid);
        Set<Questions>questionsSet=quiz.getQuestions();

        List list=new ArrayList(questionsSet);
        if(list.size()>(quiz.getNoOfQuestions())){
            list=list.subList(0, quiz.getNoOfQuestions()+1);
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);

    }


    //get single question

    @GetMapping("/{quesid}")
    public Questions getSingleQuestion(@PathVariable("quesid") Long quesid){
        return this.questionService.getQuestionById(quesid);
    }

    //Delete Question
    @DeleteMapping("/{quesid}")
    public void deleteQuestion(@PathVariable("quesid") Long quesid){
         this.questionService.deleteQuestion(quesid);
    }

}
