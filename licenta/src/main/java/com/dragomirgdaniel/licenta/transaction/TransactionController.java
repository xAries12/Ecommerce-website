package com.dragomirgdaniel.licenta.transaction;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
    private final TransactionService transactionService;
    private final TransactionRepository transactionRepository;

    public TransactionController(TransactionService transactionService, TransactionRepository transactionRepository) {
        this.transactionService = transactionService;
        this.transactionRepository = transactionRepository;
    }

    @PostMapping
    public Transaction save(@RequestBody AccountID idAccount) {
        return transactionService.save(idAccount);
    }
    @GetMapping("/{idTransaction}")
    public Optional<Transaction> findById(@PathVariable Integer idTransaction) {
        return transactionService.findById(idTransaction);
    }
    @GetMapping("/by/{accountIdc}")
    public List<Transaction> findAllByAccount_Idc(@PathVariable("accountIdc") Integer accountIdc) {
        return transactionRepository.findAllByAccount_Idc(accountIdc);
    }
    @GetMapping
    public List<Transaction> findAll() {
        return transactionService.findAll();
    }
    @PutMapping("/{idTransaction}")
    public void update(@PathVariable Integer idTransaction,@RequestBody String status) {
        transactionService.update(idTransaction, status);
    }
    @GetMapping("/chart")
    public List<ChartData> dataChart() {
      return transactionService.dataChart();
    }
    @GetMapping("/chart/{timePeriod}")
    public List<ChartData> dataChart2(@PathVariable String timePeriod) {
        return transactionService.dataChart2(timePeriod);
    }
}
