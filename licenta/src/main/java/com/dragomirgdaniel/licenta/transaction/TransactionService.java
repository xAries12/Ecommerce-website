package com.dragomirgdaniel.licenta.transaction;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.account.AccountRepository;
import com.dragomirgdaniel.licenta.account.AccountService;
import com.dragomirgdaniel.licenta.product.Product;
import com.dragomirgdaniel.licenta.product.ProductRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final AccountService accountService;
    private final ProductRepository productRepository;
    private final TransactionHasProductRepository transactionHasProductRepository;
    private final TransactionHasProductService transactionHasProductService;

    public TransactionService(TransactionRepository transactionRepository, AccountRepository accountRepository, AccountService accountService, ProductRepository productRepository, TransactionHasProductRepository transactionHasProductRepository, TransactionHasProductService transactionHasProductService) {
        this.transactionRepository = transactionRepository;
        this.accountService = accountService;
        this.productRepository = productRepository;
        this.transactionHasProductRepository = transactionHasProductRepository;
        this.transactionHasProductService = transactionHasProductService;
    }

    public Transaction save(AccountID tAccount) {
            Transaction transaction = new Transaction();
            Account account = accountService.findById(tAccount.getIdAccount());
            transaction.setAccount(account);
            transaction.setTransactionDate(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
            transaction.setStatus(Transaction.TransactionStatus.PENDING);
            transaction.setAddress(tAccount.getAddress());
            transaction.setTotalPrice(tAccount.getTotalPrice());
            transactionRepository.save(transaction);
            return transaction;
    }

    public Optional<Transaction> findById(Integer idTransaction) {
        return transactionRepository.findById(idTransaction);
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }
    public void update(Integer idTransaction, String status){

        Optional<Transaction> transaction = transactionRepository.findById(idTransaction);
        Optional<Transaction> transaction1 = transaction.map(transaction2 -> {
           transaction2.setStatus(Transaction.TransactionStatus.valueOf(status));
           return transaction2;
        });

        transactionRepository.save(transaction1.get());
    }

    public List<ChartData> dataChart(){
        List<ChartData> chartsData = new ArrayList<>();
        List<Transaction> transactions = transactionRepository.findAll();

        transactions.forEach(transaction -> {
            transaction.getTransactionHasProducts().forEach(thp -> {
                Integer productId = thp.getProductId();
                int count = thp.getCount();
                String category = productRepository.findById(productId).get().getCategory();

                // Check if the category already exists in chartsData
                ChartData existingChartData = chartsData.stream()
                        .filter(cd -> cd.getCategory().equals(category))
                        .findFirst()
                        .orElse(null);

                if (existingChartData != null) {
                    // Category already exists, update the count
                    existingChartData.setNumber(existingChartData.getNumber() + count);
                } else {
                    // Category doesn't exist, create a new ChartData object
                    ChartData chartData = new ChartData();
                    chartData.setCategory(category);
                    chartData.setNumber(count);
                    chartsData.add(chartData);
                }
            });
        });

        // Print the chart data
        chartsData.forEach(chartData -> {
            System.out.println("Category: " + chartData.getCategory() + ", Number: " + chartData.getNumber());
        });
        return chartsData;
    }

    public List<ChartData> dataChart2(String timePeriod) {
        List<ChartData> chartsData = new ArrayList<>();
        List<Transaction> transactions = transactionRepository.findAll();

        LocalDateTime startDate;
        LocalDateTime endDate = LocalDateTime.now();

        switch (timePeriod) {
            case "day":
                startDate = endDate.minusDays(1);
                break;
            case "week":
                startDate = endDate.minusWeeks(1);
                break;
            case "month":
                startDate = endDate.minusMonths(1);
                break;
            case "year":
                startDate = endDate.minusYears(1);
                break;
            default:
                throw new IllegalArgumentException("Invalid time period");
        }

        transactions.stream()
                .filter(transaction -> {
                    LocalDateTime transactionDate = transaction.getTransactionDate();
                    return !transactionDate.isBefore(startDate) && !transactionDate.isAfter(endDate);
                })
                .forEach(transaction -> {
                    transaction.getTransactionHasProducts().forEach(thp -> {
                        Integer productId = thp.getProductId();
                        int count = thp.getCount();
                        String category = productRepository.findById(productId).get().getCategory();

                        // Check if the category already exists in chartsData
                        ChartData existingChartData = chartsData.stream()
                                .filter(cd -> cd.getCategory().equals(category))
                                .findFirst()
                                .orElse(null);

                        if (existingChartData != null) {
                            // Category already exists, update the count
                            existingChartData.setNumber(existingChartData.getNumber() + count);
                        } else {
                            // Category doesn't exist, create a new ChartData object
                            ChartData chartData = new ChartData();
                            chartData.setCategory(category);
                            chartData.setNumber(count);
                            chartsData.add(chartData);
                        }
                    });
                });

        chartsData.forEach(chartData -> {
            System.out.println("Category: " + chartData.getCategory() + ", Number: " + chartData.getNumber());
        });

        return chartsData;
    }

}
