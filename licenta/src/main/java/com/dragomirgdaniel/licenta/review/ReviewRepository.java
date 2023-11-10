package com.dragomirgdaniel.licenta.review;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review,Integer> {
    public Optional<Review> findByAccountIdcAndProductId(int accountIdc, int productId);
    public List<Review> findByAccountIdc(int accountIdc);
}
