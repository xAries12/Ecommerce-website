package com.dragomirgdaniel.licenta.review;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewViewRepository reviewViewRepository;

    public ReviewController(ReviewService reviewService, ReviewViewRepository reviewViewRepository) {
        this.reviewService = reviewService;
        this.reviewViewRepository = reviewViewRepository;
    }

    @PostMapping("/reviews")
    public Review createReview(@RequestBody ReviewDto reviewDto) {
         return reviewService.createReview(reviewDto);
    }
    @GetMapping("/reviews/{accountIdc}")
    public List<Review> findByAccountIdc(@PathVariable int accountIdc) {
        return reviewService.findByAccountIdc(accountIdc);
    }
    @GetMapping("/my_reviews/{account_idc}")
    public List<ReviewView> findByAccountIdc(@PathVariable Integer account_idc) {
        return reviewViewRepository.findByAccountIdc(account_idc);
    }

    @DeleteMapping("/reviews/{integer}")
    public void deleteById(@PathVariable Integer integer) {
        reviewService.deleteById(integer);
    }
    @PutMapping("/reviews/{idReview}")
    public void updateReview(@PathVariable Integer idReview) {
        reviewService.updateReview(idReview);
    }
    @GetMapping("/reviews/checked")
    public List<Review> findAllChecked() {
        return reviewService.findAllChecked();
    }
    @GetMapping("/reviews/unChecked")
    public List<Review> findAllUnChecked() {
        return reviewService.findAllUnChecked();
    }
}
