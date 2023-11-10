package com.dragomirgdaniel.licenta.comment;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.review.Review;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Entity
@Table(name = "comment", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idcomment", nullable = false)
    private Integer idComment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "review_idreview", nullable = false)
    private Review review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_idc", nullable = false)
    private Account account;

    @Column(name = "comment_message", nullable = false)
    private String commentMessage;

    @Column(name = "comment_date", nullable = false)
    private LocalDateTime commentDate;

    @Column(name = "checked", nullable = false)
    private Boolean checked;

    @PrePersist
    protected void onCreate() {
        commentDate = LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS);
    }
}
