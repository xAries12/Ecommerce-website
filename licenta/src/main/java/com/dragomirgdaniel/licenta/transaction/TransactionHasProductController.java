package com.dragomirgdaniel.licenta.transaction;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/thp")
public class TransactionHasProductController {
    private final TransactionHasProductService transactionHasProductService;

    public TransactionHasProductController(TransactionHasProductService transactionHasProductService) {
        this.transactionHasProductService = transactionHasProductService;
    }
    @PostMapping
    public void save(@RequestBody TransactionHasProductDto thpd) {
        transactionHasProductService.save(thpd);
    }
}
