package com.dragomirgdaniel.licenta.review;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "review_view")
public class ReviewView {
    @Id
    @Column(name = "idreview", nullable = false)
    private Integer idReview;
    @Column(name = "account_idc", nullable = false)
    private Integer accountIdc;
    @Column(name = "product_idp", nullable = false)
    private Integer productIdp;
    @Column(name = "review_message", nullable = false)
    private String reviewMessage;
    @Column(name = "review_stars", nullable = false)
    private String reviewStars;
    @Column(name = "review_date", nullable = false)
    private LocalDateTime reviewDate;
}
