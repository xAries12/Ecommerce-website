package com.dragomirgdaniel.licenta.review;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.comment.Comment;
import com.dragomirgdaniel.licenta.product.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "review", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idreview", nullable = false)
    private Integer idReview;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_idc", referencedColumnName = "idc")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "product_idp", referencedColumnName = "idp")
    private Product product;

    @Column(name = "review_message", nullable = false)
    private String reviewMessage;

    @Column(name = "review_stars", nullable = false)
    private Integer reviewStars;

    @Column(name = "review_date", nullable = false)
    private LocalDateTime reviewDate;

    @Column(name = "checked", nullable = false)
    private Boolean checked;
    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Comment> comments = new ArrayList<>();


    public void addComment(Comment comment) {
        comments.add(comment);
        comment.setReview(this);
    }

    public void removeComment(Comment comment) {
        comments.remove(comment);
        comment.setReview(null);
    }

    @PrePersist
    protected void onCreate() {
        reviewDate = LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS);
    }

}

