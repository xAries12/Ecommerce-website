package com.dragomirgdaniel.licenta.review;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewViewRepository extends JpaRepository<ReviewView,Integer> {
    public List<ReviewView> findByAccountIdc(Integer account_idc);
}
