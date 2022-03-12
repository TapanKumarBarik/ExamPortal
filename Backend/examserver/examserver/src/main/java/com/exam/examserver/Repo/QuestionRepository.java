package com.exam.examserver.Repo;

import com.exam.examserver.model.exam.Questions;
import com.exam.examserver.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Questions,Long> {

    Set<Questions> findByQuiz(Quiz quiz);
}
