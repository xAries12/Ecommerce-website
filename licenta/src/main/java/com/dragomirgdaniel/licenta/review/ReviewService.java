package com.dragomirgdaniel.licenta.review;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.account.AccountRepository;
import com.dragomirgdaniel.licenta.product.ProductRepository;
import com.dragomirgdaniel.licenta.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final AccountRepository accountRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository,
                         ProductRepository productRepository,
                         AccountRepository accountRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
        this.accountRepository = accountRepository;
    }

    public Review createReview(ReviewDto reviewDto) {
        Product product = productRepository.findById(reviewDto.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));
        Account account = accountRepository.findById(reviewDto.getAccountId())
                .orElseThrow(() -> new RuntimeException("Account not found"));
        // Create new review
        Review review =reviewRepository.findByAccountIdcAndProductId(account.getIdc(),product.getId()).orElse(new Review());
        review.setChecked(false);
        review.setReviewMessage(reviewDto.getContent());
        review.setProduct(product);
        review.setAccount(account);
        review.setReviewStars(reviewDto.getReviewStars());
        review.setReviewDate(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));


        // Save and return
       return reviewRepository.save(review);
    }
    public void updateReview(Integer idReview){
        Optional<Review> review = reviewRepository.findById(idReview);
        review.map(review1 ->{
            review1.setChecked(true);
            return reviewRepository.save(review1);
        });
    }

    public List<Review> findByAccountIdc(int accountIdc) {
        return reviewRepository.findByAccountIdc(accountIdc);

    }

    public void deleteById(Integer integer) {
        reviewRepository.deleteById(integer);
    }

    public List<Review> findAllChecked() {
        return reviewRepository.findAll().stream()
                .filter(review -> review.getChecked()== true)
                .collect(Collectors.toList());
    }
    public List<Review> findAllUnChecked() {
        return reviewRepository.findAll().stream()
                .filter(review -> review.getChecked() == false)
                .collect(Collectors.toList());
    }
}
