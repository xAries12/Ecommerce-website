package com.dragomirgdaniel.licenta.review;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewDto {
    private Integer productId;
    private Integer accountId;
    private String content;
    private Integer reviewStars;

}
