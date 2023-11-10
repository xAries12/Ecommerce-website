package com.dragomirgdaniel.licenta.transaction;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionHasProductRepository extends JpaRepository<TransactionHasProduct,Integer> {
    List<TransactionHasProduct> findByTransaction_IdTransaction(Integer idTransaction);
}
