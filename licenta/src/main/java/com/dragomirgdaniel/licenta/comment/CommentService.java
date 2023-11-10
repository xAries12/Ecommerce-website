package com.dragomirgdaniel.licenta.comment;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.account.AccountRepository;
import com.dragomirgdaniel.licenta.review.Review;
import com.dragomirgdaniel.licenta.review.ReviewRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final ReviewRepository reviewRepository;
    private final AccountRepository accountRepository;

    public CommentService(CommentRepository commentRepository, ReviewRepository reviewRepository, AccountRepository accountRepository) {
        this.commentRepository = commentRepository;
        this.reviewRepository = reviewRepository;
        this.accountRepository = accountRepository;
    }

    public void createComment(CommentDto commentDto) {
        // Look up the Comment, Account and Review entities
        Review review = reviewRepository.findById(commentDto.getIdReview())
                .orElseThrow(() -> new RuntimeException("Review not found"));
        Account account = accountRepository.findById(commentDto.getAccountIdc())
                .orElseThrow(() -> new RuntimeException("Account not found"));
        // Create new comment
        Comment comment = null;
        if (commentDto.getIdComment() != null) {
            comment = commentRepository
                    .findByAccountIdcAndReviewIdReviewAndIdComment(account.getIdc(), review.getIdReview(), commentDto.getIdComment())
                    .orElseThrow(() -> new RuntimeException("Comment not found"));
        } else {
            comment = new Comment();
        }
        //Comment comment =commentRepository.findByAccountIdcAndReviewIdReviewAndIdComment(account.getIdc(),review.getIdReview(), commentDto.getIdComment()).orElse(new Comment());
        comment.setReview(review);
        comment.setChecked(false);
        comment.setAccount(account);
        comment.setCommentMessage(commentDto.getCommentMessage());
        comment.setCommentDate(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));

        if(comment.getCommentMessage()!="")
            commentRepository.save(comment);
    }
    public void updateComment(Integer idComment){
        Optional<Comment> comment = this.commentRepository.findById(idComment);
        comment.map(comment1 -> {
            comment1.setChecked(true);
            return commentRepository.save(comment1);
        });
    }

    public void deleteById(Integer idComment) {
        commentRepository.deleteById(idComment);
    }

    public void update(CommentDto commentDto){
       Comment comment = commentRepository.findById(commentDto.getIdComment()).orElseThrow(()-> new RuntimeException("Comment not found"));
        comment.setCommentMessage(commentDto.getCommentMessage());
        comment.setCommentDate(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        if(comment.getCommentMessage()!="")
            commentRepository.save(comment);
    }

    public List<Comment> findAllChecked() {
        return commentRepository.findAll().stream()
                .filter(comment -> comment.getChecked()== true)
                .collect(Collectors.toList());
    }
    public List<Comment> findAllUnChecked() {
        return commentRepository.findAll().stream()
                .filter(comment -> comment.getChecked() == false)
                .collect(Collectors.toList());
    }
}
