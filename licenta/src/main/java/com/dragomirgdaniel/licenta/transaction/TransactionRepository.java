package com.dragomirgdaniel.licenta.transaction;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    List<Transaction> findAllByAccount_Idc(Integer idc);
}
