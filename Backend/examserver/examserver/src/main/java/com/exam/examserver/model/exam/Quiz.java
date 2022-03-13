package com.exam.examserver.model.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name="quiz")
public class Quiz {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long qid;

    private String title;
    private String description;
    private int maxMarks;
    private int noOfQuestions;
    private boolean isActive =false;


    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "quiz",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Questions>questions=new LinkedHashSet<>();
    public Quiz() {
    }

    public Quiz(String title, String description, int maxMarks, int noOfQuestions, boolean isActive) {
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.noOfQuestions = noOfQuestions;
        this.isActive = isActive;
    }

    public long getQid() {
        return qid;
    }

    public void setQid(Long qid) {
        this.qid = qid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(int maxMarks) {
        this.maxMarks = maxMarks;
    }

    public int getNoOfQuestions() {
        return noOfQuestions;
    }

    public void setNoOfQuestions(int noOfQuestions) {
        this.noOfQuestions = noOfQuestions;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Questions> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Questions> questions) {
        this.questions = questions;
    }
}
