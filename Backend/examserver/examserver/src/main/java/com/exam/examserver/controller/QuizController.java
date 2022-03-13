package com.exam.examserver.controller;


import com.exam.examserver.model.exam.Quiz;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")

public class QuizController {

    @Autowired
    private QuizService quizService;


    //Add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz>add (@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //Update Quiz
    @PutMapping("/")
    public ResponseEntity<Quiz>update (@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }


    //get Quiz
    @GetMapping("/")
    public ResponseEntity<?>getAllQuiz(){
        return ResponseEntity.ok(this.quizService.getQuizs());
    }

    //get Single Quiz

    @GetMapping("/{qid}")
    public Quiz getSingleQuiz(@PathVariable("qid") Long qid){
        return this.quizService.getQuizById(qid);
    }

    //Delete
    @DeleteMapping("/{qid}")
    public void delete (@PathVariable("qid") Long qid){
        this.quizService.deleteQuiz(qid);
    }
}
