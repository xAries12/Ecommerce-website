package com.dragomirgdaniel.licenta.comment;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Data
public class CommentDto {
    private Integer idComment;
    private Integer idReview;
    private Integer accountIdc;
    private String commentMessage;
    private LocalDateTime commentDate;
}
