package com.dragomirgdaniel.licenta.comment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Integer> {
    public Optional<Comment> findByAccountIdcAndReviewIdReviewAndIdComment(int accountIdc,int reviewIdReview, int idComment);
}
